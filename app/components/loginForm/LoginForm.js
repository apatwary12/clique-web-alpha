"use client"
import style from "./loginForm.module.css";
import { useState } from "react";

export default function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log("EMAIL: ", email);
    console.log("PASSWORD: ", password);

    return(
        <form 
            action="submit" 
            className={style.loginFormContainer}
        >
            <span className={style.loginTitle}>WELCOME!</span>
            <input 
                className={style.loginInput} 
                type="email" 
                placeholder="Email, Username, or Phone"
                onChange={e => setEmail(e.target.value)}
            required />
            <input 
                className={style.loginInput} 
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            required />
            <button 
                className={style.loginBtn}
                // disabled={login}
                type="submit"
                // onClick={() => loginWithEmailAndPswd()}
            >
                SIGN IN!
            </button>
        </form>
    )
}