import SignUpForm from "@/app/components/signUpForm/SignUpForm";
import SSO from "@/app/components/sso/SSO";
import classNames from "classnames";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"],
    // weight: "300"
})

export default function SignUp () {
    return (
        <div className="flex flex-col items-center">
            <SignUpForm />
            <SSO />
            <p 
                className={
                classNames(
                "text-grey mt-5 font-light", 
                openSans.className)}
            >Already have an account? <span className="font-bold hover:underline hover:text-blue cursor-pointer">Sign in!</span>
            </p>
        </div>
    )
}