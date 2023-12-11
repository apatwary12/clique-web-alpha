"use client"
import { initFirebase } from "@/firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
	initFirebase();

	const auth = getAuth();
	const router = useRouter();
	const [user, loading] = useAuthState(auth);
    const[signedIn, setSignedIn] = useState(true);
    const[error, setError] = useState("");

    useEffect(() => {
        // Handle user and loading page
        const handleUser = () => {
			const emailVerified = user?.emailVerified ?? false;
			if(loading) {
				return (<div>Loading...</div>);
			}
            if(!emailVerified) {
				router.push("/verify");
			}
			if(!user) {
				router.push('/login');
			}
        }
    
        handleUser();
    })

    const signOutUser = () => {
        signOut(auth)
        .then(() => {
            setSignedIn(false)
            router.push("/login");
        })
        .catch((error) => {
            console.log("SIGNOUT ERROR: ", error)
            setError("An error has occured. Please try again.")
        })
    }

    return (
        <div>
            <h1>HOME SWEET HOME</h1>
            <button
                disabled={!signedIn} 
                className="border p-2 bg-orange"
                onClick={() => {
                    signOutUser();
                }}
            >
                Sign out
            </button>
            <div className="text-red-500">{error}</div>
        </div>
    )
}