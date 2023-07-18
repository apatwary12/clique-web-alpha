import LoginForm from "@/app/components/loginForm/LoginForm";
import SSO from "@/app/components/sso/SSO";
import classNames from "classnames";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
    subsets: ["latin"],
})

export default function Login() {
    return (
        <div className="flex flex-col items-center">
            <LoginForm />
            <SSO />
            <p 
                className={
                classNames(
                "text-grey mt-5 font-light", 
                openSans.className)}
            >{`Don't have an account yet?`} <span className="font-bold hover:underline hover:text-blue cursor-pointer">Sign up!</span>
            </p>
        </div>
    )
}