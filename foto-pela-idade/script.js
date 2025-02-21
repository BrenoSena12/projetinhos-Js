function clicar(){
    var idade = document.getElementById('ano_nascimento')
    idade = Number(idade.value)
    var homem = document.getElementById('homem')
    var mulher = document.getElementById('mulher')
    homem = true
    mulher = false

    if(true){
        if(idade <= 2){
            window.alert('bebe homem')
        }else if(idade <= 10){
            window.alert('criança homem')
        }else if(idade <= 18 ){
            window.alert('adolecente homem')
        }else if(idade <= 50){
            window.alert('adulto homem')
        }else{
            window.alert('idoso homem')
        }
    }
    
    if(False){
        if(idade <= 2){
            window.alert('bebe mulher')
        }else if(idade <= 10){
            window.alert('criança mulher')
        }else if(idade <= 18 ){
            window.alert('adolecente mulher')
        }else if(idade <= 50){
            window.alert('adulto mulher')
        }else{
            window.alert('idoso mulher')
        }
    }
}
