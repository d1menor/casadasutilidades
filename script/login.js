import { User, user } from "./db.js"
let body = document.querySelector('body');
let formLogin = document.querySelector('#form-login')
let resulT = document.querySelector('.result>p')

var username = document.getElementById("username");
var password = document.getElementById("password");

let cad = document.querySelector('#cadastro')
let log = document.querySelector('#logout')
let userCadastrado ;
const usuario = new User();

log.addEventListener('click', () =>{
  userCadastrado =  usuario.getDB()
  console.log(userCadastrado)

    let resultUser = userCadastrado.find(e => {
      if(e.user == username.value && e.password == password.value){
        return true
      }
     
    })

    console.log(resultUser)
    if(resultUser == undefined || resultUser == null){
      resulT.textContent = 'Credenciais Incorretas'
      resulT.style.backgroundColor = '#ee685c'
      resulT.style.animationName = 'identifier'
      resulT.style.duration = '.6s'
      
      resulT.style.opacity = '1'
      setTimeout(() => {
        resulT.style.opacity = '.0'

      },2500)
    }else{
      authLogin(resultUser.user,resultUser.password)
    }


})

cad.addEventListener('click',() => {
    window.location.href = "cadastro.html";
})

function authLogin(user,pas){
  if (username.value == user && password.value == pas) {
  
            resulT.textContent = 'Login realizado com Sucesso!'
            resulT.style.backgroundColor = '#4dae40'
            resulT.style.animationName = 'identifier'
            resulT.style.duration = '.6s'
            
            resulT.style.opacity = '1'
            setTimeout(() => {
              resulT.style.opacity = '.0'
      
            },2500)
            
            setTimeout(()=> {
                window.location.href = '../index.html'
            }, 3000)
            return 1
        }else{

        }

    


}

