const allQuizData = [
    {
        question: "Which language is primarily used for Web Styling?",
        options: ["HTML", "CSS", "Python", "Java"],
        correct: 1,
        tags: ["Web Development", "Frontend", "CSS"]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<css>", "<style>", "<design>"],
        correct: 2,
        tags: ["Web Development", "Frontend", "HTML"]
    },
    {
        question: "What does DSA stand for?",
        options: ["Data System Analysis", "Digital Software Architecture", "Data Structures and Algorithms", "Direct System Access"],
        correct: 2,
        tags: ["Data Structures", "Computer Science", "Algorithms"]
    },
    {
        question: "Which of the following is a Linear Data Structure?",
        options: ["Tree", "Graph", "Array", "Binary Search Tree"],
        correct: 2,
        tags: ["Data Structures", "Programming Fundamentals"]
    },
    {
        question: "Which of these is NOT a Python data type?",
        options: ["List", "Tuple", "Dict", "Class"],
        correct: 3,
        tags: ["Python", "Programming", "Backend"]
    }
];

let filteredQuizData = [];
let currentQuestionIndex = 0;
let score = 0;

function initCategorySelection() {
    // Extract all tags from all questions and create a unique set
    const tags = [...new Set(allQuizData.flatMap(item => item.tags))];
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
    filteredQuizData = allQuizData.filter(q => q.tags.includes(tag));
    currentQuestionIndex = 0;
    score = 0;
    
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

    if (selectedIndex === data.correct) {
        selectedBtn.classList.add('correct');
        feedbackEl.innerHTML = '<span class="text-success">Perfect! That is correct. 🎉</span>';
        score++;

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        selectedBtn.classList.add('wrong');
        options[data.correct].classList.add('correct');
        feedbackEl.innerHTML = '<span class="text-danger">Not quite! The correct answer is highlighted. Keep going! 💪</span>';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    renderQuiz();
}

function showResults() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div class="text-center py-4">
            <h2 class="display-4 mb-3">Quiz Completed!</h2>
            <p class="h4 mb-4">Your Score: <span class="text-primary font-weight-bold">${score}</span> / ${filteredQuizData.length}</p>
            <button class="btn btn-primary px-5" onclick="location.reload()">Try Again</button>
            <a href="quiz.html" class="btn btn-outline-secondary ml-3">Go to All Quiz</a>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', initCategorySelection);