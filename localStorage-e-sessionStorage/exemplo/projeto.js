const nomeForm = window.document.querySelector('#nome-form')
const welcomeContainer = window.document.querySelector('#welcome')
const logoutBtn = window.document.querySelector('#logout')

function checkUser() {
    const userName = localStorage.getItem('name')

    if(userName) {

        nomeForm.style.display = 'none'
        welcomeContainer.style.display = 'block'

        const userNameElement = window.document.querySelector('#username')
        userNameElement.textContent = userName

    } else {
        nomeForm.style.display = 'block'
        welcomeContainer.style.display = 'none'
    }
}

nomeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameInput = window.document.querySelector('#name')

    localStorage.setItem('name', nameInput.value)

    nameInput.value = ''

    checkUser()
})

logoutBtn.addEventListener('click', () => {

    localStorage.removeItem('name')

    checkUser()
})

// Application start
checkUser()



