import LoginForm from "@/app/components/loginForm/LoginForm";
import SSO from "@/app/components/sso/SSO";

export default function Login() {
    return (
        <div className="flex flex-col items-center">
            <LoginForm />
            <SSO />
        </div>
    )
}