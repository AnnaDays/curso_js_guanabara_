function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem';

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe menina.jpg')
            } else if (idade >= 11 && idade < 21) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')  
            }
        }
        img.style.width = '280px';
        img.style.height = 'auto';
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img)
    }
}
