"use client"
import { initFirebase } from "@/firebase/firebaseConfig";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SSO from "../sso/SSO";
import Link from "next/link";
import EmailVerificationCard from "../emailVerificationCard/EmailVerificationCard";
import SlantLoginGraphic from "../slantLoginGraphic/SlantLoginGraphic";

export default function LoginForm () {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const [showEmailVer, setShowEmailVer] = useState(false);

    console.log("PASSWORD: ", password)

    const signOutUser = () => {
        signOut(auth)
        .then(() => {
            router.push("/login");
        })
        .catch((err) => {
            console.log("SIGNOUT ERROR: ", err);
        })
    }

    const loginWithEmailAndPassword = () => {
        setLoginLoading(true);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log("LOGIN RESULT: ", result);
            // router.push("/dashboard");
            signOutUser();
            setShowEmailVer(true);
        })
        .catch(err => {
            console.log("LOGIN ERROR: ", err);

            setLoginLoading(false);
            setShowEmailVer(false);
            setLoginError(err.message);
        })
    }

    return(
        <div className="flex flex-col items-center h-screen lg:absolute w-screen lg:w-6/12">
            <div 
                hidden={showEmailVer}
                className="order-2 lg:order-1">
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
                            disabled={loginLoading}
                            type="submit"
                            onClick={() => loginWithEmailAndPassword()}
                        >
                            SIGN IN!
                        </button>
                    </div>
                    <div className="text-red-500">{loginError}</div>
                </form>
            </div>

            <div hidden={!showEmailVer}>
                <EmailVerificationCard />
            </div>

            <div 
                hidden={showEmailVer}
                className="order-1 lg:order-2">
                <SSO />
            </div>

            <p 
                hidden={showEmailVer}
                className="text-grey mt-5 font-light font-openSans order-3"
            >{`Don't have an account yet?`} <Link href="/signup" className="font-bold hover:underline hover:text-blue cursor-pointer">Sign up!</Link>
            </p>

            <div className="text-red-500">{loginError}</div>

            <div 
                className="block order-4 w-screen lg:hidden">
                <SlantLoginGraphic />
            </div>

        </div>
    )
}

