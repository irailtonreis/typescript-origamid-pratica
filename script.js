// const total = 100;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://api.origamid.dev/json/notebook.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    showProduct(data);
                    return [2 /*return*/];
            }
        });
    });
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = "\n      <div>\n        <h2>".concat(data.nome, "</h2>\n      </div>\n    ");
}
