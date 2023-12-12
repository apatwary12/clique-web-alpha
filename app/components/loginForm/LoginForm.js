"use client"
import { initFirebase } from "@/firebase/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SSO from "../sso/SSO";

export default function LoginForm () {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginWithEmailAndPassword = () => {
        setLogin(true);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log("LOGIN RESULT: ", result);
            router.push("/dashboard");
        
        })
        .catch(error => {
            console.log("LOGIN ERROR: ", error);

            if(error.code.includes("auth/invalid-login-credentials")) {
                setError("Username and password do not match");
            }

            if(error.code.includes("auth/invalid-email")) {
                setError("Email has not been created with an account");
            }

            if(error.code.includes("auth/wrong-password")) {
                setError("Password is not correct");
            }

            setLogin(false);
        })
    }
	const signInWithApple = async () => {
		try {
			const appleProvider = new OAuthProvider("apple.com");
			appleProvider.addScope("email");

			await signInWithPopup(auth, appleProvider);

			const user = auth.currentUser;
			console.log("User signed in with Apple:", user);
			router.push("/dashboard");
		} catch (error) {
			console.error("Error signing in with Apple:", error);
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
		}
	};

    return (
      <>
        <form
          action="submit"
          className="flex flex-col items-center w-80 lg:mt-48 order-2 lg:order-1"
        >
          <div className="lg:mb-10 w-52 text-black">
            <h2 className="font-lato">WELCOME!</h2>
          </div>
          <div className="flex flex-col">
            <input
              className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-64 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light md:w-96"
              type="email"
              placeholder="Email, Username, or Phone"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="my-2.5 bg-white2 text-black placeholder-gray-600 text-s w-64 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light md:w-96"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              className="p-2 rounded-xl border-2 px-10 border-orange mt-5 text-black hover:bg-orange hover:text-white2 font-openSans"
              disabled={login}
              type="submit"
              onClick={() => loginWithEmailAndPassword()}
            >
              SIGN IN!
            </button>
          </div>
          <div className="text-red-500">{error}</div>
        </form>
        <SSO appleFunction={signInWithApple} />
      </>
    );
}

