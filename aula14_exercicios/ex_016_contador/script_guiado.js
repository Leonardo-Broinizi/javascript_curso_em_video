function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.lenght == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else { 
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value) 
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if(i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else { 
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

 



    /*


    if (ini.value < fim.value) {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else 
    
    
    
    
    
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
    
    for (início; início <= fim; início += passo) {
        console.log(`${início}`) 
    } */
