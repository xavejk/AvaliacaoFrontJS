function exercicio2() {
    const valor = Number(prompt("Digite o valor que você ganha por hora:"))
    const horas = Number(prompt("Digite a quantidade de horas trabalhadas no mês:"))
    alert(valor*horas)
    
}

const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })

function exercicio3() {
    const peso1 = Number(prompt("Digite o peso da primeira pessoa:"))
    const peso2 = Number(prompt("Digite o peso da segunda pessoa:"))
    const peso3 = Number(prompt("Digite o peso da terceira pessoa:"))
    const peso4 = Number(prompt("Digite o peso da quarta pessoa:"))
    const peso5 = Number(prompt("Digite o peso da quinta pessoa:"))

    const resposta =((peso1+peso2+peso3+peso4+peso5)/5)
    alert (resposta)   
}
const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click', () => { exercicio3() })

function exercicio5() {
    const milha = Number(prompt("Digite uma distância em milha:"))
    alert (milha*1,60934)
}
const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => { exercicio5() })

function exercicio13() {
    const numero = Number(prompt("Digite um número:"))

    if (numero % 2 === 0) {
        alert("Este número é par.")
    }else {
        alert("Este número é impar.")
    }
}
const buttonExercicio13 = document.getElementById("exercicio13")
buttonExercicio13.addEventListener('click', () => { exercicio13() })