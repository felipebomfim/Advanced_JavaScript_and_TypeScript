const prompt = require('prompt-sync')();
const thisYear = new Date().getFullYear();

const surname = "Turing";


const firstName = prompt("What is you first name? ");
const age = parseInt(prompt("What is your age? "));
const weight = parseFloat(prompt("What is your weight? "));
const height = parseFloat(prompt("What is your height? "));




let imc = weight / height ** 2;
let birthYear = thisYear - age;

console.log(`Your name is: ${firstName + " " + surname}`);
console.log(`You were born at ${birthYear}`);
console.log(`Your IMC is ${imc.toFixed(2)}`)