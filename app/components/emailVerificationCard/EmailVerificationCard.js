"use client"

import { initFirebase } from "@/firebase/firebaseConfig";
import { getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";

export default function EmailVerificationCard () {
    initFirebase();
    const auth = getAuth();
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loginLinkLoading, setLoginLinkLoading] = useState(false);
    const [loginLinkError, setLoginLinkError] = useState("");
    const [infoMsg, setInfoMsg] = useState("");
    const [initialLoading, setInitialLoading] = useState(false);
    const[initialError, setInitialError] = useState("");

    useEffect(() => {
        if(user) {
            router.push("/dashboard")
        } else {
            if(isSignInWithEmailLink(auth, window.location.href)) {
                let email = localStorage.getItem("email");

                if(!email) {
                    email = window.prompt("Please provide your email.");
                }

                setInitialLoading(true);
                signInWithEmailLink(auth, localStorage.getItem("email"), window.location.href)
                .then((result) => {
                    console.log("USER RESULT: ", result.user);
                    localStorage.removeItem("email");
                    setInitialLoading(false);
                    setInitialError("");
                    router.push("/dashboard");
                })
                .catch((err) => {
                    setInitialLoading(false);
                    setInitialError(err.message);
                    console.log("INITIAL ERROR: ", initialError);
                    router.push("/login");
                })
            } else {
                console.log("enter email and sign in.")
            }
        }
    }, [user]);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginLinkLoading(true);
        sendSignInLinkToEmail(auth, email, {
            url: "http://localhost:3000/",
            handleCodeInApp: true,
        })
        .then(() => {
            localStorage.setItem("email", email);
            setLoginLinkLoading(false);
            setLoginLinkError("");
            setInfoMsg("We have sent you an email with a link to sign in.");
        })
        .catch(err => {
            setLoginLinkLoading(false);
            setLoginLinkError(err.message);
        })
    }

    return(
        <div>
            {initialLoading?(
                <div>Loading...</div>
            ):(
                <>
                    {initialError!==""?(
                        <div className="text-red-500">{initialError}</div>
                    ):(
                        <>
                            {user?(
                                <div>Please wait...</div>
                            ):(
                                <form 
                                    type="submit"
                                    className= "flex flex-col items-center lg:mt-48"
                                    onSubmit={handleLogin}
                                >
                                    <div className="lg:mb-10 text-black self-start">
                                        <h2 className="font-lato">ENTER EMAIL TO LOGIN</h2>
                                    </div>

                                    <div className="flex flex-col">
                                        <input 
                                            className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-64 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light md:w-96"
                                            type="email" 
                                            placeholder="Email"
                                            onChange={e => setEmail(e.target.value)}
                                        required />
                                    </div>

                                    <div>
                                        <button 
                                            type="submit"
                                            className="p-2 rounded-xl border-2 px-10 border-orange mt-5 text-black hover:bg-orange hover:text-white2 font-openSans"
                                        >
                                            SUBMIT!
                                        </button>
                                    </div>

                                    {loginLinkError!=="" && (
                                        <div className="text-red-500">{loginLinkError}</div>
                                    )}

                                    {infoMsg!=="" && (
                                        <div className="text-emerald-700">{infoMsg}</div>
                                    )}
                                </form>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    )
}