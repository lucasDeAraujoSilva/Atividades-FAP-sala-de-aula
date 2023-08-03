let valor_produto1 = parseFloat(prompt("Informe o valor do peoduto"));
let valor_produto2 = parseFloat(prompt("Informe o valor do peoduto"));
let valor_produto3 = parseFloat(prompt("Informe o valor do peoduto"));


if(valor_produto1 < valor_produto2 && valor_produto1 < valor_produto3){
    alert(`O produto mais barato é o primeiro produto, que custa: ${valor_produto1}`)
} else if(valor_produto2 < valor_produto1 && valor_produto2 < valor_produto3){
    alert(`O produto mais barato é o segundo produto, que custa: ${valor_produto2}`)
}else (
    alert(`O produto mais barato é o terceiro produto, que custa: ${valor_produto3}`)
);