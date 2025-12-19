//console.log(`Hello`);
//window.alert(`This is an alert Box!

//document.getElementById("myH1").textContent = `hello World`;
//document.getElementById("myP").textContent = `Ramadan Kareeem`;

//let x = 123;

//console.log(x);

//let online = true;
//console.log(typeof online);
//console.log(`bro code is online ${online} right now`);

//let fullName = "Mujeeb Raji";
//let age = 25;
//let isStudent = true;

//document.getElementById("myP1").textContent = `your name is ${fullName}`;
//document.getElementById("myP2").textContent = `you are ${age} years old`;
//document.getElementById("myP3").textContent = `you still in school: ${isStudent}`;

//let students = 30;

//students = students / 2;

//console.log(students);

//let username;
//username = window.prompt("Type in your username");
//console.log(username);

//let Username;

//document.getElementById("MySubmit").onclick = function () {
//   username = document.getElementById("Mytext").Value;
// document.getElementById("myh1").textContent = `hello Abdul Mujeeb`
//}

//let age = 25;
//age = window.prompt("how old are you");
//age = Number(age);
//age += 1;
//console.log(age, typeof age);

//const decreasebtn = document.getElementById("decreasebtn");
//const increasebtn = document.getElementById("increasebtn");
//const resetbtnbtn = document.getElementById("resetbtn");
//const countlabel = document.getElementById("countlabel")
//let count = 0;

//increasebtn.onclick = function () {
//  count++;
//countlabel.textContent = count;
//}

//decreasebtn.onclick = function () {
//count--;
//  countlabel.textContent = count;
//}

//resetbtn.onclick = function () {
//   count = 0;
// countlabel.textContent = count;
//}
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function () {
    count++;
    countlabel.textContent = count;
}

decreasebtn.onclick = function () {
    count--;
    countlabel.textContent = count;
}

resetbtn.onclick = function () {
    count = 0;
    countlabel.textContent = count;
}