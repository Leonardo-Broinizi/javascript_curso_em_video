let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false    
    }
}
 
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    } 
}

function adicionar() {
    res.innerHTML = ''
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let novos = document.createElement('option')
        novos.text = `Valor ${num.value} adicionado.`
        lista.appendChild(novos)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()

} 
 
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let maior = 0
        let menor = 0
        let soma = 0
        let média = 0
        for(let c = 0; c < valores.length; c++) {
            if (valores[c] > maior) {
                maior = valores[c]
            }
            if (c == 0 || valores[c] < menor) { 
                menor = valores[c]
            }
            soma += valores[c]
        }
        média = soma / valores.length

        res.innerHTML = `<br>Ao todo, temos ${valores.length} números cadastrados.<br><br>O maior valor informado foi ${maior}.<br><br>O menor valor encontrado foi ${menor}.<br><br>Somando todos os valores, temos ${soma} .<br><br>A média dos valores digitados é ${média.toFixed(2)}.`
    
    }
}