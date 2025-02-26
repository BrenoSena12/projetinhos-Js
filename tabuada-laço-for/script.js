function gerar(){
    var numero = document.querySelector('input#numero')
    var tabuada = document.querySelector('select#tabuada')

    numero = Number(numero.value)

    if(numero == 0){
        alert('Digite um numero')
    }else{
        let c = 1
        tabuada.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option') //CRIA UM ELEMENTO HTML
            item.text = `${numero} x ${c} = ${numero * c}`
            tabuada.appendChild(item)
            c++
        }
    }
}
