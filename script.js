let expressionDisplay = document.getElementById('expression');
let resultDisplay = document.getElementById('result');
let buttons = document.querySelectorAll('button');

let expression = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                // Automatically add a closing parenthesis if needed
                if (expression.includes('Math.sin') || expression.includes('Math.cos') || expression.includes('Math.tan')) {
                    expression += ')';
                }
                let result = eval(expression);
                resultDisplay.value = result;
                expression = result.toString(); // Allows further operations on the result
            } catch (error) {
                resultDisplay.value = "Error";
                expression = "";
            }
        } else if (value === 'AC') {
            expression = '';
            expressionDisplay.innerHTML = '';
            resultDisplay.value = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            expressionDisplay.innerHTML = expression;
        } else if (value === '√') {
            expression += '**0.5';
            expressionDisplay.innerHTML += '√';
        } else if (value === '^') {
            expression += '**';
            expressionDisplay.innerHTML += '^';
        } else if (value === 'sin') {
            expression += 'Math.sin(';
            expressionDisplay.innerHTML += 'sin(';
        } else if (value === 'cos') {
            expression += 'Math.cos(';
            expressionDisplay.innerHTML += 'cos(';
        } else if (value === 'tan') {
            expression += 'Math.tan(';
            expressionDisplay.innerHTML += 'tan(';
        } else {
            expression += value;
            expressionDisplay.innerHTML += value;
        }
    });
});
