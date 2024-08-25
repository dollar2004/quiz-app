const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(index) {
    const correct = index === questions[currentQuestionIndex].correctAnswer;
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach((button, i) => {
        if (i === questions[currentQuestionIndex].correctAnswer) {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });
    nextButton.classList.remove('hidden');
}

function showScore() {
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreText.innerText = `${score} / ${questions.length}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', nextQuestion);

showQuestion();
