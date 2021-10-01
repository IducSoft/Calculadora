
export const ProcedureMath=(id)=>{

    // let numberID= new RegExp("[0-9]")
    let numberID= /[0-9]/

    

    if(numberID.test(id)){

        
        InsertNumber(id)
    }

    if(id=="."){

        
        let ArrayDigits = document.getElementById("numbers-insert");
        if(ArrayDigits.textContent.length >= 14){
            return
        }else if(ArrayDigits.textContent.includes(".")){
            return
        }else{
            InsertNumber(".")
        }
    }

    if(id=="DEL"){

        DeleteNumber()
    }

    if(id=="RESET"){

        reset()
    }

    if(id=="neg"){
        
        if(document.getElementById("numbers-insert").textContent.includes("-")){

            return
        }else{

            NegativeNumber();
        }

    }

    if(id=="EQUAL"){

        EQUALLY()
    }


    // Procedimientos matematicos en cuestion



    if(id=="-"){

        ProcediminetoMatematico(id);
    }


    if(id=="+"){

        ProcediminetoMatematico(id);
    }


    if(id=="X"){

        ProcediminetoMatematico(id);
    }

    if(id=="/"){

        ProcediminetoMatematico(id);
    }
}



const ProcediminetoMatematico=(id)=>{

    let valueOne = parseFloat(document.getElementById("numbers-insert").textContent);
    window.localStorage.setItem("procedureValue", valueOne);

    document.getElementById("numbers-insert").textContent=null;
    
    
    

   let result=null;


    if(id=="+"){

        window.localStorage.setItem("result", "+");
    }


    if(id=="-"){

        window.localStorage.setItem("result", "-");
    }

    if(id=="X"){

        window.localStorage.setItem("result", "X");
    }

    if(id=="/"){

        window.localStorage.setItem("result", "/");
    }
}


const EQUALLY=()=>{

    let Display= parseFloat(document.getElementById("numbers-insert").textContent);
    let resultToMount=null;
    let cat=null;
    document.getElementById("numbers-insert").textContent=null;

    if(window.localStorage.getItem("procedureValue")){

        resultToMount=parseFloat(window.localStorage.getItem("procedureValue"));
    }else{

        return
    }

    if(window.localStorage.getItem("result")){

        if(window.localStorage.getItem("result")=="+"){

            cat= resultToMount + Display;
            document.getElementById("numbers-insert").textContent = cat
        }
    }

    if(window.localStorage.getItem("result")){

        if(window.localStorage.getItem("result")=="-"){

            cat= resultToMount - Display;
            document.getElementById("numbers-insert").textContent = cat
        }
    }

    if(window.localStorage.getItem("result")){

        if(window.localStorage.getItem("result")=="X"){

            cat= resultToMount * Display;
            document.getElementById("numbers-insert").textContent = cat
        }
    }

    if(window.localStorage.getItem("result")){

        if(window.localStorage.getItem("result")=="/"){

            cat= resultToMount / Display;
            document.getElementById("numbers-insert").textContent = cat
        }
    }

    

}




const NegativeNumber=()=>{

    let numbersNeg= document.getElementById("numbers-insert").textContent;

        if(numbersNeg.length == 0){

            document.getElementById("numbers-insert").textContent += "-"
        }else{

            return
        }
}




const reset=()=>{

    let numbers= document.getElementById("numbers-insert").textContent = null;
    window.localStorage.removeItem("procedureValue");
}



const DeleteNumber=()=>{

    let numberToInsert=document.getElementById("numbers-insert").textContent;
    let ArrayDigits = numberToInsert;

    let newArrayToInsert = ArrayDigits.substring(0, ArrayDigits.length - 1);

    document.getElementById("numbers-insert").textContent = newArrayToInsert;
}


const InsertNumber=(number)=>{

    let numberToInsert = document.getElementById("numbers-insert");
    let ArrayDigits = document.getElementById("numbers-insert");

    if(ArrayDigits.textContent.length >= 14){

        console.log("limite de digitos permitidos");
        return
    }

    numberToInsert.textContent += number;

}