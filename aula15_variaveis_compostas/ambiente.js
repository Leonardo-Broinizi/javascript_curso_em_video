let num = [5, 8, 2, 9, 3] 
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do nosso vetor é ${num[0]}`)
console.log(`O último valor do nosso vetor é ${num[num.length - 1]}`)
for (let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
} 