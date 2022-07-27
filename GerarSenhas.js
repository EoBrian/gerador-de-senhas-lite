//input password
var password = document.getElementById('password')
//input number
var number = document.getElementById('number-choice')
// 1 - cria a lista com todos os caracteres
var Caracteres = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789-_!@#$%&*']

const GerarSenhas = () => {
    let pass_list = []
    for (let i = 0; i < number.value; i++) {
        //randomizar o item da lista e adicionar no valor de input
        let random = Math.floor(Math.random() * 70) //size list
        let choice = Caracteres.map( (e)=> e[random] )
        pass_list += choice
    }
    password.value = pass_list
}
