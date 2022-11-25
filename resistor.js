
const codeColor = {
    Black: { zarib: 1, code: 0 },
    Brown: { zarib: 10, code: 1, telorans: 0.01 },
    Red: { zarib: 100, code: 2, telorans: 0.02 },
    Orange: { zarib: 1000, code: 3 },
    Yellow: { zarib: 10000, code: 4 },
    Green: { zarib: 100000, code: 5 },
    Blue: { zarib: 1000000, code: 6 },
    Purple: { code: 7 },
    Gray: { code: 8 },
    White: { code: 9 },
    Gold: { zarib: 0.1, telorans: 0.05 },
    Silver: { zarib: 0.01, telorans: 0.1 },
}

const $ = document;

let mode = $.querySelectorAll(".form-check-input");
let coloredBands = $.querySelectorAll(".color");
let colorsList = $.querySelectorAll("li");
let nameColors = $.querySelectorAll(".nameColor");
let inputResistor = $.getElementById("inputResistor");
let telorans = $.getElementById("telorans");
let sw = false;
let maxLength = 8;

let modeInputValue 
let inputResistorValue = "";
let buttoncolor = $.querySelectorAll(".button");

calculatiOfResistance()
mode[0].addEventListener("click", () => {

    modeInputValue = false;
    $.getElementById("resistor").innerHTML = `<div id="A" class="dropdown color"> <div class=" button" data-bs-toggle="dropdown"> <p class="nameColor">Black</p> </div> <ul class="dropdown-menu p-0"> <li class="dropdown-item">Black</li> <li class="dropdown-item">Brown</li> <li class="dropdown-item">Red</li> <li class="dropdown-item">Orange</li> <li class="dropdown-item">Yellow</li> <li class="dropdown-item">Green</li> <li class="dropdown-item">Blue</li> <li class="dropdown-item">Purple</li> <li class="dropdown-item">Gray</li> <li class="dropdown-item">White</li> </ul> </div> <div id="B" class="dropdown color"> <div class=" button" data-bs-toggle="dropdown"> <p class="nameColor">Black</p> </div> <ul class="dropdown-menu p-0"> <li class="dropdown-item">Black</li> <li class="dropdown-item">Brown</li> <li class="dropdown-item">Red</li> <li class="dropdown-item">Orange</li> <li class="dropdown-item">Yellow</li> <li class="dropdown-item">Green</li> <li class="dropdown-item">Blue</li> <li class="dropdown-item">Purple</li> <li class="dropdown-item">Gray</li> <li class="dropdown-item">White</li> </ul> </div> <div id="C" class="dropdown color"> <div class=" button" data-bs-toggle="dropdown"> <p class="nameColor">Black</p> </div> <ul class="dropdown-menu p-0"> <li class="dropdown-item">Black</li> <li class="dropdown-item">Brown</li> <li class="dropdown-item">Red</li> <li class="dropdown-item">Orange</li> <li class="dropdown-item">Yellow</li> <li class="dropdown-item">Green</li> <li class="dropdown-item">Blue</li> <li class="dropdown-item">Purple</li> <li class="dropdown-item">Gray</li> <li class="dropdown-item">White</li> </ul> </div> <div id="D" class="dropdown color"> <div class=" button" data-bs-toggle="dropdown"> <p class="nameColor">Black</p> </div> <ul class="dropdown-menu p-0"> <li class="dropdown-item">Black</li> <li class="dropdown-item">Brown</li> <li class="dropdown-item">Red</li> <li class="dropdown-item">Orange</li> <li class="dropdown-item">Yellow</li> <li class="dropdown-item">Green</li> <li class="dropdown-item">Blue</li> <li class="dropdown-item" style="background-color:gold ; color: #000;">Gold</li> <li class="dropdown-item" style="background-color:silver ;">Silver</li> </ul> </div> <div id="E" class="dropdown color"> <div class="button" data-bs-toggle="dropdown"> <p class="nameColor">Gold</p> </div> <ul class="dropdown-menu p-0"> <li class="dropdown-item" style="background-color:brown ;">Brown</li> <li class="dropdown-item" style="background-color:red;">Red</li> <li class="dropdown-item" style="background-color:gold ; color: #000;">Gold</li> <li class="dropdown-item" style="background-color:silver ;">Silver</li> </ul> </div> <img src="resistor.png" class="img-fluid w-100" alt="resistor">`;
    $.querySelector(".input-group").innerHTML = `<input readonly id="inputResistor" class="text-center border form-control border-4 border-primary mx-auto rounded-5 rounded-end overflow-auto p-2" style="font-size:3vw ;"></input><button id="telorans" class="btn btn-primary w-25" style="font-size:3vw ;" type="submit">±</button>`;
    $.querySelector(".input-group").style.zIndex = "-1";
    inputResistor = $.getElementById("inputResistor");
    nameColors = $.querySelectorAll(".nameColor");
    telorans = $.getElementById("telorans");
    colorsList = $.querySelectorAll("li");
    coloredBands = $.querySelectorAll(".color");
    colorsList.forEach(element => {
        element.addEventListener("click", event => {
            let btnColor = element.parentElement.previousElementSibling;
            btnColor.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
            btnColor.style.color = getComputedStyle(event.target).color;
            btnColor.firstElementChild.innerHTML = event.target.innerHTML;
            calculatiOfResistance()
        });
    })
    mode[2].checked = true;
    coloredBands[2].classList.remove("scale-up-ver-center");

        sw = false;
        maxLength = 8;

});
mode[1].addEventListener("click", () => {

    modeInputValue = true
    $.getElementById("resistor").innerHTML = `<div id="A" class=" color"> <div class=" button"> <p class="nameColor"></p> </div> </div> <div id="B" class=" color"> <div class=" button"> <p class="nameColor"></p> </div> </div> <div id="C" class=" color"> <div class=" button"> <p class="nameColor"></p> </div> </div> <div id="D" class=" color"> <div class=" button"> <p class="nameColor"></p> </div> </div> <div id="E" class="color"> <div class="button"> <p class="nameColor"></p> </div> </div> <img src="resistor.png" class="img-fluid w-100" alt="resistor">`;
    $.querySelector(".input-group").innerHTML = `<input id="inputResistor" type="number" placeholder="Ohm" class=" form-control text-center border form-control border-4 border-primary mx-auto rounded-5 rounded-end overflow-auto p-2" style="font-size:3vw ;"></input> <button id="telorans" class="btn border border-start-0 border-primary border-3 dropdown-toggle w-25" style="font-size:3vw ; background-color: gold;" type="button" data-bs-toggle="dropdown"> <p class=" d-inline">±5%</p> </button> <ul class="dropdown-menu p-0"> <li class="dropdown-item">±1%</li> <li class="dropdown-item">±2%</li> <li class="dropdown-item">±5%</li> <li class="dropdown-item">±10%</li> </ul>`;
    $.querySelector(".input-group").style.zIndex = "1";
    inputResistor = $.getElementById("inputResistor");
    buttoncolor = $.querySelectorAll(".button");
    coloredBands = $.querySelectorAll(".color");
    colorsList = $.querySelectorAll("li");
    inputResistor.addEventListener("keydown", (event) => {

        if (!(event.key == "Backspace" || (event.key >= 0 && inputResistor.value.length < maxLength))) {
            event.preventDefault();
            return;
        }

    });

    inputResistor.addEventListener("keyup", () => {

        setColorResistor();
    });

    colorsList.forEach(element => {
        element.addEventListener("click", event => {
            let btnColor = element.parentElement.previousElementSibling;
            btnColor.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
            btnColor.style.color = getComputedStyle(event.target).color;
            btnColor.firstElementChild.innerHTML = event.target.innerHTML;
            if (btnColor.id == "telorans") {
                buttoncolor[4].style.backgroundColor = getComputedStyle(event.target).backgroundColor;
            }
        });
    })
    mode[2].checked = true;

        sw = false;
        maxLength = 8;

});
mode[2].addEventListener("click", () => {

    if (getComputedStyle(coloredBands[2]).opacity == "1") {
        coloredBands[2].classList.remove("scale-up-ver-center");
        setTimeout(() => {
            coloredBands[2].classList.add("scale-up-ver-center-revers");
            sw = false;
            maxLength = 8;
            inputResistor.value = "";
            inputResistorValue = "";
            if (modeInputValue) {
                
                setColorResistorDefault();
            }
            calculatiOfResistance()

        });

    }

});
mode[3].addEventListener("click", () => {

    if (getComputedStyle(coloredBands[2]).opacity == "0") {
        coloredBands[2].classList.remove("scale-up-ver-center-revers");
        setTimeout(() => {
            coloredBands[2].classList.add("scale-up-ver-center");
            sw = true;
            maxLength = 9;
            inputResistor.value = "";
            inputResistorValue = "";
            if (modeInputValue) {
                
                setColorResistorDefault();
            }
            calculatiOfResistance()

        });
    }

});

