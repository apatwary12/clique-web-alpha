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
            className= "flex flex-col items-center w-80 mt-48"
        >
            <div className="mb-10 w-52 h-[43px] text-black">
                <h2 className={lato.className}>WELCOME!</h2>
            </div>
            <div>
                <input 
                    className={classNames(
                    "my-2.5 bg-white2 text-grey1 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange",
                    openSans.className)} 
                    type="email" 
                    placeholder="Email, Username, or Phone"
                    onChange={e => setEmail(e.target.value)}
                required />
            <input 
                className={classNames(
                "my-2.5 bg-white2 text-grey1 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange",
                openSans.className)} 
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            required />
            </div>
            <div>
                <button 
                    className={classNames(
                        "p-2 rounded-xl border-2 border-orange mt-5 w-48 text-black hover:bg-orange hover:text-white2",
                        openSansBold.className)}
                    // disabled={login}
                    type="submit"
                    // onClick={() => loginWithEmailAndPswd()}
                >
                    <h3>SIGN IN!</h3>
                </button>
            </div>
        </form>
    )
}

