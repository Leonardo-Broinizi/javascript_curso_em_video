function formatarMoeda(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function troca_preco() {
    let p_ant_str = prompt('Qual era o preço anterior do produto?')
    let p_ant_int = parseInt(p_ant_str)
    p_ant_str = formatarMoeda(p_ant_int)

    let p_atu_str = prompt('Qual é o preço atual do produto?')
    
    let p_atu_int = parseInt(p_atu_str)
    p_atu_str = formatarMoeda(p_atu_str)

    let entrada = document.getElementById('entrada')

    entrada.innerHTML = `<h2>Analisando os valores informados</h2><br>`
    if(p_ant_int == p_atu_int) {
        entrada.innerHTML += `<p>O valor do produto não teve alteração.</p>`
    } else if(p_ant_int > p_atu_int) {
    entrada.innerHTML += `<p>O produto custava ${p_ant_str} e agora custa ${p_atu_str}.</p><br><p>Hoje o produto está mais barato.</p>`
    } else if(p_ant_int < p_atu_int) {
        entrada.innerHTML += `<p>O produto custava ${p_ant_str} e agora custa ${p_atu_str}.</p><br><p>Hoje o produto está mais caro.</p>`
    }
}