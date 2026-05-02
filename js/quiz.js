// quiz.js
import { allQuizData } from './quizData.js';

let subjectData = [];
let filteredQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function initCategorySelection() {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');

    // Update the main heading to show the selected subject
    const mainHeading = document.querySelector('.jumbotron h1');
    if (subject && mainHeading) {
        mainHeading.innerText = `${subject} Quiz`;
    }

    // Filter data by subject if specified, otherwise use all data
    subjectData = subject 
        ? allQuizData.filter(q => q.tags.includes(subject))
        : allQuizData;

    // Count occurrences of each tag within the filtered subject data
    const tagCounts = subjectData.reduce((acc, q) => {
        q.tags.forEach(tag => {
            if (tag !== subject) {
                acc[tag] = (acc[tag] || 0) + 1;
            }
        });
        return acc;
    }, {});

    // Get unique tags and sort them alphabetically
    const tags = Object.keys(tagCounts).sort();
    
    const categoryButtons = document.getElementById('category-buttons');
    const categorySelection = document.getElementById('category-selection');
    const quizContent = document.getElementById('quiz-content');
    const searchInput = document.getElementById('category-search');

    categorySelection.style.display = 'block';
    quizContent.style.display = 'none';

    // Helper function to render buttons based on a filter
    const renderButtons = (filter = '') => {
        categoryButtons.innerHTML = '';
        const searchTerm = filter.toLowerCase().trim();

        // Add "Mix Mode" button if it matches search or search is empty
        if (!searchTerm || "mix mode".includes(searchTerm)) {
            const mixBtn = document.createElement('button');
            mixBtn.className = 'btn btn-primary m-2 px-4 py-2 text-uppercase font-weight-bold d-flex align-items-center shadow-sm';
            mixBtn.innerHTML = `Mix Mode <span class="tag-badge bg-white text-primary">${subjectData.length}</span>`;
            mixBtn.onclick = () => startQuiz('Mixed');
            categoryButtons.appendChild(mixBtn);
        }

        const filteredTags = tags.filter(tag => tag.toLowerCase().includes(searchTerm));

        if (filteredTags.length === 0) {
            categoryButtons.innerHTML = '<div class="text-muted my-4">No matching categories found.</div>';
            return;
        }

        filteredTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-outline-primary m-2 px-4 py-2 text-uppercase font-weight-bold';
            btn.innerHTML = `${tag} <span class="tag-badge">${tagCounts[tag]}</span>`;
            btn.onclick = () => startQuiz(tag);
            categoryButtons.appendChild(btn);
        });
    };

    // Set up search listener
    if (searchInput) {
        searchInput.value = ''; // Clear search on load
        searchInput.oninput = (e) => renderButtons(e.target.value);
    }

    // Initial render
    renderButtons();
}

function startQuiz(tag) {
    // Filter questions that contain the selected tag in their tags array
    if (tag === 'Mixed') {
        // Mix Mode: Take questions from all available categories for the current subject
        filteredQuizData = [...subjectData];
    } else {
        filteredQuizData = subjectData.filter(q => q.tags.includes(tag));
    }

    // Shuffle the filtered questions using Fisher-Yates algorithm
    for (let i = filteredQuizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredQuizData[i], filteredQuizData[j]] = [filteredQuizData[j], filteredQuizData[i]];
    }

    // Limit the quiz to a batch of 10 questions if more are available
    if (filteredQuizData.length > 10) {
        filteredQuizData = filteredQuizData.slice(0, 10);
    }

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    document.getElementById('category-selection').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-category-label').innerText = tag;
    
    renderQuiz();
}

