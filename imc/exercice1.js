// Calcular o IMC

function IMC(weight, height){
   let result = weight / (height * height)

    if(result < 18.5){
        console.log(`Seu IMC é de: ${result.toFixed(2)} está ABAIXO DO PESO`)
    } if (result > 18.5 && result < 24.99){
        console.log(`Seu IMC é de: ${result.toFixed(2)} está em seu peso NORMAL`)
    } if (result > 25 && result < 29.99){
        console.log(`Seu IMC é de: ${result.toFixed(2)} está SOBREPESO`)
    }if(result > 30 && result < 34.99){
        console.log(`Seu IMC é de: ${result.toFixed(2)} está em OBESIDADE GRAU I`)      
    }if(result > 35 && result < 39.99){
        console.log(`Seu IMC é de: ${result.toFixed(2)} está em OBESIDADE GRAU II`)      
    }else if(result > 35 && result < 39.99)
        console.log(`Seu IMC é de: ${result.toFixed(2)} está em OBESIDADE MORBIDA`)
}

IMC(75, 1.76)
console.log("-------------------------------")
