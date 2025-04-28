
const boton = document.querySelector(".my-button")
const resultado = document.querySelector("p")

var totalEntrada=0

boton.addEventListener("click", function () {

    var entrada_1 = document.querySelector('#entrada_1');
    var intValorEntrada1 = parseInt(entrada_1.value, 10);

    var entrada_2 = document.querySelector('#entrada_2');
    const intValorEntrada2 = parseInt(entrada_2.value, 10);

    var entrada_3 = document.querySelector('#entrada_3');
    var intValorEntrada3 = parseInt(entrada_3.value, 10);

    totalEntrada = intValorEntrada1 + intValorEntrada2 + intValorEntrada3;
    console.log('Valor 1: '+intValorEntrada1+' + Valor 2:'+intValorEntrada2+' + Valor 3:'+intValorEntrada3+' = '+totalEntrada)



    if (totalEntrada > 10) {
        resultado.innerHTML = "Llevas demasiados stickers";

    } else {
        resultado.innerHTML = "Llevas stickers: " + totalEntrada;
    }

})

