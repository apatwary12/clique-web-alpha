"use client"
import { useState } from "react";

export default function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form 
            action="submit" 
            className= "flex flex-col items-center w-80 mt-48"
        >
            <div className="mb-10 w-52 text-black">
                <h2 className="font-lato">WELCOME!</h2>
            </div>
            <div>
                <input 
                    className="my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                    type="email" 
                    placeholder="Email, Username, or Phone"
                    onChange={e => setEmail(e.target.value)}
                required />
                <input 
                    className="my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                required />
            </div>
            <div>
                <button 
                    className="p-2 rounded-xl border-2 px-10 border-orange mt-5 text-black hover:bg-orange hover:text-white2"
                    // disabled={login}
                    type="submit"
                    // onClick={() => loginWithEmailAndPswd()}
                >
                    <h4 className="font-openSans">SIGN IN!</h4>
                </button>
            </div>
        </form>
    )
}

