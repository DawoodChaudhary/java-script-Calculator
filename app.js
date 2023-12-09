const display =document.getElementById("display");


function appendToDisplay(input){
display.value += input;
}


function clearDisplay(){
display.value =""
}


function dle(){
display.value=display.value.slice(0,-1);
}


function calculatePercentage() {
try {
const percentageValue = parseFloat(display.value) / 100;
display.value = percentageValue;
} catch (error) {
display.value = "Error";
}
}


function calculate(){
try{
   display.value=eval(display.value); 
}
catch(Error){
    display.value="Error"
}
}