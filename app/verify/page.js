"use client"
import { initFirebase } from "@/firebase/firebaseConfig";
import EmailVerification from "../components/emailVerification/EmailVerification";
import { applyActionCode, getAuth } from "@firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function VerifyEmail() {
  initFirebase();
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const handleVerification = () => {
      auth.onAuthStateChanged(user => {
        if(user?.emailVerified) {
          router.push("/dashboard");
        } else {
          router.push(`/verify?email=${user?.email}`);
        }
      })
    }

    handleVerification();
  }, [])

  return (
    <>
      <EmailVerification />
    </>
  );
}
