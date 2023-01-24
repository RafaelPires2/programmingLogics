/* Crie um sistema simulando um semaforo

1- sinais Verde, Vermelho, Amarelo
2- quando sinal estiver verde acender luz verde, e assim com as outras cores
3- A cada X segundos o sinal precisa mudar de cor.
4- Tenha um limite de vezes que o sinal funcionará
*/

const Verde = document.querySelector('.verde');
const Amarelo = document.querySelector('.amarelo');
const Vermelho = document.querySelector('.vermelho');

let sinais = [
    proceed = "verde",
    warning = "amarelo",
    stopCar = "vermelho"
]

 function semaforo(sinal) {
    if(sinal === proceed){
        console.log(proceed)
    }else if(sinal === warning){
        console.log(warning)
    }else if(sinal === stopCar){
        console.log(stopCar)
        console.log(` ------- Ciclo: ${cnt} -------`)
    } else{
        console.log("Semaforo quebrado! Cuidado !!")}
 }
 
let cnt = 0
let obj = setInterval(semaforoAutomatic, 5000);

function semaforoAutomatic(){
    cnt++
    setTimeout(() => {
    semaforo(sinais[0])
    Verde.classList.remove('disabled')
    Vermelho.classList.add('disabled')
   
    }, 1000);
    setTimeout(() => {
    semaforo(sinais[1])
    Amarelo.classList.remove('disabled')
    Verde.classList.add('disabled')
    
    }, 2000);
    setTimeout(() => {
    semaforo(sinais[2])
    Vermelho.classList.remove('disabled')
    Amarelo.classList.add('disabled')
    }, 3000);   

    if(cnt == 5){
        clearInterval(obj)
    }
}
