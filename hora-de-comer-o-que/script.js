function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${hora} horas`

    if(hora < 11){
        imagem.src = 'img/cafe_manha.jpg'
        document.body.style.background = '#ceb794'
    }else if(hora < 13){
        imagem.src = 'img/almoco.jpg'
         document.body.style.background = '#d29956'
    }else if(hora < 18){
        imagem.src = 'img/lanche.jpg'
         document.body.style.background = '#d1a25a'
    }else{
        imagem.src = 'img/janta.jpg'
         document.body.style.background = '#520d11'
    }
}