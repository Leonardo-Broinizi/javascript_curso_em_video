function contar() {
    var início = window.document.querySelector('input#iin').value
    var fim = window.document.querySelector('input#ifim').value
    var passo = window.document.querySelector('input#ipasso').value
    alert(`${início}, ${fim}, ${passo}`)
    var contando = window.document.querySelector('p#cont')
    if (início == 0 || fim == 0) {
        contando.innerHTML = `Impossível contar!`
    } else if (passo == 0) {
        alert(`Passo inválido! Considerando PASSO 1`) 
        passo = 1  
    } 
    var base = 0
    while (início <= fim) {
        início = início + passo 
        base += passo
    } 
    contando.innerHTML = `5 ${base}`  
    /* 
    for (início; início <= fim; início += passo) {
        console.log(`${início}`) 
    } */
}