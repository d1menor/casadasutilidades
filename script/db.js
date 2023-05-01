export const user = [];

export class User {
    user = '';
    email = '';
    password = '';

    constructor(){
   
    }

    setUser(user,email,password){
        this.user = user;
        this.email = email;
        this.password = password;
    }

    setInDB(){


        const obj = {
            user: this.user,
            email: this.email,
            password: this.password,
        }
       user.push(obj)
       localStorage.setItem("arrayUser",JSON.stringify(user))
       let value = JSON.parse(localStorage.getItem('arrayUser'))
       console.log(value)
      


    }

    getDB(){
        let value = JSON.parse(localStorage.getItem('arrayUser'))

        return value
    }
}

