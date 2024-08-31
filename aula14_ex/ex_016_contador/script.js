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
    while (início <= fim) { 
        início = início + passo 
    }
    alert(`${início}`) 
    /* 
    for (início; início <= fim; início += passo) {
        console.log(`${início}`) 
    } */
}