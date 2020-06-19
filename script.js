// let insert = document.createElement('h2');
// insert.style.cssFloat = 'right';
// insert.style.background = 'blue';
// insert.style.color = 'white';
// let supply = '';
// for(i=0; i<arr.length; i++){ 
//      supply += arr[i]
//      let ins_text = document.createTextNode(supply);
//      insert.appendChild(ins_text);
//      section.appendChild(insert);
//     }



let clear = document.getElementById('clear');
let allbuttons = document.querySelectorAll(".btn");
let operands = document.querySelectorAll(".btn-op");
let equal = document.getElementById("equal");
let html_input = document.getElementById("input");
let changeColor = document.querySelectorAll(".changeColor");
let operand = document.querySelectorAll(".operand");
let section = document.getElementById('section__btn');
let string = ""; 
let app = [];
let opps = [];

let display = document.getElementById('show');
display.innerHTML = html_input.value;

// let clean = function clean(html_input) {
//      let inner = html_input;
//      return () => inner = '';
// }
// let fclear = clean(html_input);

// clear.addEventListener('click', fclear);

let answer = function (array, input_val, array2){
   let arr = array;
   let arr2 = array2;
   let input_value = input_val;
  
   return () => {  
    array.push(parseFloat(input_value.value) )
    operation(arr, input_value, arr2);
   
    for(i=0; i=arr.length; i++){
        console.log(arr);
        arr.pop();
    } 
    
} 
};

let ans = answer(app, html_input, opps);

equal.addEventListener("click", ans);


changeColor.forEach( 
    item=>{
        item.addEventListener('click', colorChange)    
})

allbuttons.forEach(item=> 
    { item.addEventListener('click',
     () => 
     {isOperand(item.innerHTML, html_input, app, opps) ;
    })  
})

function colorChange(){
   this.style.background = "blue";
} 


function operation (array, input_val, array2){
    // console.log(array2[0], array, input_val)
    switch (array2[0]){
        case "+": add(array, input_val) ; array2.pop(); break; 
        case "-": substraction(array, input_val); array2.pop(); break;
        case "x": multiplication(array, input_val); array2.pop();  break;
        case "/": division(array, input_val);  array2.pop(); break;
        // case "C": clean(array, input_val);  array2.pop(); break;
        default : " invalid operation"; 
    }
}


// function for addition , takes two input and gives the value 
function add (array, input_val){
    let sum = 0;
        for (i=0; i<array.length; i++){
            sum += array[i] ;    
        } 
        input_val.value = sum;
        string = "";
        input_val.style.color = 'blue';
}

function substraction (array, input_val)
{
    let diff = 0;
    for(i=0;  i<array.length; i++){
        if(i==0){
                diff += array[0]
        }
        else{
         diff -= array[i]
         input_val.value = diff;
         string = "";
         input_val.style.color = 'blue';
        }
    }
}

function multiplication (array, input_val){
    let times = 1;
    for(i=0; i<array.length; i++){
        times *= array[i];
        input_val.value = times;
        string = "";
        input_val.style.color = 'blue';
    }
}

function division (array, input_val){
   let divide = 1;
   for(i=0; i<array.length; i++){
     if(i==0){
          divide =  array[i] / divide; 
     }
     else{
         divide /= array[i];
         string = "";
          input_val.style.color = 'blue';
     }
    
     input_val.value = divide;
   }

}

function isOperand(input, input_val, array, array2)
{
    if (isNaN(input)){
        array2.push(input);
        if(isNaN(string)){
                string = "";
        }
        else
        {
              string = "";
                parseInt(string);
        }
        input = input_val.value;
        //   console.log(input_val.value);
        array.push(parseFloat(input_val.value));
        input_val.style.color = "green";
    }
    else
    { 
        input_val.value = input;
        string += input;
        input_val.value = string;
        input_val.style.color = "rgb(120, 255, 187)";
        let numToString = parseInt(string)    
        for(i=0; i< allbuttons.length; i++)
        {
            allbuttons[i].style.background = "pink";
        }
    }
}


