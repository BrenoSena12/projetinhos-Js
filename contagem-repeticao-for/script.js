function contar(){
    //VARIAVEIS
    var inicio = document.querySelector('input#valor_inicial')
    var final = document.querySelector('input#valor_final')
    var passos = document.querySelector('input#contagem')
    var resposta = document.querySelector('div#resposta')

    //CONVERTENDO AS VARIAVEIS
    inicio = Number(inicio.value)
    final = Number(final.value)
    passos = Number(passos.value)

    resposta.innerHTML = `Resposta!<br>`

    //CONDIÇÕES PARA O FUNCIONAMENTO DO LAÇO
    if(inicio < final){
        if(final == 0){
        texto.innerHTML += `<br> Impossivel de contar!`
        }else if(passos == 0){
        alert(`PASSOS não podem ser 0 ou nulos, o valor 0 será subistituido por 1`)
        passos = 1
        for(inicio; inicio <= final; inicio+=passos){
            resposta.innerHTML += `${inicio} &#128073; `
        }
        }else{
            for(inicio; inicio <= final; inicio+=passos){
            resposta.innerHTML += `${inicio} &#128073; `
            }
        }
    }else{
        if(final == 0){
            texto.innerHTML += `<br> Impossivel de contar!`
        }else if(passos == 0){
            alert(`PASSOS não podem ser 0 ou nulos, o valor 0 será subistituido por 1`)
            passos = 1
            for(inicio; inicio >= final; inicio-=passos){
                resposta.innerHTML += `${inicio} &#128073; `
            }
        }else{
            for(inicio; inicio >= final; inicio-=passos){
            resposta.innerHTML += `${inicio} &#128073; `
            }
        }
    }
    resposta.innerHTML += '&#127937;'
}