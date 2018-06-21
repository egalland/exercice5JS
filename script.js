// DECLARATION FONCTION CALCUL
function calcul(){
  // DECLARATION ET RECUPERATION DES VARIABLES
var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
// VERIFICATION DES NOMBRES A VIRGULES
  if((firstNumber % 1 !=0 ) && (secondNumber % 1 != 0)){
    firstNumber = Math.floor(firstNumber);
    secondNumber = Math.floor(secondNumber);
    // MULTIPLICATION
    var result = firstNumber * secondNumber;
    // OUVERTURE D'UNE BOITE DE DIALOGUE AVEC LE RESULTAT
    alert(result);
  }else{
    // ECHEC
    alert('Ce n\'est pas des nombres à virgules');
  }
}
