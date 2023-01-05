
//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1
//events

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)

//funçoes callback
function handleTryClick(event) {
    event.preventDefault() // nao faça o padrao 

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screen2.querySelector("h2").innerText = `acertou em ${xAttemps} tentativas`


    }

    inputNumber.value = ""
    xAttemps++


}

function handleResetClick () {

    toggleScreen()
    xAttemps = 1
    generateNumber();
}

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterKey(e) {
    if((e.key == 'Enter') && (screen1.classList.contains('hide'))) {
    handleResetClick();
    }
  }

  function generateNumber(){
    randomNumber = Math.round(Math.random() * 10);
    return randomNumber;
    }

