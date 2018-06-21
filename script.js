// DECLARATION FONCTION CALCUL
function calcul(){
  // DECLARATION ET RECUPERATION DES VARIABLES
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  // VERIFICATION DES NOMBRES A VIRGULES
  var regex = /^[0-9.]+$/;
  if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true)){
    if(((firstNumber % 1) == 0 ) || ((secondNumber % 1) == 0)){
      // ECHEC
      alert('Ce n\'est pas des nombres à virgules');
    }else{
      // MULTIPLICATION
      firstNumber = Math.floor(firstNumber);
      secondNumber = Math.floor(secondNumber);
      var result = firstNumber * secondNumber;
      // OUVERTURE D'UNE BOITE DE DIALOGUE AVEC LE RESULTAT
      alert(result);
    }
  }else{
    alert('Ce n\'est pas un nombre');
  }
}
