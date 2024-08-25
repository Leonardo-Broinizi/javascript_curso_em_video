function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { // Aqui eu não precisaria verifica se o valor de fano é igual a zero pois coloquei como atributo no input um 'min' de 1900, mas quis deixar aqui assim, como o professor deixou.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img') // Nessa linha foi criado um img para o html via JS.
        img.setAttribute('id', 'foto') // Nessa linha foi atribuído um id para o img criado na linha acima.
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src','c_m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'j_m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'a_m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'i_m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'c_f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'j_f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'a_f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'i_f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}