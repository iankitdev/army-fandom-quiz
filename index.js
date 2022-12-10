var readlineSync = require('readline-sync');

var score = 0;

console.log("---------- INDIAN ARMY FANDOM QUIZ ----------");
console.log("---------------------------------------------");
var userName = readlineSync.question("What is your Name? ");
console.log("Welcome! "+ userName);
console.log("Let's see how much you can Score. GOOD LUCK!");
console.log("---------------------------------------------");

// PLAY FUNCTION

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("You are Right!")
    score = score+1;
    
  } else {
    console.log("You are Wrong!");
  }
  console.log("Current Score : "+ score);
  console.log("-----------------------------")
}

// QUESTION ARRAY

var question = [
  {
    question: "In which year Indian army was established? ",
    answer: "1895"
  },
  {
    question: "How many Commands of Indian Army are there? ",
    answer: "7"
  },
  {
    question: "Where is the headquarter of Eastern Command of Indian Army? ",
    answer: "Kolkata"
  },
  {
    question: "Where is the headquarter of Northern Command of Indian Army? ",
    answer: "Udhampur"
  },
  {
    question: "What is the Smallest unit of Indian Army called? ",
    answer: "Section"
  },
  {
    question: "Who is the Supreme Commander of the Indian Army? ",
    answer: "President"
  },
  {
    question: "Where is the Indian Army Hall of Fame? ",
    answer: "Leh"
  },
  {
    question: "How many Spokes are on the Ashoka Chakra? ",
    answer: "24"
  }
]

// FOR LOOP

for (var i=0; i<question.length; i++){
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("YAY! Your Total Score is : " + score);

