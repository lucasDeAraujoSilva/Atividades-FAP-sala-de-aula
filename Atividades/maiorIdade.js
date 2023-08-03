const maiorDeIdade = 18;
let idade = parseInt(prompt("Informe sua idade!"));
let rest = maiorDeIdade - idade;

if(idade >= maiorDeIdade){
    alert("Você já é maior de idade")
} else (
    alert("Você não é maior de idade, faltam: " + rest + " anos para se tornar maior de idade!" )
)