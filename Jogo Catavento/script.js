const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;

const allQuestions = [

        {
            question: "Qual é a capital do Brasil?",
            answers: [
                { text: "Rio de Janeiro", correct: false },
                { text: "Brasília", correct: true },
                { text: "São Paulo", correct: false },
                { text: "Salvador", correct: false }
            ]
        },
        {
            question: "a",
            answers: [
                { text: "a", correct: true },
                { text: "b", correct: false },
                { text: "c", correct: false },
                { text: "d", correct: false }
            ]
        },
        {
            question: "a",
            answers: [
                { text: "a", correct: true },
                { text: "b", correct: false },
                { text: "c", correct: false },
                { text: "d", correct: false }
            ]
        },
        {
            question: "a",
            answers: [
                { text: "a", correct: true },
                { text: "b", correct: false },
                { text: "c", correct: false },
                { text: "d", correct: false }
            ]
        },
        {
            question: "a",
            answers: [
                { text: "a", correct: true },
                { text: "b", correct: false },
                { text: "c", correct: false },
                { text: "d", correct: false }
            ]
        },
        {
            question: "a",
            answers: [
                { text: "a", correct: true },
                { text: "b", correct: false },
                { text: "c", correct: false },
                { text: "d", correct: false }
            ]
        },
        {
            question: "a",
            answers: [
                { text: "a", correct: true },
                { text: "b", correct: false },
                { text: "c", correct: false },
                { text: "d", correct: false }
            ]
        },
        {
            question: "a",
            answers: [
                { text: "a", correct: true },
                { text: "b", correct: false },
                { text: "c", correct: false },
                { text: "d", correct: false }
            ]
        }
    ];

const questions = shuffle(allQuestions).slice(0, 4);

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', () => {
    questionContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;
    clearAnswerButtons();
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function clearAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultText.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


