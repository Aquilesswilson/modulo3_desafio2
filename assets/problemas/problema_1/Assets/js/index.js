//Imagen por defecto
var imagen = document.getElementById("bordecolor");
let contador = 0;

//Revisar contador

//Capturar clic

//Sumar a contador



// function cambiaborde() {

// }


imagen.addEventListener('click', function () {
    contador++;
    console.log('Valor contador:' + contador)
    if (!esPar(contador)) {
        imagen.style.cursor = "pointer";
        imagen.style.border = "2px solid red";
    } else if (esPar(contador)) {
        imagen.style.border = "0";
    }

})




function esPar(numero) {
    return numero % 2 === 0;
}

// function esImpar(numero) {
//     return numero % 2 !== 0;
// }