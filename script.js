const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

const operators = ["+", "-", "*", "/", "%"]

 buttons.forEach( button => {
    button.addEventListener ("click", () => {
        const value = button.textContent.trim();

        if(value === "AC"){
            display.value = "";
        }
        else if(value === "C"){
            display.value = display.value.slice(0,-1);
        }
        else if(value === "="){
            if (display.value === "Error") {
            return;
            }
            if(display.value !==""){
            try{
                display.value = eval(display.value);
            }
            catch{
                display.value="Error";
            } 
        } 
        }
        else{
            if(display.value==="Error"){
                display.value="";
            }

        const lastchar = display.value.slice(-1);

        if(operators.includes(value) && operators.includes(lastchar)){
            alert("cannot enter two operators together");
        }
        else{
            display.value += value;
        }
    }
    });
 });
