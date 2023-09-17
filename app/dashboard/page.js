"use client"
import { initFirebase } from "@/firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
    initFirebase();

    const auth = getAuth();
    const router = useRouter();
    const[user, loading] = useAuthState(auth);


    if(!user) {
        router.push("/login");
    }
    return (
        <div>
            <h1>HOME SWEET HOME</h1>
            <button 
                className="border p-2 bg-orange"
                onClick={() => {
                    auth.signOut();
                    // signOut();
                }}
            >
                Sign out
            </button>
        </div>
    )
}