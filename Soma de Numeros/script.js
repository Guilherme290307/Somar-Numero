let Numero1 = document.querySelector("#Numero1");
let Numero2 = document.querySelector("#Numero2");
let btSomar = document.querySelector("#btSomar");
let Resultado = document.querySelector("#Resultado");

function Somar() {
    let Num1 = Number(Numero1.value);
    let Num2 = Number(Numero2.value);
    Resultado.textContent = (Num1 + Num2);
}

btSomar.onclick = function() {
    Somar();
}