const total = 100;

function somar(a: number, b: number) {
    return a + b;
}   

console.log(somar(10, 5))


function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase()
}

normalizarTexto(" DesigNer")