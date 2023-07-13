import LoginForm from "@/app/components/loginForm/LoginForm";
import style from "./login.module.css";

export default function Login() {
    return (
        <div className={style.loginContainer}>
            <div>
                <LoginForm />
            </div>
        </div>
    )
}