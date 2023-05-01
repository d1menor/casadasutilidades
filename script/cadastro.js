import { User } from "./db.js";
let cadastrar = document.querySelector('#cadastrar')
let voltar = document.querySelector('#voltar')
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm-password");
let form = document.querySelector("#form-cadastro")

form.addEventListener('click',(e) => {
    e.preventDefault();
})

const usuario = new User();

cadastrar.addEventListener('click',() => {
    authCad()
    usuario.setUser(username.value,email.value,password.value);
    usuario.setInDB();
    let db = usuario.getDB();

})

voltar.addEventListener('click', () =>{
    window.location.href = '../login.html'
})

function authCad(){
    if (username.value == "" || email.value == "" || password.value == "" || confirm_password.value == "") {
        alert("Preencha todos os campos!");
        return false;
    } else if (password.value !== confirm_password.value) {
        alert("As senhas não coincidem!");
        return false;
    }else{
        return true
    }
}


 






