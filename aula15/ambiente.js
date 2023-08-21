/*
num[5] = 1 - Acrescenta um número no posição 5 do vetor
num.push(7) - Acrescento um número na ultíma posição do vetor
num.length - conta quantos números tem dentro do vetor
num.sort() - Ordena os números em ordem crescente
*/

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) 
let pos = num.indexOf(8)

if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

