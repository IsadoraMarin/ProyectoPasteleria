const nombre = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')

form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ''
    let entrar = false
    let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.\w{2,3})+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    parrafo.innerHTML = ''
    if(nombre.value.length > 20){
        warnings += 'Maximo 20 caracteres <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El correo electronico no es valido <br>'
        entrar = true
    }
    if(password.value.length < 8){
        warnings += 'Minimo de 8 caracteres <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})