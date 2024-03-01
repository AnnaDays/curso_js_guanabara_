function tabuada(){
    var tabuada
    var numero = document.getElementById('txtnumber').value
    var resultado = document.getElementById('txttabuada')
    resultado.innerHTML = ''
    if(numero.length === 0){
        window.alert('Por favor, digite um número!')
        return
    }
    for(var c = 0; c <= 10; c++){
        tabuada = numero * c
        resultado.innerHTML += `${numero} X ${c} = ${tabuada}\n`
    }
}