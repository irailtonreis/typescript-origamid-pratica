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
// async function fetchProduct() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const data = await response.json();
//     showProduct(data);
// }
// fetchProduct();
// interface Empresa {
//     nome: string;
//     fundacao: number;
//     pais: string;
// }
// interface Produto {
//     nome: string;
//     preco: number;
//     descricao: string;
//     seguroAcidente: boolean;
//     empresaFabricante: Empresa;
//     empresaMontadora: Empresa;
// }
// function showProduct(data: Produto) {
//     document.body.innerHTML += `
//       <div>
//         <h2>${data.nome}</h2>
//       </div>
//     `;
// }
// // se curso inciante Azul / vermelho
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const data = await response.json();
//   console.log(data)
//   mostrarCursos(data);
// }
// fetchCursos();
// interface Cursos {
//   aulas: number;
//   gratuito: boolean;
//   horas: number;
//   idAulas: number [];
//   nivel: 'iniciante' | 'avancado';
//   nome: string; 
//   tags: string []
// }
// function mostrarCursos(cursos: Cursos[]) {
//   cursos.forEach((curso) =>{
//     let color;
//     if(curso.nivel === "iniciante"){
//       color = 'blue';
//     }else if(curso.nivel === "avancado"){
//       color = 'red';
//     }
//     document.body. innerHTML += `
//       <div>
//       <h2 style="color: ${color};">${curso.nome}</h2>
//       <p>Horas: ${curso.horas}</p>
//       <p>Aulas: ${curso.aulas}</p>
//       <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
//       <p>Tags: ${curso.tags.join(", ")}</>
//       <p>Aulas: ${curso.idAulas.join(" | ")}</>
//       </div>`;
//   })
// }
// interface Product {
//   nome?: string;
// }
// const livro: Product = {};
// const jogo: Product = {
//   nome: 'Ragnarok',
// };
// jogo.nome?.toLowerCase();
// livro.nome?.toLowerCase();
// // Checagem com instanceof 
// class Produto {
//   nome: string;
//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }
// class Livro extends Produto {
//   autor: string;
//   constructor(nome: string, autor: string) {
//     super(nome);
//     this.autor = autor;
//   }
// }
// class Jogo extends Produto {
//   jogadores: number;
//   constructor(nome: string, jogadores: number) {
//     super(nome);
//     this.jogadores = jogadores;
//   }
// }
// function buscarProduto(busca: string) {
//   if (busca === 'O Hobbit') {
//     return new Livro('O Hobbit', 'J. R. R. Tolkien');
//   }
//   if (busca === 'Dark Souls') {
//     return new Jogo('Dark Souls', 1);
//   }
//   return null;
// }
// const produto1 = buscarProduto('O Hobbit');
// const produto2 = buscarProduto('Dark Souls');
// if (produto1 instanceof Produto) {
//   produto1.nome;
// }
// if (produto2 instanceof Produto) {
//   produto2.nome;
// }
// let link = document.getElementById("origamid")
// if (link instanceof  HTMLAnchorElement) {
//   link.href = link.href.replace('http://', 'https://')
// }
// const links = document.querySelectorAll('.link');
// links.forEach((item) => {
//   if (item instanceof HTMLElement) {
//     ativarElemento(item);
//   }
// });
// function ativarElemento(elemento: HTMLElement) {
//   elemento.style.color = 'red';
//   elemento.style.border = '2px solid red';
// }
// const btnMobile = document.getElementById('btn-mobile')
// function toggleMenu(event: Event) {
//   const button = event.currentTarget;
//   const nav = document.getElementById('nav')
//   if (button instanceof HTMLElement && nav) {
//     const active = nav.classList.contains("active");
//     if (active) {
//       nav.classList.remove("active");
//       button.setAttribute("aria-expanded", "false")
//       button. setAttribute("aria-label", "Abrir Menu")
//     } else{
//       nav.classList.add("active")
//       button.setAttribute("aria-expanded", "true")
//       button.setAttribute("aria-label", "Fechar Menu")
//     }
//   }
// }
// btnMobile?.addEventListener('pointerdown', toggleMenu)
// function normalizar(valor: string): string;
// function normalizar(valor: string[]): string[];
// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === "string") {
//     return valor.trim().toLowerCase();
//   } else {
//     return valor.map((item) => item.trim().toLowerCase());
//   }
// }
// normalizar(" Produto ");
// normalizar(["Banana ", " UVA"]);
// // Exemplo 2
// function $(seletor: "video"): HTMLVideoElement | null;
// function $(seletor: "div"): HTMLDivElement | null;
// function $(seletor: "a"): HTMLAnchorElement | null;
// function $(seletor: string): Element | null;
// function $(seletor: string): Element | null {
//   return document.querySelector(seletor);
// }
// $("a")?.href;
// $("video")?.volume;
// $(".teste")?.innerHTML;
// function arredondar(valor: string): string;
// function arredondar(valor: number): number;
// function arredondar(valor: string | number): string | number {
//   if (typeof valor === 'number') {
//     return Math.ceil(valor);
//   } else {
//     return Math.ceil(Number(valor)).toString();
//   }
// }
// console.log(arredondar(200.32));
// console.log(arredondar('200.32'));
// function typeGuard(value: any) {
//   if (typeof value === 'string') {
//     return value.toLowerCase();
//   }
//   if (typeof value === 'number') {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }
// typeGuard('Origamid');
// typeGuard(200);
// typeGuard(document.body);
// interface Produto {
//   nome: string;
//   preco: number;
// }
// async function fetchProduto() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   return response.json() as Promise<Produto>;
// }
// // Podemos usar o as em diferentes locais.
// async function handleProduto1() {
//   const produto = await fetchProduto();
//   produto.nome;
// }
// async function handleProduto2() {
//   const produto = (await fetchProduto()) as Produto;
//   produto.nome;
// }
// async function handleProduto3() {
//   const produto = await fetchProduto();
//   (produto as Produto).nome;
// }
// const video1 = document.querySelector('.player') as HTMLVideoElement;
// const video2 = <HTMLVideoElement>document.querySelector('.player');
// const video3 = document.querySelector<HTMLVideoElement>('.player');
// const video4 = document.querySelector('.player');
// video1.volume;
// video2.volume;
// video3?.volume;
// (video4 as HTMLVideoElement).volume;
// function handleClick({
//   currentTarget,
//   pageX,
// }: {
//   currentTarget: EventTarget | null;
//   pageX: number;
// }) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
//   }
// }
// document.documentElement.addEventListener('click', handleClick);
// function comparar(tipo: 'maior' | 'menor', ...numeros: number[]) {
//   if (tipo === 'maior') {
//     return Math.max(...numeros);
//   }
//   if (tipo === 'menor') {
//     return Math.min(...numeros);
//   }
// }
// console.log(comparar('maior', 3, 2, 4, 30, 5, 6, 20));
// console.log(comparar('menor', 3, 2, 4, 1, 5, 6, 20));
// type Produto2 = {
//   preco: number;
// };
// type Carro = {
//   rodas: number;
//   portas: number;
// };
// function handleProdutoCarro(dados: Carro & Produto2) {
//   dados.rodas;
//   dados.portas;
//   dados.preco;
// }
// handleProdutoCarro({
//   preco: 20000,
//   rodas: 4,
//   portas: 5,
// });
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
async function handleData() {
    const jogo = await fetchData('/jogo.json');
    if (checkInterface(jogo, 'desenvolvedora')) {
        console.log(jogo.desenvolvedora);
    }
    const livro = await fetchData('/livro.json');
    if (checkInterface(livro, 'autor')) {
        console.log(livro.autor);
    }
}
handleData();
function checkInterface(obj, ...keys) {
    if (obj &&
        typeof obj === 'object' &&
        keys.filter((key) => key in obj).length === keys.length) {
        return true;
    }
    else {
        return false;
    }
}
function checkInterfaceSimples(obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
