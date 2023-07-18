import LoginForm from "@/app/components/loginForm/LoginForm";
import SSO from "@/app/components/sso/SSO";

export default function Login() {
    return (
        <div className="flex flex-col items-center">
            <LoginForm />
            <SSO />
            <p 
                className="text-grey mt-5 font-light font-openSans"
            >{`Don't have an account yet?`} <span className="font-bold hover:underline hover:text-blue cursor-pointer">Sign up!</span>
            </p>
        </div>
    )
}