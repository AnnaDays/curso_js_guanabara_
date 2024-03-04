let num = [5, 8, 2, 9, 3]
// num.push(1)
// num.sort()
// console.log(num)
// console.log(`O vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)

// for(let pos=0; pos<num.length;pos++){
//     console.log(num[pos])
// }

let valores = [8, 1, 7, 4, 2, 9]

// for(let pos=0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //é chamado de percurso pra exibição de vetores em JS
// }

// for(let pos in valores){ //PARA cada posição DENTRO de valores....
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //Versão simplificada
// }

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}
