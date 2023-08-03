const up = parseFloat(prompt("Informe a medida do ângulo de cima triângulo"));
const right = parseInt(prompt("Informe a medida do ângulo direito inferior do triângulo"));
const left = parseFloat(prompt("Informe a medida do ângulo esquerdo inferior do triângulo"));

if(right == left && right == up){
    alert("Está triângulo é: equilátero")
} else if(right == left){
    alert("Este triângulo é Isósceles")
} else if (right !== left && right !== up){
    alert("Este triângulo é Escaleno")
} else (
    alert("Dados insuficientes")
)