function formatarMoeda(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function troca_preco() {
    let p_ant_str = prompt('Qual era o preço anterior do produto?').replace(',','.')
    let p_ant_float = parseFloat(p_ant_str)
    p_ant_str = formatarMoeda(p_ant_str)

    let p_atu_str = prompt('Qual é o preço atual do produto?').replace(',','.')
    let p_atu_float = parseFloat(p_atu_str)
    p_atu_str = formatarMoeda(p_atu_str)

    let redução = p_ant_float - p_atu_float
    let aumento = p_atu_float - p_ant_float
    let porcentagem_menos = (redução / p_ant_float) * 100
    let porcentagem_mais = (aumento / p_ant_float) * 100

    let entrada = document.getElementById('entrada')

    entrada.innerHTML = `<h2>Analisando os valores informados</h2>`
    if(p_ant_float == p_atu_float) {
        entrada.innerHTML += `<p>O valor do produto não teve alteração.</p>`
    } else if(p_ant_float > p_atu_float) {
    entrada.innerHTML += `<p>O produto custava ${p_ant_str} e agora custa ${p_atu_str}.</p><p>Hoje o produto está mais barato.</p><p>O preço caiu ${formatarMoeda(redução)} em relação ao preço anterior.</p><p>Uma variação de ${porcentagem_menos.toFixed(2).replace('.',',')}% pra baixo.</p>`
    } else if(p_ant_float < p_atu_float) {
        entrada.innerHTML += `<p>O produto custava ${p_ant_str} e agora custa ${p_atu_str}.</p><p>Hoje o produto está mais caro.</p><p>O preço subiu ${formatarMoeda(aumento)} em relação ao preço anterior.</p><p>Uma variação de ${porcentagem_mais.toFixed(2).replace('.',',')}% pra cima.</p>`
    }
}