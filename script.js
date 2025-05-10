const questions = [
    // Original 14 questions...
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Leo Tolstoy", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "Which is the smallest prime number?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Australia", correct: false },
            { text: "South America", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent Van Gogh", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Quartz", correct: false }
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: true },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1920", correct: false },
            { text: "1898", correct: false }
        ]
    },
    {
        question: "Which language has the most native speakers?",
        answers: [
            { text: "English", correct: false },
            { text: "Hindi", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "Spanish", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "Mount Everest", correct: true },
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Makalu", correct: false }
        ]
    },

    // NEW QUESTIONS (15–30)
    {
        question: "What is the main gas found in the air we breathe?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "How many continents are there?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "India", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        question: "Who discovered gravity?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "Which organ purifies blood in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Liver", correct: false },
            { text: "Kidneys", correct: true },
            { text: "Lungs", correct: false }
        ]
    },
    {
        question: "How many colors are there in a rainbow?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which bird is often associated with delivering babies?",
        answers: [
            { text: "Stork", correct: true },
            { text: "Eagle", correct: false },
            { text: "Swan", correct: false },
            { text: "Owl", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "How many teeth does an adult human have?",
        answers: [
            { text: "28", correct: false },
            { text: "30", correct: false },
            { text: "32", correct: true },
            { text: "34", correct: false }
        ]
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
            { text: "Marie Curie", correct: false }
        ]
    },
    {
        question: "What do bees collect and use to make honey?",
        answers: [
            { text: "Water", correct: false },
            { text: "Nectar", correct: true },
            { text: "Pollen", correct: false },
            { text: "Sap", correct: false }
        ]
    },
    {
        question: "Which part of the plant conducts photosynthesis?",
        answers: [
            { text: "Root", correct: false },
            { text: "Stem", correct: false },
            { text: "Leaf", correct: true },
            { text: "Flower", correct: false }
        ]
    },
    {
        question: "Which country invented paper?",
        answers: [
            { text: "India", correct: false },
            { text: "Egypt", correct: false },
            { text: "China", correct: true },
            { text: "Greece", correct: false }
        ]
    },
    {
        question: "What is the freezing point of water?",
        answers: [
            { text: "0°C", correct: true },
            { text: "100°C", correct: false },
            { text: "50°C", correct: false },
            { text: "10°C", correct: false }
        ]
    },
    {
        question: "Which instrument measures temperature?",
        answers: [
            { text: "Barometer", correct: false },
            { text: "Thermometer", correct: true },
            { text: "Hygrometer", correct: false },
            { text: "Altimeter", correct: false }
        ]
    }
];



const next = document.querySelector(".submit")
const question = document.querySelector(".question")
const options = document.querySelector(".options")

let current =0
let score =0

function start(){
    current =0;
    score =0
    next.innerHTML = "Next"
    showQuestion();
}
function showQuestion (){
    resetstate()
    let ques = questions[current]
    let questionno = current+1;
    question.innerHTML = questionno + "." + ques.question

    ques.answers.forEach((ans)=>{
        let btn = document.createElement("button")
        btn.innerHTML = ans.text
        options.appendChild(btn)
        if(ans.correct){
            btn.dataset.correct = ans.correct
        }
        btn.addEventListener("click", select)
    })
}
function resetstate(){
    next.style.display = "none"
    // while(options.firstChild){
    //     options.removeChild(options.firstChild)
    // }
    options.innerHTML = ""
}

function select(e){
    let selected = e.target
    let iscorrect = selected.dataset.correct === "true"
    if(iscorrect){
        selected.classList.add("correct")
        score++;
    }
    else{
        selected.classList.add("incorrect")
    }
    Array.from(options.children).forEach((el)=>{
        if(el.dataset.correct === "true"){
            el.classList.add("correct")
        }
        el.disabled = true
    })
    next.style.display = "block"
}
function handlenextbutton (){
    current++;
    if(current < questions.length){
        showQuestion();
    }
    else{
        showscore()
    }

}
function showscore(){
    resetstate()
    question.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML = "Play Again!"
    next.style.display = "block"
}

next.addEventListener("click",()=>{
    if(current < questions.length){
        handlenextbutton();
    }
    else{
        start();
    }
})

start()



