let equation = "";

function eqDisplay(){
    let box = document.getElementById('calculator-box');
    box.innerHTML = equation;
}
function reset(){
    equation = "";
    eqDisplay();
}
function lastchar(){
    equation = equation.slice(0,-1);
    eqDisplay();
}
function zero(){
    equation += 0;
    eqDisplay();
}
function one(){
    equation += 1;
    eqDisplay();
}
function two(){
    equation += 2;
    eqDisplay();
}
function three(){
    equation += 3;
    eqDisplay();
}
function four(){
    equation += 4;
    eqDisplay();
}
function five(){
    equation += 5;
    eqDisplay();
}
function six(){
    equation += 6;
    eqDisplay();
}
function seven(){
    equation += 7;
    eqDisplay();
}
function eight(){
    equation += 8;
    eqDisplay();
}
function nine(){
    equation += 9;
    eqDisplay();
}
function plus(){
    equation += '+';
    eqDisplay();
}
function minus(){
    equation += '-';
    eqDisplay();
}
function multiply(){
    equation += '*';
    eqDisplay();
}
function divide(){
    equation += '/';
    eqDisplay();
}
function calculate(){
    equation = eval(equation);
    eqDisplay();
    equation = "";
}