const typedNumber = Number(prompt("Type a number: "));

document.querySelector("#typed-number").textContent = typedNumber;

let square_root = Math.sqrt(typedNumber);

document.querySelector('#square-root-message').textContent = "The square root of your number is: " + square_root;