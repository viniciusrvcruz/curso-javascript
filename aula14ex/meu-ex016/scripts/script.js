function clicar() {
    var inicio = Number(window.document.getElementById('inicio').value)
    var fim = Number(window.document.getElementById('fim').value)
    var passo = Number(window.document.getElementById('passo').value)
    var res = window.document.querySelector('div#resultado')

    res.innerHTML = `Contando:`

    if(passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c = c + 1) {
                res.innerHTML += `${c}`
                res.innerHTML += `&#x1F449`
            }
            res.innerHTML += `&#x1F3C1`
        } else if (inicio > fim) {
            for (var c = inicio; c >= fim; c = c - 1) {
                res.innerHTML += `${c}`
                res.innerHTML += `&#x1F449`
            }
            res.innerHTML += `&#x1F3C1`
        }
    } else if (inicio < fim) {
        for (var c = inicio; c <= fim; c = c + passo) {
            res.innerHTML += `${c}`
            res.innerHTML += `&#x1F449`
        }
        res.innerHTML += `&#x1F3C1`
    } else if (inicio > fim) {
        for (var c = inicio; c >= fim; c = c - passo) {
            res.innerHTML += `${c}`
            res.innerHTML += `&#x1F449`
        }
        res.innerHTML += `&#x1F3C1`
    }
}