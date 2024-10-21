let display = document.getElementById("inputBox");// to access display
let buttons = document.querySelectorAll("button");// to acces all buttons

let buttonsArray = Array.from(buttons); // convert nodeList to array

let string =""; //global variable to display result 

//access each variable from array
buttonsArray.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{                  // add event listener
        if(event.target.innerText ==="DEL"){                 // to delete last digit
            string = string.substring(0, string.length-1);   
            display.value = string; 
        }
        else if(event.target.innerText === "AC"){            // to clear display completely
            string = "";
            display.value = string;
        }
        else if(event.target.innerText === "%"){             // to take the percent by /100
            string = string/100;
            display.value = string;
        }
        else if(event.target.innerText === "="){             // calculate value by eval method
            try{
                string = eval(string);
                display.value = string;
            }                                               // try and catch function for error handling
            catch(error){
                display.value = "Error";
            }    
        }
        else{
            string  += event.target.innerText;       //event.target to know which button is clicked .innertext to access value     
            display.value = string;
        }
    });
});