/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

 let number1 ;
 let number2 ;
 let result;
 let operations;
 let history = [];
 

function buttonClick(text) {
  
  
  // Write your code here
if (text =="+" || text =="-" || text == "÷" || text == "x"){
  operations = text;
}
else if (text ==="AC"){
  printOnConsole(0);
  number1 = 0;
  number2 = 0;
}
else if (!isNaN(text)){
printOnConsole(text);
  if (!number1) number1 = parseInt(text);
  else if (operations) number2 = parseInt(text);
}

else if (text == "="){

result = (calculate(operations,number1,number2));
printOnConsole(result);
history.push(`${number1} ${operations} ${number2 } = ${result}`);
console.log(history);
updateHistory(history);

}




}



function calculate(operations, number1,number2){
switch(operations){

  case "+":
    return number1 + number2;
    case "-":
    return number1 - number2;
    case "x":
    return number1 * number2;
    case "÷":
    return number1 / number2;
}


}


/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
//printOnConsole();

