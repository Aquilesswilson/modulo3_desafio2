
// const boton = document.querySelector(".my-button")

// const resultado = document.querySelector("p")

// boton.addEventListener("click", function () {

//     var entrada_1 = document.querySelector(".entrada_1").value;
//     var entrada_2 = document.querySelector(".entrada_2").value;
//     var entrada_3 = document.querySelector(".entrada_3").value;
//     var intValorEntrada1 = parseInt(entrada_1, 10);
//     var intValorEntrada2 = parseInt(entrada_2, 10);
//     var intValorEntrada3 = parseInt(entrada_3, 10);

//     var totalEntrada = intValorEntrada1 + intValorEntrada2 + intValorEntrada3;
//     console.log('Valor 1: '+intValorEntrada1+' + Valor 2:'+intValorEntrada2+' + Valor 3:'+intValorEntrada3+' = '+totalEntrada)



//     if (totalEntrada > 10) {
//         resultado.innerHTML = "Llevas demasiados stickers";

//     } else {
//         resultado.innerHTML = "Llevas stickers: " + totalEntrada;
//     }

// })



function obtenerValor() {
    var selectElement1 = document.getElementById('entrada_1');
    var valorSeleccionado1 = selectElement1.value;

    var selectElement2 = document.getElementById('entrada_2');
    var valorSeleccionado2 = selectElement2.value;

    var selectElement3 = document.getElementById('entrada_3');
    var valorSeleccionado3 = selectElement3.value;

    var valortotal  =  valorSeleccionado1 + valorSeleccionado2 + valorSeleccionado3  ;



if (valortotal == 911) {
    document.getElementById('resultado').textContent = "Password 1 Correcto: " + valortotal;
} else if (valortotal == 714) {
    document.getElementById('resultado').textContent = "Password 2 Correcto: " + valortotal;
} else {
    document.getElementById('resultado').textContent = "Password Incorrecto: ";
}
    
}