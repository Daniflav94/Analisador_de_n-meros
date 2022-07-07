let num = document.querySelector('.numDigitado')
let lista = document.querySelector('.lista')
let analisador = document.querySelector('.analise')
let listagem = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function adicionar() { 
    let numero = Number(num.value)  
     if (isNumero(num.value)){
        listagem.push(numero)
        lista.innerHTML += `Valor ${numero} adicionado. <br>` 
  
     }else {
        window.alert('ERRO! Valor inválido.')
     } 
    num.value = ''
    num.focus()
}

function analisar() {
      
    let maior = 0;
    let menor = listagem[0]
    let soma = 0
    
   
    for (let i in listagem){
        if (listagem[i] > maior){
            maior = listagem[i]
        }else if (listagem[i] < menor){
            menor = listagem[i]
        }
        soma += listagem[i]
    }

    let media = soma / listagem.length

    analisador.innerHTML = `Ao todo, temos ${listagem.length} números cadastrados.<br>O maior valor informado foi ${maior}.<br>O menor valor informado foi ${menor}.<br>Somando todos os valores temos ${soma}.<br>A média dos valores digitados é ${media.toFixed(2)}.`
}

