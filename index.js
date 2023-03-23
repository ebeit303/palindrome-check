// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



function isPalindrome(value){

  return value == value.split('').reverse().join('');
}

console.log( isPalindrome('madam'));