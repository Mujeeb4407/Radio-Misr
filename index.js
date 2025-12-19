/*call(consoleMe, 3, 5);
function call(callback, x, y) {
    let result = x + y;
    callback(result);
}

function consoleMe(result) {
    console.log(result);
}

let number = [1, 2, 3, 4, 5];

number.forEach(display);

function display (element) {
    console.log(element);
}

let fruits = ["APPLE", "MANGOE", "BANANA"];

fruits.forEach(lowerCase);

function display(element, index, array) {
    array[index] = element.toUpperCase()
    console.log(array[index]);
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase()
    console.log(array[index]);
}

const dates = ["2024-1-10", "2025-3-20", "2026-2-14"];

const answer = dates.map(formatDate);
console.log(answer);

function formatDate(element) {
    const part = element.split("-");
    return `${part[1]}/${part[2]}/${part[0]}`;
}

const ages = [16, 17, 18, 35, 25, 70];

const adult = ages.filter(child);
console.log(adult);

function isAdult(element) {
    return element >= 18;
}

function child(element) {
    return element < 18;
}

const fruits = ["babana", "corn", "apple", "pomegranate", "coconut"];

function shortWords(element) {
    return element.length < 6;
}

const answer = fruits.filter(shortWords);
console.log(answer);


const number = [20, 68, 45, 70, 90, 87,];

const answer = number.reduce(display);

function display(accumulate, element) {
    return accumulate + element;
}

console.log(answer);


function maximum(accumulate, element) {
    return Math.max(accumulate, element);
}

const review = number.reduce(maximum);
console.log(review);


setTimeout(() => console.log(`hello`), 3000);

function 
calculateMe(callback, y, x) {
    let result = y + x;
    callback(result);
}

function resultMe(result) {
    console.log(result);
}

calculateMe(resultMe, 3, 2);

let formatDate = ['2024-12-3', '2023-4-8', '2019-1-18'];

function formattedDate(element) {
    const separate = element.split('-');
    return `${separate[1]}/${separate[2]}/${separate[0]}`;
}

const dates = formatDate.map(formattedDate);
console.log(dates);*/

function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 1000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 2");
  console.log("Task 3");
}
func1(func2);
