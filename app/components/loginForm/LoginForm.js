"use client"
import style from "./loginForm.module.css";
import { useState } from "react";
import { Lato } from "next/font/google";
import classNames from "classnames";

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
})

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
            <div className={style.loginTitleContainer}>
                <span className={classNames(lato.className, style.loginTitle)}>WELCOME!</span>
            </div>
            <div className={style.loginInputContainer}>
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
            </div>
            <div className={style.loginBtnContainer}>
                <button 
                    className={style.loginBtn}
                    // disabled={login}
                    type="submit"
                    // onClick={() => loginWithEmailAndPswd()}
                >
                    SIGN IN!
                </button>
            </div>
        </form>
    )
}

