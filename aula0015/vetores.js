let num = [1, 3 , 5 , 7, 4, 9]
/*
for(let pos = 0; pos <num.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}