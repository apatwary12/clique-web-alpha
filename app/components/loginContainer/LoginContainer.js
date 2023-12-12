import LoginForm from "@/app/components/loginForm/LoginForm";
import SSO from "@/app/components/sso/SSO";
import Link from "next/link";
import SlantLoginGraphic from "../slantLoginGraphic/SlantLoginGraphic";

export default function LoginContainer() {
    return (
        <div className="flex flex-col items-center h-screen lg:absolute w-screen lg:w-6/12">
            <div className="">
                <LoginForm />
            </div>
            <p 
                className="text-grey mt-5 font-light font-openSans order-3"
            >{`Don't have an account yet?`} <Link href="/signup" className="font-bold hover:underline hover:text-blue cursor-pointer">Sign up!</Link>
            </p>
            <div className="block order-4 w-screen lg:hidden">
                <SlantLoginGraphic />
            </div>
        </div>
    )
}