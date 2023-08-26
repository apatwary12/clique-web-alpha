"use client"
import { useState } from "react";

export default function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form 
            action="submit" 
            className= "flex flex-col items-center w-80 lg:mt-48"
        >
            <div className="lg:mb-10 w-52 text-black">
                <h2 className="font-lato">WELCOME!</h2>
            </div>
            <div className="flex flex-col">
                <input 
                    className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-64 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light md:w-96"
                    type="email" 
                    placeholder="Email, Username, or Phone"
                    onChange={e => setEmail(e.target.value)}
                required />
                <input 
                    className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-64 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light md:w-96"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                required />
            </div>
            <div>
                <button 
                    className="p-2 rounded-xl border-2 px-10 border-orange mt-5 text-black hover:bg-orange hover:text-white2 font-openSans"
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

