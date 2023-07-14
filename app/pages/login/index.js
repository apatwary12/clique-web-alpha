import LoginForm from "@/app/components/loginForm/LoginForm";
import style from "./login.module.css";
import SSO from "@/app/components/sso/SSO";

export default function Login() {
    return (
        <div className={style.loginContainer}>
            <LoginForm />
            <SSO />
        </div>
    )
}