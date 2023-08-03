alert("Lanches & Cia");
const user = prompt("Insira seu usuário");
alert(`Seja bem vindo(a) ${user}!`);
const lanche = parseInt(
  prompt(
    "Escolha seu lanche \n 1 - Empada R$ 5,00; \n 2 - Hamburguer R$ 12,00; \n 3 - Foleado R$ 4,00; \n 4 - Pastel R$ 3,50; \n 5 - Caldo de Cana R$ 2,50; \n 6 - Bolo de chocolate R$ 3,00."
  )
);

switch (lanche) {
  case 1:
    alert(`O lanche escolhido foi: Empada R$ 5,00.`);
    break;

  case 2:
    alert(`O lanche escolhido foi: Hamburguer R$ 12,00.`);
    break;

  case 3:
    alert(`O lanche escolhido foi: Foleado R$ 4,00.`);
    break;

  case 4:
    alert(`O lanche escolhido foi: Pastel R$ 3,50.`);
    break;

 case 5:
    alert(`O lanche escolhido foi: Caldo de Cana R$ 2,50.`);
    break;
    case 6:
        alert(`O lanche escolhido foi: Bolo de chocolate R$ 3,00.`)
        default:
            alert(`A opção escolhida não existe no cardápio!`)
}
