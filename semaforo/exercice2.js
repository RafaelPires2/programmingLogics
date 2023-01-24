/* Crie um sistema simulando um semaforo

1- sinais Verde, Vermelho, Amarelo
2- quando sinal estiver verde acender luz verde, e assim com as outras cores
3- A cada 10 segundos o sinal precisa mudar de cor.

*/

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
    }, 1000);
    setTimeout(() => {
    semaforo(sinais[1])
    }, 2000);
    setTimeout(() => {
    semaforo(sinais[2])
    }, 3000);   

    if(cnt == 5){
        clearInterval(obj)
    }
}
