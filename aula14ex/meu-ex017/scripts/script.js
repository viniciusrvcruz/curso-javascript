function clicar() {
    var numero = window.document.getElementById('numero')
    var cont
    var valor
    var tab = window.document.getElementById('text')

    tab.innerHTML = ''

    if(numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        for(cont = 0; cont < 11; cont++) {
            num = Number(numero.value)
            valor = num * cont
            tab.innerHTML += `${num}x${cont}=${valor}\n`
        }
    }
}