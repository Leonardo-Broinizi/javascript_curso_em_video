function soma(n1=0, n2=0) { // Interessante: se eu não mandar um dos parâmetros, ele considerará o que eu colocar após o sinar de atribuição (nesse caso, o valor 0).
    return n1 + n2
}

console.log(soma(5, 6))