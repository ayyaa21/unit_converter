var input = document.getElementById('input');
var result = document.getElementById('result'); 
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;


input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 100; 
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 0.001;
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
        
        result.value = input.value ; x    
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="inch"){
        
        result.value = Number(input.value) * 39.37; 
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="feet"){
        
        result.value = Number(input.value) * 3.2808; 
    }




    else if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){
        
        result.value = Number(input.value) * 0.01; 
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 0.00001; 
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){
        
        result.value = Number(input.value); 
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="inch"){
         
        result.value  = Number(input.value)/2.54;
        
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="feet"){
       
        result.value = Number(input.value) * 0.0328;
         
    }



    else if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
        
        result.value = Number(input.value) * 1000;
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value); 
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){
        
        result.value = Number(input.value) * 100000; 
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="inch"){
       
        result.value = Number(input.value)*39370.1; 
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="feet"){
        
        result.value = Number(input.value) * 3280.84; 
    }




    else if(inputTypeValue === "inch" && resultTypeValue==="meter"){
       
        result.value = Number(input.value) * 0.0254; 
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value)/393.70; 
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 2.54; 
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="inch"){
        
        result.value = Number(input.value); 
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="feet"){
         
        result.value = Number(input.value)/12;
    }



    else if(inputTypeValue === "feet" && resultTypeValue==="meter"){
       
        result.value = Number(input.value) * 0.304; // set answer to the result box
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 3280.839; // set answer to the result box
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 30.48; // set answer to the result box
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="inch"){
        
        result.value = Number(input.value) * 12; // set answer to the result box
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="feet"){
         
        result.value = Number(input.value); // set answer to the result box
    }

    


    
}
