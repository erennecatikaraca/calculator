

const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multi = document.querySelector(".multi");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const Delete = document.querySelector(".delete");
var leftSide="";
var rightSide="";
var operator;
var benchmark = true;



// addEvent
btn.forEach(item=>{
    item.addEventListener("click", e=>{
        Element=e.target
    if(benchmark==false){
           screen.value="0"
           benchmark=true
        }
    if(screen.value == "0"){
            screen.value=""    
        }

        screen.value += Element.innerHTML

     if( screen.value.includes("+") || screen.value.includes("-") || screen.value.includes("x") || screen.value.includes("/")){
            rightSide += Element.innerHTML
        }

     if(screen.value.length>10){
            screen.style.fontSize="40px";
        }
    else{
            screen.style.fontSize="60px";
        }
    
    })
})
// addEvent


//function plus
function addition(){
    operator = plus.innerHTML
    if(!screen.value.includes("-") && !screen.value.includes("x") && !screen.value.includes("/") && !screen.value.includes("+") ){
        
        leftSide = screen.value
        screen.value += "+"
    }
    if(benchmark==false){
        screen.value="0"
        benchmark=true
     }
}
//function plus

//function minus
function subtraction(){
    operator = minus.innerHTML
    if(!screen.value.includes("-") && !screen.value.includes("x") && !screen.value.includes("/") && !screen.value.includes("+") ){

        leftSide = screen.value
        screen.value += "-"
    }
    if(benchmark==false){
        screen.value="0"
        benchmark=true
     }
  
}
//function minus

//function multi
function multiplication(){

    operator = multi.innerHTML
    if(!screen.value.includes("-") && !screen.value.includes("x") && !screen.value.includes("/") && !screen.value.includes("+") ){

        leftSide = screen.value
        screen.value += "x"
    }
    if(benchmark==false){
        screen.value="0"
        benchmark=true
     }
    
}
//function multi

//function divide
function divition(){
    operator = divide.innerHTML
    if(!screen.value.includes("-") && !screen.value.includes("x") && !screen.value.includes("/") && !screen.value.includes("+") ){

        leftSide = screen.value
        screen.value += "/"
    }
    if(benchmark==false){
        screen.value="0"
        benchmark=true
     }
  
}
//function divide

//function delete
function DLT(){
    if(screen.value!="0"){
    let current = screen.value.substring(0,screen.value.length-1)
    screen.value = current;

    let slice = rightSide.slice(0,-1)
    rightSide = slice

    if(benchmark==false){
        screen.value="0"
        benchmark=true
     }
}
    if(screen.value.length>10){
    screen.style.fontSize="40px";
     }
    else{
    screen.style.fontSize="60px";
     }
}
//function delete 

//function equal
function result(){
    screen.value = "0"
    if(operator=="+"){
        let result = Number(leftSide) + Number(rightSide)
        screen.value = result
        leftSide = ""
        rightSide = ""
        benchmark=false
    }
    if(operator=="-"){
        let result = Number(leftSide) - Number(rightSide)
        screen.value = result
        leftSide = ""
        rightSide = ""
        benchmark=false
    }
    if(operator=="x"){
        let result = Number(leftSide) * Number(rightSide)
        screen.value = result
        leftSide = ""
        rightSide = ""
        benchmark=false
    }
    if(operator=="/"){
        let result = Number(leftSide) / Number(rightSide)
        screen.value = result
        leftSide = ""
        rightSide = ""
        benchmark=false
    }

}
//function equal


function reset(){
    rightSide=""
    leftSide=""
    operator=""
    screen.value="0"
}

// finish: duration(total code typed) = 4 hours 2 minutes
