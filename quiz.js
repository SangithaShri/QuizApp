const questions = [
    {
        question: "Who invented JavaScript?",
        options: ["Douglas Crockford",
        "Brendan Eich",
        "Sherlock Holmes",
        "Rupert Ben"],
        correctAnswer: "Brendan Eich",
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java",
        "C",
        "Python",
        "JavaScript"],
        correctAnswer: "JavaScript",
    },
    {
        question: "Which tool can you use to ensure code quality?",
        options: ["ESLint",
        "jQuery",
        "RequireJS",
        "Angular"],
        correctAnswer: "ESLint",
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1997",
        "1991",
        "1995",
        "none of the above"],
        correctAnswer: "1995",
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const startButton = document.getElementById("start");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");

function startQuiz() {
    startButton.style.display = "none";
    loadQuestion();
    timer = setInterval(updateTimer, 1000);
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", checkAnswer);
            optionsContainer.appendChild(button);
        });
    } else {
        finishQuiz();
    }
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function updateTimer() {
    const timerValue = parseInt(timerElement.textContent);
    if (timerValue > 0) {
        timerElement.textContent = timerValue - 1;
    } 
    else {
        clearTimeout(timer);
        finishQuiz();
    }
}

function finishQuiz() {
    questionText.textContent = "Quiz Finished!";
    optionsContainer.innerHTML = "";
    scoreElement.textContent = ` ${score} out of ${questions.length}`;
}

startButton.addEventListener("click", startQuiz);