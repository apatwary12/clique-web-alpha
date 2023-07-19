import SignUpForm from "@/app/components/signUpForm/SignUpForm";
import SSO from "@/app/components/sso/SSO";

export default function SignUp () {
    return (
        <div className="flex flex-col items-center">
            <SignUpForm />
            <SSO />
            <p 
                className="text-grey mt-5 font-light font-openSans"
            >Already have an account? <span className="font-bold hover:underline hover:text-blue cursor-pointer">Sign in!</span>
            </p>
        </div>
    )
}