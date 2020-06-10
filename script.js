let allbuttons = document.querySelectorAll(".btn");
let operands = document.querySelectorAll(".btn-op");
let equal = document.getElementById("equal");
let html_input = document.getElementById("input");
let changeColor = document.querySelectorAll(".changeColor");
let string = ""; let input = ""; let i = 0; let see = 0;
let app = [];

equal.addEventListener("click", answer);

changeColor.forEach( 
    item=>{
        item.addEventListener('click', colorChange)    
})

allbuttons.forEach(item=> 
    { item.addEventListener('click',
     () => 
     {isOperand(item.innerHTML, html_input, app) ;
    })   
})

function colorChange(){
   this.style.background = "blue";
}     
  
function answer(){
    numToString = parseInt(string)
    app.push(numToString);
    string = "";
    for(i=0; i<app.length; i++){
        
        // if (i== 0){
        //    see += 1; 
        // }

        
        
        see += app[i]; 
        if(i == (app.length - 1)){
            console.log(see);
            html_input.value = see;
            html_input.style.color = "blue";
            see = 0;
            app = [];
        }
    }
  
}


// function for addition , takes two input and gives the value 
function add (array, input_val){
    let sum = 0;
    console.log("add", array, app.length);
    // whenever there is two input ,sum the array and give output
        for (i=0; i<array.length; i++){
            sum += array[i] ;    
        } 
        input_val.value = sum;
        sum =0;
}

function substraction (array, input_val){
    let diff = 0;
        for(i=0;  i<array.length; i++){
            if(i==0){
                diff += array[0]
            }
            else{
                diff -= array[i]
                input_val.value = diff;
            }
        }
}

function multiplication (array, input_val){
    let times = 1;
    for(i=0; i<array.length; i++){
        times *= array[i];
        input_val.value = times;
    }
}

function division (array, input_val){
   let divide = 1;
   for(i=0; i<array.length; i++){
     if(i==0){
          divide =  array[i] / divide; console.log(divide, "divide");
     }
     else{
         divide /= array[i];
     }
    
     input_val.value = divide;
   }

}

function isOperand(input, input_val, array){
  if  (isNaN(input)){
    numToString = parseInt(string)
    array.push(numToString);
    switch (input){
        case "+": add(array, input_val); break; 
        case "-": substraction(array, input_val); break;
        case "x": multiplication(array, input_val);  break;
        case "/": division(array, input_val); break;
        default : " invalid operation"; 

    }
    string = "";
    input = input_val.value;
    input_val.style.color = "green";
    console.log("im operand", array); 
    }
    else{ 
      input_val.value = input;
      string += input;
      input_val.value = string;
      input_val.style.color = "rgb(120, 255, 187)";
      console.log("im a number", string); 
      for(i=0; i< allbuttons.length; i++){
        allbuttons[i].style.background = "pink";
    }
      return string;
  }
}