// const total = 100;
function preencherDados(dados) {
    document.body.innerHTML += "\n    <div>\n      <h2>".concat(dados.nome, "</h2>\n      <p>R$ ").concat(dados.preco, "</p>\n      <p>Inclui teclado: ").concat(dados.teclado ? 'sim' : 'não', "</p>\n    </div>\n    ");
}
var produto = {
    nome: 'Computador',
    preco: 2000,
    teclado: false,
};
preencherDados(produto);
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: true,
});
function pintarCategoria(categoria) {
    if (categoria === "design") {
        console.log("Pintar vermelho");
    }
}
pintarCategoria("design");
