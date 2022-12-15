let num = [12, 15, 16]
num[4] = 14
num[3] = 18
num.push(7)
console.log(`Os números dos vetores são:${num} e tem ${num.length} posições`)
console.log(`A posição 0 tem o valor ${num[0]}`)
let pos = num.indexOf(1)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
console.log(`O valor está na posição ${pos}`)
}