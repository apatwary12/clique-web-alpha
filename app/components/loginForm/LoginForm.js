"use client"
import { useState } from "react";
import { Lato, Open_Sans } from "next/font/google";
import classNames from "classnames";

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
})

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: "300"
})

const openSansBold = Open_Sans({
    subsets: ["latin"],
    weight: "400"
})

export default function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form 
            action="submit" 
            className= "flex flex-col items-center w-[300px] min-w-[200px] mt-[200px]"
        >
            <div className="mb-[40px] w-[199px] h-[43px] text-black text-[36px]">
                <span className={lato.className}>WELCOME!</span>
            </div>
            <div>
                <input 
                    className={classNames(
                    "my-[10px] bg-[color:var(--white2)] text-[color:var(--grey1)] text-[16px] w-[386px] h-[49px] indent-2.5 p-[7px] rounded-[10px] border-[1px] border-[color:var(--orange1)]",
                    openSans.className)} 
                    type="email" 
                    placeholder="Email, Username, or Phone"
                    onChange={e => setEmail(e.target.value)}
                required />
            <input 
                className={classNames(
                "my-[10px] bg-[color:var(--white2)] ext-[color:var(--grey1)] text-[16px] w-[386px] h-[49px] indent-2.5 p-[7px] rounded-[10px] border-[1px] border-[color:var(--orange1)]",
                openSans.className)} 
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            required />
            </div>
            <div>
                <button 
                    className={classNames(
                        "p-[7px] rounded-[10px] border-[1px] border-[color:var(--orange1)] mt-[20px] w-[193px] text-[color:var(--black)] text-[24px] hover:bg-[color:var(--orange1)] hover:text-[color:var(--white1)]",
                        openSansBold.className)}
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

