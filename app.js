const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smalest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Aractic", correct: false },
      { text: "Australia", correct: true },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: true },
      { text: "Sahara", correct: false },
      { text: "Antractica", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vetican city", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri lanka", correct: false },
    ],
  },
  {
    question: "The milky way is what?",
    answers: [
      { text: "A palnet", correct: false },
      { text: "A galaxy", correct: true },
      { text: "A universe", correct: false },
      { text: "A solar system", correct: false },
    ],
  },
  {
    question: "who has the laeder o cuba since 1959?",
    answers: [
      { text: "Hugo chavez", correct: false },
      { text: "Evo morales", correct: false },
      { text: "Fidel castro", correct: true },
      { text: "Cipriano castro", correct: false },
    ],
  },
  {
    question:
      "What is a teen slang word for you only live once,? often used ironically",
    answers: [
      { text: "Yolk", correct: false },
      { text: "Yellow", correct: false },
      { text: "Yo", correct: false },
      { text: "YOLO", correct: true },
    ],
  },
  {
    question: "The statue of liberty was a gift from which country?",
    answers: [
      { text: "Germany", correct: false },
      { text: "France", correct: true },
      { text: "Canada", correct: false },
      { text: "Russia", correct: false },
    ],
  },
  {
    question: "A common ladybug, what color are the spots?",
    answers: [
      { text: "Yellow", correct: false },
      { text: "Green", correct: false },
      { text: "Red", correct: false },
      { text: "Black", correct: true },
    ],
  },
  {
    question: "If you're in kabul what country's capital are you in?",
    answers: [
      { text: "Iraq", correct: false },
      { text: "Syria", correct: false },
      { text: "Afghanistan", correct: true },
      { text: "Iran", correct: false },
    ],
  },
  {
    question: "Where were the olympics game in 2014 held?",
    answers: [
      { text: "St.luis", correct: false },
      { text: "London", correct: false },
      { text: "Sochi", correct: true },
      { text: "Paris", correct: false },
    ],
  },
  {
    question: "If you are extremely happy, you are said to be in what heaven?",
    answers: [
      { text: "Seven", correct: false },
      { text: "Eight", correct: false },
      { text: "Second", correct: true },
      { text: "Ten", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();