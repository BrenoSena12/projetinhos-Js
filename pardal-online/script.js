function somar(){
    var via = document.getElementById('via')
    var veiculo = document.getElementById('veiculo')
    var resultado = document.getElementById('resultado')
    via = Number(via.value)
    veiculo = Number(veiculo.value)

    if(veiculo > via){
        resultado.innerHTML = `<strong>MULTADO!</strong> <br> sua velocidade de <strong>${veiculo}Km/h</strong> foi superior ao da via de <strong>${via}Km/h.</strong>`
    }else{
        resultado.innerHTML = `<strong>Parabéns!</strong> <br> sua velocidade está no limite da via.`
    }
}