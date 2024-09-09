function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) // Aqui a operação retornada será o n vezes o fatorial de n menos um, o que iniciará um loop que só se encerrará quando n for igual a 1 (pela primeira condição da função).
    }
}

console.log(fatorial(7))
/*
Função recursiva é uma função que tem em seu bloco de ação outra chamada para ela mesma. 

Para este exemplo de uma função para calcular fatorial:

A fatorial de um número é o mesmo que o número vezes cada número da ordem decrescente dele até um (ex: 5! = 5 x 4 x 3 x 2 x 1 = 120). Ou, ele vezes a fatoria do número anterior: 5! = 5 x (4! = 24) = 120.


*/