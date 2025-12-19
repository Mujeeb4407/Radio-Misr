let fortune1 = "you will be reach before the end of next year";
let fortune2 = "you will successful in live";
let fortune3 = "you will find a good wife";
let fortune4 = "you will soon buy your first car";
let fortune5 = "you will be respected";

let randomNumber = Math.floor(Math.random() * 6);

let selectedFortune;

if(randomNumber === 1){
  selectedFortune = fortune1
}
else if(randomNumber === 2){
  selectedFortune = fortune2;
}
else if(randomNumber === 3){
  selectedFortune = fortune3;
}
else if(randomNumber === 4){
  selectedFortune = fortune4
}
else if(randomNumber === 5){
  selectedFortune = fortune5
}
console.log(selectedFortune);


// Instead of writing many if statements, you can store fortunes in an array and pick one directly:
let fortunes = [
  "you will be rich before the end of next year",
  "you will be successful in life",
  "you will find a good wife",
  "you will soon buy your first car",
  "you will be respected"
];

let randomNumber2 = Math.floor(Math.random() * fortunes.length);
let selectedFortune2 = fortunes[randomNumber];

console.log(selectedFortune);