var valores = []
var i = 0
var res = window.document.querySelector('div#descricao')

function adicionar() {
    var num = window.document.getElementById('numero')
    let select = window.document.getElementById('select')
    res.innerHTML = '' 

    if(Number(num.value) == 0 || Number(num.value) > 100) {
        window.alert('Valor inválido')
    } else {
        let n = Number(num.value)
        let add = valores.indexOf(n)
        valores[i] = n
        let item = window.document.createElement('option')
        if(add == -1) {
            item.text = `Valor ${n} adicionado`
            select.appendChild(item)
            i++
        } else {
            window.alert('O número já existe')
        }
        
    }
}

function finalizar() {
    mv = valores.length - 1
    res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados. <br>`

    var a
    var b 
    var aux = 0
    for(a = 0; a < valores.length; a++) {
        for(b = 0; b < valores.length; b++) {
            if(valores[a] < valores[b]) {
                aux = valores[a]
                valores[a] = valores [b]
                valores[b] = aux
            }
        }
    }

    res.innerHTML += `O maior valor informado foi ${valores[mv]}.<br>`
    res.innerHTML += `O menor valor informado foi ${valores[0]}.<br>`
    var soma = 0
    for(var c = 0; c < valores.length; c++) {
        soma = soma + valores[c]
    }
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    var media = soma / valores.length
    res.innerHTML += `A média dos valores digitados é ${media}.`
}
