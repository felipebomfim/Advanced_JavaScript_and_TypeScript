let fullName = prompt("What is your full name?");

let lowerCaseName = fullName.toLowerCase();

let listChars = lowerCaseName.split("").filter(el => (el !== " "));

let listWords = fullName.split(" ");

let numLetters = listChars.length

let bodyText = "";
let br = "<br/>"
bodyText += `Your name is "${fullName}".` + br;
bodyText += `Your name has ${numLetters} letters.` + br;
bodyText += `The second letter in your name is '${fullName[1]}'.` + br;
bodyText += `The first index of the letter 'F' in your name is ${lowerCaseName.indexOf('f')}.` + br;
bodyText += `The last index of the letter 'F' in your name is ${lowerCaseName.lastIndexOf('f')}.` + br;
bodyText += `The last three letters of your name are "${fullName.slice(-3)}"` + br;
bodyText += `The words in your name are ${listWords}` + br;
bodyText += `Your name in upper case is "${fullName.toUpperCase()}"` + br;
bodyText += `Your name in lower case is "${fullName.toLowerCase()}"` + br;

document.querySelector("body").innerHTML += bodyText;