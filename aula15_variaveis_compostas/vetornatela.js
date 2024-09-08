let valores = [8, 1, 7, 4, 2, 9]

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`O valor 2 está na posição ${valores.indexOf(2)}`)
/*for (let pos = 0; pos < valores.length; pos ++) { // Código tradicional do percurso de vetor.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
