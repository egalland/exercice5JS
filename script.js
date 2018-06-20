function calcul(){

var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;

firstNumber = Math.floor(firstNumber);
secondNumber = Math.floor(secondNumber);

var result = firstNumber * secondNumber;
alert(result);
}
