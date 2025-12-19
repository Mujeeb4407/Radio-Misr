/*document.title = 'website';

document.body.style.backgroundColor = 'aqua';
console.log(document);
console.dir(document);


let userName = 'Abdul Mujeeb';
let message = document.getElementById('myH1');
message.textContent += " " + (userName === "" ? 'guest' : userName);
console.log(message.textContent)

const display = document.getElementById('myH1');
myH1.style.backgroundColor = 'yellow';
myH1.style.textAlign = 'center'
myH1.style.border = '1px solid';
myH1.style.width = '100%';
myH1.style.height = '100%';
myH1.style.padding = '30px';

const fruits = document.getElementsByClassName('fruits');

Array.from(fruits).forEach(fruit => {
    fruit.style.color = 'blue';
    fruit.style.backgroundColor = 'grey';
});

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

//h4Elements[0].style.backgroundColor = "yellow";

//for(let h4Element of h4Elements){
  //
  //  h4Element.style.fontSize = "30px";
    //h4Element.style.backgroundColor = "yellow";}

//for(let liElement of liElements){
  //  liElement.style.backgroundColor = "lightGreen"
  //  liElement.style.listStyle = "none";}

  Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.fontSize = "30px";
    h4Element.style.backgroundColor = "yellow";
  });

  Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
    liElement.style.listStyle = "none";
  })

 //const element = document.querySelector('h1');
//element.style.backgroundColor = "yellow"

const element = document.querySelectorAll(".fruits");
//element[2].style.backgroundColor = 'yellow'
element.forEach(elements => {
  elements.style.backgroundColor = "yellow"
})

const ulElements = document.querySelectorAll("ul");
  ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
});

const ulItems = document.querySelectorAll("ul");
ulItems.forEach(ulItem => {
  const lastChild = ulItem.lastElementChild;
  lastChild.style.backgroundColor = "yellow";
})

const elements = document.getElementById("firstFruits");
const nextSibling = elements.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

const elementsTwo = document.getElementById("firstFruits");
const previousSibling = elements.previousElementSibling;
previousSibling.style.backgroundColor = "lightgreen";

const item = document.getElementById("desserts");
const children = desserts.children;
Array.from(children).forEach(child => {
  child.style.backgroundColor = "blue";
})

// Set page title and background
document.title = 'website';
document.body.style.backgroundColor = 'aqua';
console.log(document);
console.dir(document);

// Personalize welcome message
let userName = 'Abdul Mujeeb';
let message = document.getElementById('myH1');
message.textContent += " " + (userName === "" ? 'guest' : userName);
console.log(message.textContent);

// Style the <h1> element
const display = document.getElementById('myH1');
myH1.style.backgroundColor = 'yellow';
myH1.style.textAlign = 'center';
myH1.style.border = '1px solid';
myH1.style.width = '100%';
myH1.style.height = '100%';
myH1.style.padding = '30px';

// Style all elements with class "fruits"
const fruits = document.getElementsByClassName('fruits');
Array.from(fruits).forEach(fruit => {
  fruit.style.color = 'blue';
  fruit.style.backgroundColor = 'grey';
});

// Style all elements with class "fruits" using querySelectorAll
const element = document.querySelectorAll(".fruits");
element.forEach(elements => {
  elements.style.backgroundColor = "yellow";
});

// Style all <h4> elements
const h4Elements = document.getElementsByTagName("h4");
Array.from(h4Elements).forEach(h4Element => {
  h4Element.style.fontSize = "30px";
  h4Element.style.backgroundColor = "yellow";
});

// Style all <li> elements
const liElements = document.getElementsByTagName("li");
Array.from(liElements).forEach(liElement => {
  liElement.style.backgroundColor = "lightgreen";
  liElement.style.listStyle = "none";
});

// Style first child of each <ul>
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});

// Style last child of each <ul>
const ulItems = document.querySelectorAll("ul");
ulItems.forEach(ulItem => {
  const lastChild = ulItem.lastElementChild;
  lastChild.style.backgroundColor = "yellow";
});

// Style next sibling of #firstFruits
const elements = document.getElementById("firstFruits");
const nextSibling = elements.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// Style previous sibling of #firstFruits
const elementsTwo = document.getElementById("firstFruits");
const previousSibling = elements.previousElementSibling;
previousSibling.style.backgroundColor = "lightgreen";

// Style children of #desserts
const item = document.getElementById("desserts");
const children = desserts.children;
Array.from(children).forEach(child => {
  child.style.backgroundColor = "blue";
});

const newH1 = document.createElement("h1");
newH1.textContent = "I love food";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// document.body.append(newH1);
// document.getElementById("box1").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

// document.getElementById("box1").removeChild(newH1)*/

const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.style.backgroundColor = "lightgreen"
 
const fruits = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, fruits[4])