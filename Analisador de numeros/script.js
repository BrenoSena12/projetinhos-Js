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
    }else{
            adicionados.appendChild(item)
            lista.push(numero)
    }
}
function finalizar(){
    let maior = Math.max.apply(null, lista) //EXPLICAÇÃO
    let menor = Math.min.apply(null,lista)  //EXPLICAÇÃO
    resultado.innerHTML = `${lista}`

    


    resultado.innerHTML = `Ao todo, temos ${lista.length} cadastrados <br>`
    resultado.innerHTML += `O maior valor informado foi ${maior} <br>`
    resultado.innerHTML += `O maior valor informado foi ${menor}`
}

