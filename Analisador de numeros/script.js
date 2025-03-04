let resultado = document.querySelector('div#resultado')
let lista = []

function adicionar(){
    let numero = document.querySelector('input#entrada_numeros')
    let adicionados = document.querySelector('select#adicionados')
    
    numero = Number(numero.value)

    let item = document.createElement('option')
    item.text = `${numero}`

    if(numero == 0 || numero > 100 ){
        alert('Valor invalido ou já encontrado na lista')
    }else if(lista.includes(numero)){ //APRENDER ESSA LINHA DE CODIGO
        alert('repetido')
    }else{
        let item = document.createElement('option')
        item.text = `${numero}`
        adicionados.appendChild(item)
        lista.push(numero)
    }

    numero
}

function finalizar(){
    let maior = Math.max(...lista) //APRENDER ESSA  LINHA DE CODIGO
    let menor = Math.min(...lista)  //APRENDER ESSA LINHA DE CODIGO

    /*/TIRAR A MÉDIA = REDUCE() SOMA TODOS OS VALORES, O TOTAL E O VALOR SÃO NOMES QUE ESCOLHEMOS, 
    ELES FAZEM A FUNÇÃO DE SOMAR O VALOR E O PROXIMO VALOR, O 0 IDICA O VALOR A SER INICIADO*/
    let media = lista.reduce((total, valor) => total + valor, 0)
    media = media / lista.length

    resultado.innerHTML = `${lista}`

    resultado.innerHTML = `Ao todo, temos ${lista.length} cadastrados <br>`
    resultado.innerHTML += `O maior valor informado foi ${maior} <br>`
    resultado.innerHTML += `O maior valor informado foi ${menor} <br>`
    resultado.innerHTML += `A média dos valores informados ${media}`
}

