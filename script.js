function calcul(){
var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
  if((firstNumber % 1 !=0 ) && (secondNumber % 1 != 0)){
    firstNumber = Math.floor(firstNumber);
    secondNumber = Math.floor(secondNumber);
    var result = firstNumber * secondNumber;
    alert(result);
  }else{
    alert('Ce n\'est pas des nombres à virgules');
  }
}
