function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        let c = 0
        while (c < 11) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}