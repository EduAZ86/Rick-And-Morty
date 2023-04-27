import { useState } from "react";
import validation from "./validation.js";
import styles from "./Form.module.css"


const Form = (props) => {

  const {login} = props
  const [ userData, setUserData ] = useState({email:'', password:''})
  
  const [ errors, setErrors] = useState({})

    
const handleChange = (event) => {
  const property = event.target.name
  const value = event.target.value
    //bracket notacion para property porque no sabemos su nombre
  setUserData({...userData, [property]:value})

  setErrors(validation({...userData,[property]: value}))

}
//funcion para que el onSubmit no recargue la pagina y se pierdan los estados
const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData);
}

    return(
      <div className={styles.container}>
        <form className={styles.form} >
          <div>            
            <label className={styles.label} htmlFor='email'>Email</label>
            <input type= 'text'
            className={styles.imput}
            name='email'
            placeholder="Email"
            value={userData.email}            
            onChange={handleChange}
            />
            <p>{errors.email}</p>
          </div>
          <div>
            <label className={styles.label} htmlFor='password'>Password</label>
            <input
            className={styles.imput}
            type= 'text'
            name='password'
            placeholder="*"
            value={userData.password}
            onChange={handleChange}
            />
          </div>
          <button className={styles.button} type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      

    )
}

export default Form  