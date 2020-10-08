
function entregarValores()
{
  getUserInput();
  var resultadoAritmetica = 0;
  var simboloAritmetica = "+";
  if(userAritmetica == "suma")
  {
    resultadoAritmetica = variable1 + variable2;
    simboloAritmetica = "+";
  }
  if(userAritmetica == "resta")
  {
    resultadoAritmetica = variable1 - variable2;
    simboloAritmetica = "-";
  }
  if(userAritmetica == "multiplicacion")
  {
    resultadoAritmetica = variable1 * variable2;
    simboloAritmetica = "×";
  }
  if(userAritmetica == "division")
  {
    resultadoAritmetica = variable1 / variable2;
    simboloAritmetica = "÷";
  }
  console.log(resultadoAritmetica);

  resultado2.innerHTML = ("El resultado de la operacion seleccionada es: <br>");
    resultado2.insertAdjacentHTML("beforeend", + variable1 + " " + simboloAritmetica + " " + variable2+ " = " + resultadoAritmetica);
}
function getUserInput()
{
  var userVariable1 = document.getElementById("usuario_number1");
  var userVariable2 = document.getElementById("usuario_number2");
  variable1 = parseInt(userVariable1.value);
  variable2 = parseInt(userVariable2.value);
  userAritmetica = document.getElementById("userOperacion").value;
}
var variable1 = 0;
var variable2 = 0;
var userAritmetica = "suma";
var resultado2 = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", entregarValores);
