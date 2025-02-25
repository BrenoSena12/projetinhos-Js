function contar(){
    var inicio = document.querySelector('input#valor_inicial')
    var final = document.querySelector('input#valor_final')
    var passos = document.querySelector('input#contagem')
    var resposta = document.querySelector('div#resposta')

    inicio = Number(inicio.value)
    final = Number(final.value)
    passos = Number(passos.value)

   for(inicio; inicio <= final; inicio+=passos){
    resposta.innerHTML = `${inicio}`
   }
}