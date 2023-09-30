"use client"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SignUpForm () {
    const auth = getAuth();
    const router = useRouter();
    const [signup, setSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // console.log("PASSWORD: ", password);
    // console.log("CONFIRM PASSWORD: ", confirmPassword);

    const signupWithEmailAndPassword = () => {
        if(password !== confirmPassword) setError('Please make sure your passwords match');

        if(error !== '') setError('');

        setSignup(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log("RESULT: ", result)
            router.push('/dashboard');
        })
        .catch((error) => {
            console.log("SIGNUP ERROR ", error);

            if(error.code.includes('auth/weak-password')) {
                setError('Please enter a stronger password.')
            } else if (error.code.includes('auth/email-already-in-use')) {
                setError('Email already in use.')
            } else {
                setError('Unable to register. Please try again later.')
            }

            setSignup(false);
        })
    }

    return (
        <form id="signup" className="flex flex-col items-center mt-32">
            <div className="mb-10 text-black">
                <h2 className="font-lato">CREATE AN ACCOUNT!</h2>
            </div>
            <input 
                className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="name" 
                placeholder="User Name"
                onChange={event => setUsername(event.target.value)}
                required />
            <input 
                className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="email" 
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
                required />
            <input 
                className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="phone" 
                placeholder="Phone Number"
                onChange={event => setPhone(event.target.value)}
                required />
            <input 
                className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="password" 
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
                required />
            <input 
                className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="password" 
                placeholder="Confirm Password"
                onChange={event => setConfirmPassword(event.target.value)}
                required />
            <div>
                <button
                    disabled={signup}
                    className="p-2 rounded-xl border-2 px-10 border-orange mt-5 text-black hover:bg-orange hover:text-white2 font-openSans"
                    // disabled={login}
                    type="submit"
                    onClick={() => signupWithEmailAndPassword()}
                >
                SIGN UP!
                </button>
            </div>
            <div className="text-red-500">{error}</div>
        </form>
    )
}