let somas = 0;
let ligado = true;


while(ligado){
    const numero = parseInt(prompt("Digite um número: "));
    if(numero < 1){
        break;
    } somas = numero + somas;
    
}


alert(`O valor da soma dos número é: ${somas}`)