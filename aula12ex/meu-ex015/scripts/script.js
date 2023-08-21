function clicar(){
    var p = window.document.querySelector('div>p')
    var ano = window.document.querySelector('input#nas')
    var num = window.document.getElementsByName('sexo')
    var valuem = window.document.getElementsByName('sexo').value = 'Masculino'
    var nas = Number(ano.value)
    
    if (num == valuem) {
        p.innerHTML = 'teste'
    }
}

