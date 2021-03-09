let email = 'patilvilas97@gmail.com'
let password = '74546845'
    if((email.includes('@gmail.com')) || (email.includes('@yahoo.com'))){
        console.log("The Email is Valid");
    }else{
        console.log("Invalid Email");
    }

    if(password.length>=6){
        if(password.includes(123456) == false){
            console.log("The Password is Valid");
        }
        else{
            console.log("Invalid Password")
        }
    }else{
        console.log("Invalid Password")
    }

