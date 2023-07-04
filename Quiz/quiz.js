const data = [
    {id:1,
    question:"What is the correct action when a colleague asks help?",
    answers:[
    {answer:"Ignore them",isCorrect:false},
    {answer:"Help them",isCorrect:false},
    {answer:"Give them help after finishing your work",isCorrect:true},
    {answer:"Shout at them",isCorrect:false}]},
    {id:2,
        question:"What will you do if someone takes credit of your work?",
        answers:[
        {answer:"Ignore them",isCorrect:false},
        {answer:"Confront them",isCorrect:false},
        {answer:"Report to higher officers",isCorrect:true},
        {answer:"Shout at them",isCorrect:false}]},
    {id:3,
            question:"What will you do if client offers less time to complete a project?",
            answers:[
            {answer:"Tell it is not possible",isCorrect:false},
            {answer:"Politely explain the needs",isCorrect:true},
            {answer:"Resign",isCorrect:false},
            {answer:"Accept it",isCorrect:false}]}
    ]


const gamescreen = document.querySelector(".game");
const resultscreen = document.querySelector(".result");
const question=document.querySelector(".question");
const answersContainer=document.querySelector(".answers");
const submit=document.querySelector(".submit");
const play=document.querySelector(".play")


let qindex=0;
let correctcount=0;
let wrongcount=0;
let total=0;
let selectedanswer;

const playAgain = () =>{
    qindex = 0;
    correctcount = 0;
    wrongcount = 0;
    total = 0;
    selectedanswer;
    showQuestion(qindex);
}

const showResult=()=>{
    resultscreen.style.display="block";
    gamescreen.style.display="none";
    resultscreen.querySelector(".correct").textContent=
    `Correct Answers : ${correctcount}`;
    resultscreen.querySelector(".wrong").textContent=
    `Wrong Answers : ${wrongcount}`;
    let score=correctcount*10 - (wrongcount*5);
    resultscreen.querySelector(".score").textContent=
    `Score : ${score}`;
}
play.addEventListener("click",()=>{
    gamescreen.style.display="block";
    resultscreen.style.display="none";
    playAgain();
})
const showQuestion=(qNo)=>{
    if(qindex===data.length) return showResult();
 
    selectedanswer=null;
    question.textContent=data[qNo].question;
    answersContainer.innerHTML=data[qNo].answers.map((item,index)=>
        `<div class="answer">
        <input type="radio" name="answer" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
        </div>`).join("");
        selectAnswer();  
}

const selectAnswer=()=>{
    answersContainer.querySelectorAll("input").forEach(element => {
        element.addEventListener("click",(el)=>{
            selectedanswer=el.target.value;
            //console.log(el.target.value);
        })
    });
}

const submitAnswer=()=>{
    submit.addEventListener("click",()=>{
        if(selectedanswer!==null){
        selectedanswer==="true" ? correctcount++ : wrongcount++;
        qindex++;
        showQuestion(qindex);
        }
        else alert("Select an answer");
    });
};

showQuestion(qindex);
submitAnswer();