
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

let inputResistorValue = "";
let buttoncolor = $.querySelectorAll(".button");



inputResistor.addEventListener("keyup", event => {

    if (event.key == "Backspace") {
        inputResistorValue = inputResistorValue.slice(0, -1);

    } else if (inputResistorValue.length < maxLength && event.key >= 0) {

        inputResistorValue += event.key;

    } else {
        event.preventDefault();
        return;
    }
    setColorResistor();

});









mode[0].addEventListener("click", () => {

    if (getComputedStyle(coloredBands[2]).opacity == "1") {
        coloredBands[2].classList.remove("scale-up-ver-center");
        setTimeout(() => {
            coloredBands[2].classList.add("scale-up-ver-center-revers");
            sw = false;
            maxLength = 8;
            inputResistor.value = "";
            inputResistorValue = "";
            setColorResistorDefault();

        });

    }

});
mode[1].addEventListener("click", () => {

    if (getComputedStyle(coloredBands[2]).opacity == "0") {
        coloredBands[2].classList.remove("scale-up-ver-center-revers");
        setTimeout(() => {
            coloredBands[2].classList.add("scale-up-ver-center");
            sw = true;
            maxLength = 9;
            inputResistor.value = "";
            inputResistorValue = "";
            setColorResistorDefault();

        });
    }

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

function setColorResistor() {

    if (sw) {
        if (inputResistorValue < 10) {
            buttoncolor[0].style.backgroundColor = "black";
            buttoncolor[1].style.backgroundColor = "black";
            buttoncolor[3].style.backgroundColor = "black";

            for (const property in codeColor) {

                if (codeColor[property].code == inputResistorValue) {
                    buttoncolor[2].style.backgroundColor = property.toLowerCase();
                }
            }

        } else if (inputResistorValue < 100) {

            buttoncolor[0].style.backgroundColor = "black";
            buttoncolor[3].style.backgroundColor = "black";

            for (const property in codeColor) {

                if (codeColor[property].code == inputResistorValue[0]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistorValue[1]) {
                    buttoncolor[2].style.backgroundColor = property.toLowerCase();
                }

            }

        } else if (inputResistorValue < 1000) {

            buttoncolor[3].style.backgroundColor = "black";

            for (const property in codeColor) {

                if (codeColor[property].code == inputResistorValue[0]) {
                    buttoncolor[0].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistorValue[1]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistorValue[2]) {
                    buttoncolor[2].style.backgroundColor = property.toLowerCase();
                }

            }

        } else {

            for (const property in codeColor) {

                if (codeColor[property].code == inputResistorValue[0]) {
                    buttoncolor[0].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistorValue[1]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistorValue[2]) {
                    buttoncolor[2].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == (inputResistorValue.length - 3)) {
                    buttoncolor[3].style.backgroundColor = property.toLowerCase();
                }
            }
        }



    } else {

        if (inputResistorValue < 10) {
            buttoncolor[0].style.backgroundColor = "black";
            buttoncolor[3].style.backgroundColor = "black";

            for (const property in codeColor) {

                if (codeColor[property].code == inputResistorValue) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
            }

        } else if (inputResistorValue < 100) {


            buttoncolor[3].style.backgroundColor = "black";

            for (const property in codeColor) {

                if (codeColor[property].code == inputResistorValue[0]) {
                    buttoncolor[0].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistorValue[1]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
            }

        } else {

            for (const property in codeColor) {

                if (codeColor[property].code == inputResistorValue[0]) {
                    buttoncolor[0].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == inputResistorValue[1]) {
                    buttoncolor[1].style.backgroundColor = property.toLowerCase();
                }
                if (codeColor[property].code == (inputResistorValue.length - 2)) {
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
