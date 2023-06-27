// const total = 100;
// function somar(a: number, b: number) {
//     return a + b;
// }   
// console.log(somar(10, 5))
// function normalizarTexto(texto: string) {
//     return texto.trim().toLowerCase()
// }
// normalizarTexto(" DesigNer")
var input = document.querySelector("input");
var total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    var p = document.querySelector("p");
    if (p) {
        p.innerText = "ganho total: ".concat(value + 100 - value * 0.2);
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
if (input)
    input.addEventListener("keyup", totalMudou);
var frase = "Front End";
var preco = 500;
var condi = preco > 100;
console.log(typeof frase);
console.log(typeof preco);
console.log(typeof null);
if (typeof frase === "string") {
    frase.toLowerCase();
}
else {
    console.log("Frase ndo é uma string");
}
