"use client"
import SignUpForm from "@/app/components/signUpForm/SignUpForm";
import SSO from "@/app/components/sso/SSO";
import Link from "next/link";

export default function SignUpContainer () {
    return (
        <div className="flex flex-col items-center h-screen">
            <SignUpForm />
            <p 
                className="text-grey mt-5 font-light font-openSans"
            >Already have an account? <Link href="/login" className="font-bold hover:underline hover:text-blue cursor-pointer">Login!</Link>
            </p>
        </div>
    )
}