colorsList.forEach(element => {
    element.addEventListener("click", event => {
        let btnColor = element.parentElement.previousElementSibling;
        btnColor.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
        btnColor.style.color = getComputedStyle(event.target).color;
        btnColor.firstElementChild.innerHTML = event.target.innerHTML;
        calculatiOfResistance()
    });
})

function setColorResistor() {


    if (sw) {
        if (inputResistor.value < 10) {
            buttoncolor[0].style.backgroundColor = "black";
            buttoncolor[1].style.backgroundColor = "black";
            buttoncolor[3].style.backgroundColor = "black";

            for (let property in codeColor) {

                if (codeColor[property].code == inputResistor.value) {
                    buttoncolor[2].style.backgroundColor = property.toLowerCase();
                }
            }

        } else if (inputResistor.value < 100) {

            buttoncolor[0].style.backgroundColor = "black";
            buttoncolor[3].style.backgroundColor = "black";

            for (let property in codeColor) {

                if (codeColor[property].code == inputResistor.value[0]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistor.value[1]) {
                    buttoncolor[2].style.backgroundColor = property.toLowerCase();
                }

            }

        } else if (inputResistor.value < 1000) {

            buttoncolor[3].style.backgroundColor = "black";

            for (let property in codeColor) {

                if (codeColor[property].code == inputResistor.value[0]) {
                    buttoncolor[0].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistor.value[1]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistor.value[2]) {
                    buttoncolor[2].style.backgroundColor = property.toLowerCase();
                }

            }

        } else {

            for (let property in codeColor) {

                if (codeColor[property].code == inputResistor.value[0]) {
                    buttoncolor[0].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistor.value[1]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistor.value[2]) {
                    buttoncolor[2].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == (inputResistor.value.length - 3)) {
                    buttoncolor[3].style.backgroundColor = property.toLowerCase();
                }
            }
        }



    } else {
        if (inputResistor.value < 10) {
            buttoncolor[0].style.backgroundColor = "black";
            buttoncolor[3].style.backgroundColor = "black";

            for (let property in codeColor) {

                if (codeColor[property].code == inputResistor.value) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
            }

        } else if (inputResistor.value < 100) {


            buttoncolor[3].style.backgroundColor = "black";

            for (let property in codeColor) {

                if (codeColor[property].code == inputResistor.value[0]) {
                    buttoncolor[0].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistor.value[1]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
            }

        } else {

            for (let property in codeColor) {

                if (codeColor[property].code == inputResistor.value[0]) {
                    buttoncolor[0].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistor.value[1]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == (inputResistor.value.length - 2)) {
                    buttoncolor[3].style.backgroundColor = property.toLowerCase();
                }
            }
        }
    }

}

function setColorResistorDefault() {
    buttoncolor[0].style.backgroundColor = "black";
    buttoncolor[1].style.backgroundColor = "black";
    buttoncolor[2].style.backgroundColor = "black";
    buttoncolor[3].style.backgroundColor = "black";
}


function calculatiOfResistance() {

    let resistanceValue = "", nameColor;
    nameColors.forEach((element, index) => {
        nameColor = element.innerHTML;
        if (index == 2 && !sw) {
            return
        }
        if (index == 3) {
            resistanceValue = +resistanceValue * codeColor[nameColor].zarib;
            return
        }
        if (index == 4) {
            telorans.innerHTML = "±" + +(+resistanceValue * codeColor[nameColor].telorans).toFixed(3);
            return
        }
        resistanceValue = resistanceValue.concat(codeColor[nameColor].code)
    });

    inputResistor.value = (+resistanceValue.toFixed(2)) + "Ω";
}