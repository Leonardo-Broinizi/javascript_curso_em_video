function calcular(){
    var esc = window.document.getElementById('inum').value
    if (esc.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        for(let c = 1; c <= 10; c++) {
            var num = window.document.getElementById(c)
            var res = c * esc
            num.innerHTML = `${c} x ${esc} = ${res}`
        }
    }
    //var dois = window.document.getElementById('2')
    //dois.innerHTML = 'Olá'
    //alert(num.value) 
}




/*
    var n = window.document.getElementById('inum').value
    var um = window.document.getElementById('1').value
    var dois = window.document.getElementById('2').value
    var três = window.document.getElementById('3').value
    var quatro = window.document.getElementById('4').value
    var cinco = window.document.getElementById('5').value
    var seis = window.document.getElementById('6').value
    var sete = window.document.getElementById('7').value
    var oito = window.document.getElementById('8').value
    var nove = window.document.getElementById('9').value
    var dez = window.document.getElementById('10').value

    */