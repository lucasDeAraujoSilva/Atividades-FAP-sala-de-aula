let temperaturaCorporal = parseFloat(prompt("Informe a temperatura do corpo"))
const temperaturaMinPermitida = 36;
const temperaturaMaxPermitida = 36.7;


if(temperaturaCorporal >= temperaturaMinPermitida && temperaturaCorporal <= temperaturaMaxPermitida){
    alert("Sua temperatura está ideal")
} else if (temperaturaCorporal < temperaturaMinPermitida){
    alert("Seu corpo está frio, você precisa se aquecer")
}if (temperaturaCorporal > 40){
    alert("Procure a emergência imediatamente!")
} 
else(
    alert("Você está com febre!")
)