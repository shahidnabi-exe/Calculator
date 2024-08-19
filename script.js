
let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML === '='){
    
      string = eval(string); // Evaluates the string as a mathematical expression
      input.value = string;
    }else if(e.target.innerHTML === 'AC') {
      string = ''; // Clears the input
      input.value = string;
    } else if(e.target.innerHTML === 'DEL'){
      string = string.slice(0, -1); // Deletes the last character
      input.value = string;
    } else {
      string += e.target.innerHTML; // Appends the clicked button's text to the string
            input.value = string; // Updates the input field with the new string
    }
    
  });
});