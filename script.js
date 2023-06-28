"use strict";
// const total = 100;
// function somar(a: number, b: number) {
//     return a + b;
// }   
// console.log(somar(10, 5))
// function normalizarTexto(texto: string) {
//     return texto.trim().toLowerCase()
// }
// normalizarTexto(" DesigNer")
// const input = document.querySelector("input");
// const total = localStorage.getItem("total");
// if (input && total) {
//     input.value = total;
//     calcularGanho(Number(input.value));
// }
// function calcularGanho(value: number) {
//     const p = document.querySelector("p");
//     if (p) {
//         p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
//     }
// }
// function totalMudou() {
//     if (input) {
//         localStorage.setItem("total", input.value);
//         calcularGanho(Number(input.value));
//     }
// }
// if (input) input.addEventListener("keyup", totalMudou)
// const frase = "Front End";
// const preco = 500;
// const condi = preco > 100;
// console.log(typeof frase);
// console.log(typeof preco);
// console.log(typeof null);
// if (typeof frase === "string") {
//     frase.toLowerCase();
// } else {
//     console.log("Frase ndo é uma string");
// }
// let total: string | number = 200;
// total = "4000";
// function isNumber(value: string | number) {
//     if (typeof value === "number") {
//         return true;
//     } else {
//         return false;
//     }
// }
// if (isNumber("200")) {
//     console.log("E um nimero");
// }
// const button = document.querySelector("button")
// button?.click()
// function toNumber(param: number | string){
//     if(typeof param === "number"){
//         return param
//     }
//     if(typeof param === "string"){
//         return Number(param)
//     }
//     throw new Error("O parâmetro de ser um número ou string");
// }
// console.log(toNumber("9"))
// console.log(toNumber(10))
// console.log(toNumber(true))
// type Produto = {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }
// function preencherDados(dados: Produto) {
//     document.body.innerHTML += `
//     <div>
//       <h2>${dados.nome}</h2>
//       <p>R$ ${dados.preco}</p>
//       <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
//     </div>
//     `;
// }
// const produto: Produto = {
//     nome: 'Computador',
//     preco: 2000,
//     teclado: false,
// }
// preencherDados(produto);
// preencherDados({
//     nome: 'Notebook',
//     preco: 2500,
//     teclado: true,
// });
// type Categorias = "design" | "codigo" | "descod";
// function pintarCategoria(categoria: Categorias) {
//     if (categoria === "design") {
//         console.log("Pintar vermelho");
//     }
// }
// pintarCategoria("design")
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
      </div>
    `;
}
// se curso inciante Azul / vermelho
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === "iniciante") {
            color = 'blue';
        }
        else if (curso.nivel === "avancado") {
            color = 'red';
        }
        document.body.innerHTML += `
      <div>
      <h2 style="color: ${color};">${curso.nome}</h2>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
      <p>Tags: ${curso.tags.join(", ")}</>
      <p>Aulas: ${curso.idAulas.join(" | ")}</>
      </div>`;
    });
}
const livro = {};
const jogo = {
    nome: 'Ragnarok',
};
jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();
