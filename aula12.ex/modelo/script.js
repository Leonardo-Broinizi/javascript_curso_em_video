var data = new Date()
var hr = data.getHours()
var min = data.getMinutes()
var horário = window.document.querySelector('p#horario')
if (min < 10) { // Aqui eu fiz uma gambiarra para que os minutos sempre apareçam com duas casas, já que ainda não sei formatar variáveis em JavaScript.
    horário.innerHTML += `${hr}:0${min}`
} else {
    horário.innerHTML += `${hr}:${min}`
}
var imagem = window.document.querySelector('div#dimagem')
var bc = window.document.querySelector('body#bbc')

if (hr > 19 || hr < 6) {
    imagem.innerHTML = `<img src="images.jpeg" alt="Imagem Estrada, Horizonte, Céu Escuro Estrelado" id="imagem">`
    bc.style.backgroundColor = "#332b2bad"
} else if (hr > 5 && hr < 10) {
    imagem.innerHTML = `<img src="alvorada.jpg" alt="Imagem da Alvorada" id="imagem"></img>`
    bc.style.backgroundColor = "#ff8c20d2"
} else if (hr > 9 && hr < 18) {
    imagem.innerHTML = `<img src="dia2.jpeg" alt="Imagem de um dia ensolarado, céu e campo" id="imagem"></img>`
    bc.style.backgroundColor = "#2db1eead"
} else if (hr > 17 && hr < 20) {
    imagem.innerHTML = `<img src="Pôr_do_Sol.jpg" alt="Pôr do Sol" id="imagem"></img>`
    bc.style.backgroundColor = "#b86416d2"
}