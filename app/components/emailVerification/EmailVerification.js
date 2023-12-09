"use client"

import { app } from "@/firebase/firebaseConfig";
import { applyActionCode, getAuth, sendEmailVerification } from "@firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EmailVerification () {
    const auth = getAuth(app);
    const router = useRouter();
    const [signin, setSignin] = useState(false);
    const [error, setError] = useState('');

    const handleResend = (auth, actionCode, continueUrl, lang) => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log("Email verification sent");
        })
        .catch(error => {
            console.log("Email verification error: ", error);
            setError('Unable to send email verification. Please try again later.');
            setSignin(false);
        });
    }

    return (
        <div className="bg-white2 h-screen text-black flex flex-col items-center pt-32">
            <div className="mb-10">
                <h2 className="font-lato">VERIFY YOUR EMAIL</h2>
            </div>
            <div className="mb-20">
                <p className="font-lato font-light text-lg">
                    Please check your email for a verification link.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-lato font-light mb-5">Didn't receive a link? Click the button below to resend a link.</p>
                <button 
                    disabled={signin}
                    className="p-2 rounded-xl border-2 px-10 border-orange mt-5 text-black hover:bg-orange hover:text-white2 font-openSans"
                    onClick={handleResend}
                >
                    RESEND LINK
                </button>
            </div>
            <div className="text-red-500">{error}</div>
        </div>
    )
}