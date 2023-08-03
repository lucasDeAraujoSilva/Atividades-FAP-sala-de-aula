const value1 = parseInt(prompt("Informe um número"));
const value2 = parseInt(prompt("Informe outro número"));

if(value1 < value2){
    console.log(`${value1}, ${value2}`)
} else if(value2 < value1){
    console.log(`${value2}, ${value1}`)
}