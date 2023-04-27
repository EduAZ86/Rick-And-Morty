

const validation = (data)=>{
    let errors ={};
    
    const expRegEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/

    const expRegPassword = /^[a-z0-9_-]{6,18}$/
    
        if (!data.email) {
            errors.email = 'void'
        }
        if ( data.email.length <= 35) {
            errors.email = 'max35'
            
        }
        if( expRegEmail.test(data.email) ){       
            errors.email = 'validEmail';
        }else{     
                errors.email = 'invalidEmail';
        }
 
        if (data.password.length >= 6 && data.password.length <= 10)  {
            errors.password = 'password 6-10'
        } 
        if (expRegPassword.test(data.password)) {
            errors.password = 'passowrd okNum'        
        }   


    return errors;
}

export default validation;