function renderQuiz() {
    if (currentQuestionIndex >= filteredQuizData.length) {
        showResults();
        return;
    }

    const data = filteredQuizData[currentQuestionIndex];
    const questionEl = document.getElementById('quiz-question');
    const counterEl = document.getElementById('quiz-counter');
    const optionsContainer = document.getElementById('quiz-options');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-btn');
    
    // Update progress bar width
    const progressPercent = (currentQuestionIndex / filteredQuizData.length) * 100;
    const progressBar = document.getElementById('quiz-progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }

    questionEl.innerText = data.question;

    // Display image if available
    let imageContainer = document.getElementById('quiz-image-container');
    if (!imageContainer) {
        imageContainer = document.createElement('div');
        imageContainer.id = 'quiz-image-container';
        imageContainer.className = 'text-center mb-4';
        questionEl.after(imageContainer);
    }

    if (data.image) {
        imageContainer.innerHTML = `<img src="${data.image}" class="img-fluid rounded shadow-sm" alt="Question Illustration" style="max-height: 350px;">`;
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }

    // Display code snippet if available
    let codeContainer = document.getElementById('quiz-code-container');
    if (!codeContainer) {
        codeContainer = document.createElement('div');
        codeContainer.id = 'quiz-code-container';
        questionEl.after(codeContainer);
    }
    if (data.code) {
        codeContainer.innerHTML = `
            <div class="code-snippet-container">
                <pre><code>${escapeHtml(data.code)}</code></pre>
            </div>
        `;
        codeContainer.style.display = 'block';
    } else {
        codeContainer.style.display = 'none';
    }

    counterEl.innerText = `Question ${currentQuestionIndex + 1} of ${filteredQuizData.length}`;
    feedbackEl.innerHTML = '';
    optionsContainer.innerHTML = '';
    nextBtn.style.display = 'none';

    data.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = option;
        btn.onclick = () => handleSelection(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleSelection(selectedIndex, selectedBtn) {
    const data = filteredQuizData[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-btn');

    options.forEach(opt => opt.disabled = true);
    nextBtn.style.display = 'inline-block';

    const isCorrect = selectedIndex === data.correct;
    userAnswers.push({ selectedIndex, isCorrect });

    const explanationText = data.explanation ? `<div class="mt-2 small text-muted font-italic"><strong>Explanation:</strong> ${data.explanation}</div>` : '';

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        feedbackEl.innerHTML = `<span class="text-success">Perfect! That is correct. 🎉</span>${explanationText}`;
        score++;

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        selectedBtn.classList.add('wrong');
        options[data.correct].classList.add('correct');
        feedbackEl.innerHTML = `<span class="text-danger">Not quite! The correct answer is highlighted. Keep going! 💪</span>${explanationText}`;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    renderQuiz();
}

function showResults() {
    const quizContent = document.getElementById('quiz-content');

    let reviewHtml = `
        <div class="mt-5 text-left">
            <h3 class="text-center mb-4">Review Your Answers</h3>
            <div class="row">
    `;

    filteredQuizData.forEach((item, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer.isCorrect;
        const imageSnippet = item.image ? `
            <div class="text-center mb-3">
                <img src="${item.image}" class="img-fluid rounded border" alt="Review Image" style="max-height: 150px;">
            </div>
        ` : '';
        const codeSnippet = item.code ? `
            <div class="code-snippet-container mb-2" style="box-shadow: 0 5px 15px rgba(0,0,0,0.2), 0 0 10px rgba(40, 120, 235, 0.1);">
                <pre class="p-2 small"><code>${escapeHtml(item.code)}</code></pre>
            </div>
        ` : '';
        
        reviewHtml += `
            <div class="col-12 mb-3">
                <div class="card border-${isCorrect ? 'success' : 'danger'} shadow-sm">
                    <div class="card-body">
                        <h6 class="font-weight-bold">Q${index + 1}: ${item.question}</h6>
                        ${imageSnippet}
                        ${codeSnippet}
                        <div class="small mt-2">
                            <p class="mb-1"><strong>Your Answer:</strong> <span class="${isCorrect ? 'text-success' : 'text-danger'}">${item.options[userAnswer.selectedIndex]} <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} ml-1"></i></span></p>
                            ${!isCorrect ? `<p class="mb-0 text-success"><strong>Correct Answer:</strong> ${item.options[item.correct]}</p>` : ''}
                            ${item.explanation ? `<p class="mb-0 mt-2 text-muted border-top pt-2"><strong>Why?</strong> ${item.explanation}</p>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    reviewHtml += '</div></div>';
    
    quizContent.innerHTML = `
        <div class="progress mb-4" style="height: 10px; border-radius: 5px;">
            <div class="progress-bar bg-success" role="progressbar" style="width: 100%"></div>
        </div>
        <div class="text-center py-4">
            <h2 class="display-4 mb-3">Quiz Completed!</h2>
            <p class="h4 mb-4">Your Score: <span class="text-primary font-weight-bold">${score}</span> / ${filteredQuizData.length}</p>
            <div class="mb-4">
                <button class="btn btn-primary px-5" onclick="location.reload()">Try Again</button>
                <a href="quiz.html" class="btn btn-outline-secondary ml-3">Go to All Quiz</a>
            </div>
            ${reviewHtml}
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    initCategorySelection();
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
});

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}