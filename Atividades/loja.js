let valor_compra = parseFloat(prompt("Qual valor da sua compra?"));
let parcelas = parseInt(prompt("Em quantas vezes você deseja parcelar?"));
let valor_parcela = valor_compra/ parcelas;

console.log(valor_parcela);