var arr = []

function additem() {
    if (localStorage.meuArr) {
        arr = JSON.parse(localStorage.getItem('meuArr'))
    } 

    let novoItem = window.document.querySelector('#v').value
    teste = arr.indexOf(novoItem)
    if(teste == -1) {
        arr.push(novoItem)
        window.document.querySelector('#v').value = ''
        pos = arr.indexOf(novoItem)
        alert(`${pos}`)
        localStorage.meuArr = JSON.stringify(arr)
        alert(`${arr}`)
    } else {
        alert('Já está cadastrado!')
    }
}

function apagar() {
    valorDel = window.document.querySelector('#del').value
    localStorage.removeItem
}