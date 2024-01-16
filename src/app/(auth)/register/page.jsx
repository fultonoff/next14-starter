import React from 'react'
import styles from "./registerForm.module.css";
import { register } from '@/libs/action';

const RegisterPage = () => {
  return (
    <div className=' w-full max-w-xl p-4 mx-auto bg-blue-900 rounded-md'>

      <form className={styles.form} action={register}>
        <input type="text" placeholder='username' name='username'/>
        <input type="email" placeholder='email' name='email'/>
        <input type="password" placeholder='password' name='password'/>
        <input type="password" placeholder='password again' name='passwordRepeat'/>
        <button>Register</button>
      </form>

    </div>
    
  )
}

export default RegisterPage