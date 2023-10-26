let display = document.getElementById('display');
let equation = '';

function appendToDisplay(value) {
    equation += value;
    display.value += value;
}

function clearDisplay() {
    equation = '';
    display.value = '';
}

function calculate() {
    try {
        equation = equation.replace('^', '**');
        equation = eval(equation);
        display.value = equation;
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    equation = equation.slice(0, -1);
    display.value = display.value.slice(0, -1);
}

function calculateModulus() {
    try {
        equation = equation.replace('%', '%'); // Menyimpan karakter '%' untuk operasi modulus
        equation = eval(equation);
        display.value = equation;
    } catch (error) {
        display.value = 'Error';
    }
}


