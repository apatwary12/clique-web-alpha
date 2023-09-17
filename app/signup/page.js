"use client"
import LoginContainer from "@/app/components/loginContainer/LoginContainer";
import SignupContainer from "@/app/components/signupContainer/SignupContainer";
import LoginGraphicContainer from "@/app/components/loginGraphicContainer/LoginGraphicContainer";
import { initFirebase } from "@/firebase/firebaseConfig";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Home() {
  initFirebase();
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  // Handle user and loading page
  if(loading) {
    return (<div>Loading...</div>);
  }

  if(!user) {
    router.push('/signup');
  }

  return (
    <main className="flex">
      <div className="w-6/12">
        <LoginGraphicContainer />
      </div>
      <div className="w-6/12">
        <SignupContainer />
      </div>
    </main>
  )
}