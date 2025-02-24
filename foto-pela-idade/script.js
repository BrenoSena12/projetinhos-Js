function verificar(){
    var data = new Date() //data completa
    var ano = data.getFullYear() //seleciona apenas o ano com 4 numeros
    var ano_formulario = document.getElementById('ano')
    var res = document.querySelector('div#res')

    ano_formulario = Number(ano_formulario.value)

    if(ano_formulario == 0 || ano_formulario > ano) {
        alert('ERRO! o campo ANO DE NASCIMENTO está vazio ou a data foi preenchida errada')
    }else{
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var idade = ano - ano_formulario
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){// 0 masculino 1 feminino
            genero = 'Homem'
            if(idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src', 'img/bebe.avif')
            }else if(idade < 12){
                //criança
                img.setAttribute('src', 'img/crianca-menino.jpg')
            }else if(idade < 18){
                //adolescente
                img.setAttribute('src', 'img/adolescente-menino.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/homem.jpg')
            }else if(idade < 120){
                //idoso
                img.setAttribute('src', 'img/idoso.avif')
            }else{
                //lapedi
                img.setAttribute('src', 'img/lapedi.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src', 'img/bebe.avif')
            }else if(idade < 12){
                //criança
                img.setAttribute('src', 'img/crianca-menina.jpg')
            }else if(idade < 18){
                //adolescente
                img.setAttribute('src', 'img/adolescente-menina.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/mulher.jpg')
            }else if(idade < 120){
                //idoso
                img.setAttribute('src', 'img/idosa.avif')
            }else{
                //mumia
                img.setAttribute('src', 'img/lapedi.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}
