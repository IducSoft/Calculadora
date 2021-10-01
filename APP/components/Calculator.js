

export const Calculator=()=>{

    const calculator = document.createElement("section");
    calculator.classList.add("calculator")


    calculator.innerHTML=`
    
        <div class="calculator-container">
        <h1 class="text-center text-white mb-3">Calculator</h1>
        <div class="displayCount">
            <p id="numbers-insert" class="numbers-insert display-5"></p>
        </div>
        <div class="tablero">
            <div class="teclas">
                <div class="tecla" id="7">
                    7
                </div>

                <div class="tecla" id="8">
                    8
                </div>

                <div class="tecla" id="9">
                    9
                </div>

                <div class="tecla" id="DEL">
                    DEL
                </div>

                <div class="tecla" id="4">
                    4
                </div>

                <div class="tecla" id="5">
                    5
                </div>

                <div class="tecla" id="6">
                    6
                </div>

                <div class="tecla" id="+">
                    +
                </div>

                <div class="tecla" id="1">
                    1
                </div>

                <div class="tecla" id="2"> 
                    2
                </div>

                <div class="tecla" id="3">
                    3
                </div>

                <div class="tecla" id="-" >
                    -
                </div>

                <div class="tecla" id=".">
                    .
                </div>

                <div class="tecla" id="0">
                    0
                </div>

                <div class="tecla" id="/">
                    /
                </div>

                <div class="tecla" id="X">
                    X
                </div>

                <div class="tecla" id="RESET">
                    RESET
                </div>

                <div class="tecla" id="neg">
                    -1
                </div>

                <div class="tecla" id="EQUAL">
                    =
                </div>
            </div>
        </div>
    </div>
    `;

    return calculator;
}