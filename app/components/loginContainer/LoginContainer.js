import LoginForm from "@/app/components/loginForm/LoginForm";
import SSO from "@/app/components/sso/SSO";
import Link from "next/link";

export default function LoginContainer() {
    return (
        <div className="flex flex-col items-center h-screen">
            <LoginForm />
            <SSO />
            <p 
                className="text-grey mt-5 font-light font-openSans"
            >{`Don't have an account yet?`} <Link href="/signup" className="font-bold hover:underline hover:text-blue cursor-pointer">Sign up!</Link>
            </p>
        </div>
    )
}