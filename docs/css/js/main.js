"use strict";

/*
  
  PASOS
  - Recoger los elementos html:
    input de número
    botón de "prueba"
    input de pista
    input de numero de intentos
  - Se genera un número al azar
  - Si se introduce un número mayor que el aleatorio
    aparece el mensaje: "demasiado alto"
  - Si se introduce un número menor
    aparece el mensaje: "demasiado bajo"

  - Si el número es el mismo
        aparece el mensaje: "Has ganado, campeona!!"
  - Si se introduce un número mayor que 100
        aparece el mensaje: "El número debe estar entre 1 y 100"
  - Cuando se haga un intento, debe aumentar el número en la casilla de intentos
  
*/
const number = document.querySelector(".js-number");
const button = document.querySelector (".js-button");
const clue = document.querySelector (".js-clue");
const attempt = document.querySelector(".js-attempt");

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }

const randomNumber = getRandomNumber (100);
  console.log(randomNumber);

const handleClick = (ev) => {
    ev.preventDefault();
    console.log("click");
    const numberUser = number.value;

    if (numberUser > randomNumber ){
        clue.innerHTML = "Demasiado alto";
        } else if ( numberUser < randomNumber){
            clue.innerHTML = "Demasiado bajo";



    }    
}
button.addEventListener ("click", handleClick);


  




