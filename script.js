const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');
const maiorQue2 = document.getElementById('maiorQue2');
const escolaS = document.getElementById('escolaS');

let currentQuestionIndex = 0;
let score = 0;

const allQuestions = [

        {
            question: "Qual é o foco do Museu Catavento?",
            answers: [
                { text: "Adultos", correct: false },
                { text: "Idosos", correct: false },
                { text: "Crianças e jovens", correct: true },
                { text: "Bebês", correct: false }
            ]
        },
        {
            question: "Qual é a missão do Museu Catavento?",
            answers: [
                { text: "Promover shows musicais", correct: false },
                { text: "Tornar o mundo científico acessível para todas as idades", correct: true },
                { text: "Fornecer alimentos saudáveis", correct: false },
                { text: "Oferecer atividades esportivas", correct: false }
            ]
        },
        {
            question: "Quantas instalações interativas o Museu Catavento possui?",
            answers: [
                { text: "35", correct: false },
                { text: "184", correct: false },
                { text: "219", correct: true },
                { text: "323", correct: false }
            ]
        },
        {
            question: "Qual é a localização do Museu Catavento?",
            answers: [
                { text: "Avenida Mercúrio, Parque Dom Pedro III", correct: true },
                { text: "Avenida dos Museus, Centro de Ciências", correct: false },
                { text: "Rua das Artes, Praça Científica", correct: false },
                { text: "Rua da Cultura, Parque das Ciências", correct: false }
            ]
        },
        {
            question: "Qual seção do museu aborda astronomia e sistema Solar?",
            answers: [
                { text: "Universo", correct: true },
                { text: "Vida", correct: false },
                { text: "Engenho", correct: false },
                { text: "Sociedade", correct: false }
            ]
        },
        {
            question: "Qual seção do museu tem exposições sobre a origem da vida?",
            answers: [
                { text: "Universo", correct: false },
                { text: "Vida", correct: true },
                { text: "Engenho", correct: false },
                { text: "Sociedade", correct: false }
            ]
        },
        {
            question: "O que é um catavento, em termos simbólicos?",
            answers: [
                { text: "Uma ferramenta de cozinha", correct: false },
                { text: "Um dispositivo que gira ao vento", correct: true },
                { text: "Um brinquedo para crianças", correct: false },
                { text: "Um tipo de instrumento musical", correct: false }
            ]
        },
        {
            question: "Além de educação científica, qual outro valor o Museu Catavento promove?",
            answers: [
                { text: "Atividades esportivas", correct: false },
                { text: "Alimentação saudável", correct: false },
                { text: "Divulgação científica", correct: true },
                { text: "Ensino de idiomas", correct: false }
            ]
        },
        {
            question: "O que representa o nome Catavento em relação ao museu?",
            answers: [
                { text: "Movimento, mudança e descoberta", correct: true },
                { text: "Estabilidade e tradição", correct: false },
                { text: "Religião e espiritualidade", correct: false },
                { text: "Competição e rivalidade", correct: false }
            ]
        },
        {
            question: "Qual é a área total do prédio do Museu Catavento?",
            answers: [
                { text: "6 mil metros quadrados", correct: false },
                { text: "12 mil metros quadrados", correct: true },
                { text: "18 mil metros quadrados", correct: false },
                { text: "24 mil metros quadrados", correct: false }
            ]
        },
        {
            question: "Qual é o objetivo principal das exposições interativas do Museu Catavento?",
            answers: [
                { text: "Entretenimento puro", correct: false },
                { text: "Treinamento profissional", correct: false },
                { text: "Venda de produtos", correct: false },
                { text: "Explorar campos do conhecimento", correct: true }
            ]
        },
        {
            question: "Qual é o significado do Museu Catavento para a cidade de São Paulo?",
            answers: [
                { text: "Apenas uma atração turística", correct: false },
                { text: "Um local de pesquisa científica", correct: false },
                { text: "Um espaço cultural e educacional", correct: true },
                { text: "Um centro esportivo", correct: false }
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
    escolaS.classList.add('hide');
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
    maiorQue2.classList.add('hide');
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultText.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
    if (score > 2) {
       maiorQue2.classList.remove('hide');
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}