let numero = []

function valor(){
    let num = parseInt(document.getElementById('txtnum').value)
    numero.push(num)
    if(isNaN(num)){
        alert('Adicione um valor!')
    }
    if(num < 1 || num > 100){
        alert('Valor Inválido!')
    } 
    let bloco = document.getElementById('txtres')
    bloco.innerHTML += `Valor ${num} adicionado \n`
}

function final(){
    let divi = document.getElementById('final')
    let bloco = document.getElementById('txtres')
    bloco.innerHTML = ''
}