function parimp(n) {
    v = 'ímpar'
    if (n % 2 == 0) {
        v = 'par'
    }
    return v
}

n = 3234
v = parimp(n)
console.log(`O número ${n} é ${v}.`)
