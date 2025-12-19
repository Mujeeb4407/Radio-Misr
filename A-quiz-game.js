const questions = [
  {
    category: "Geography",
    question: "What is the capital city of Nigeria?",
    choices: ["Lagos", "Abuja", "Kano"],
    answer: "Abuja"
  },
  {
  category: "Entertainment",
  question: "Which Nigerian artist sang the hit song 'Essence'?",
  choices: ["Wizkid", "Davido", "Burna Boy"],
  answer: "Wizkid"
},
  {
  category: "Culture",
  question: "What is Nigeria's most popular food made from rice?",
  choices: ["Jollof Rice", "Fried Rice", "Pounded Yam"],
  answer: "Jollof Rice"
},
  {
    category: "History",
    question: "In what year did Nigeria gain independence?",
    choices: ["1960", "1970", "1957"],
    answer: "1960"
  },
  {
    category: "Music",
    question: "Who is known as the founder of Afrobeat in Nigeria?",
    choices: ["Fela Kuti", "Burna Boy", "Wizkid"],
    answer: "Fela Kuti"
  }
];

/* You should have a function named getRandomQuestion that takes an array of 
questions as a parameter and returns a random question object from the array.*/
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

/* You should have a function named getRandomComputerChoice that takes the array of the 
available choices as a parameter, and returns a random answer to the selected question.*/
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}
;
/*You should have a function named getResults that takes the question object 
as the first parameter and the computer's choice as the second parameter. */
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {  
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// Example usage
const randomQuestion = getRandomQuestion(questions);
console.log("Category:", randomQuestion.category);
console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);


/*const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's choice:", computerChoice);

const result = getResults(randomQuestion, computerChoice);
console.log(result);*/