// const myHeading = document.querySelector('h1');
let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';
let myButton = document.querySelector('button');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Dev is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
