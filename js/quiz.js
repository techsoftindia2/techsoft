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

    // Extract unique tags from the filtered subject data, excluding the subject tag itself
    const tags = [...new Set(subjectData.flatMap(item => item.tags))].filter(t => t !== subject);
    const categoryButtons = document.getElementById('category-buttons');
    const categorySelection = document.getElementById('category-selection');
    const quizContent = document.getElementById('quiz-content');

    categorySelection.style.display = 'block';
    quizContent.style.display = 'none';
    categoryButtons.innerHTML = '';

    tags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline-primary m-2 px-4 py-2 text-uppercase font-weight-bold';
        btn.innerText = tag;
        btn.onclick = () => startQuiz(tag);
        categoryButtons.appendChild(btn);
    });
}

function startQuiz(tag) {
    // Filter questions that contain the selected tag in their tags array
    filteredQuizData = subjectData.filter(q => q.tags.includes(tag));

    // Shuffle the filtered questions using Fisher-Yates algorithm
    for (let i = filteredQuizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredQuizData[i], filteredQuizData[j]] = [filteredQuizData[j], filteredQuizData[i]];
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
        
        reviewHtml += `
            <div class="col-12 mb-3">
                <div class="card border-${isCorrect ? 'success' : 'danger'} shadow-sm">
                    <div class="card-body">
                        <h6 class="font-weight-bold">Q${index + 1}: ${item.question}</h6>
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