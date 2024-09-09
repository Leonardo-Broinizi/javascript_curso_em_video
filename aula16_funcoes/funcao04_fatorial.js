/*function fat(b) {
    f = b 
    b = b - 1
    for (b; b > 1; b --) {
        f *= b
    }
    return f
}
f = 0
n = 7
b = fat(n)
console.log(`O fatorial de ${n} é ${f}`)*/

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}


console.log(fatorial(4))


// 5! = 5 x 4 x 3 x 2 x 1 = 120