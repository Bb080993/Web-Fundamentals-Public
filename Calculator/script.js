console.log("hello")

var total=document.querySelector("#display")
//var total=parseInt(total)
//console.log(typeof(total))
//console.log(total)
let num1=""
let num2=""
let op=""



function press(num){
    num1+=num 
    total.innerText=num1
}

function clr(){
    //var clear = document.querySelector("#display")
     //clear.innerText=0
     total.innerText=0
     num1 = "";
     num2 = "";
     op = "";
   
}
  
function setOP(operator){
    op=operator
    console.log(op)
    num2 = num1;
    num1 = "";
    }
function calculate(){
    let result=0
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    //console.log(typeof(num1))
    if(op=='/'){result= num2/num1}
    else if( op== '*'){result= num2*num1}
    else if(op=='-'){result= num2-num1}
    else if(op=='+'){result= num2+num1} 
    total.innerText=result
}