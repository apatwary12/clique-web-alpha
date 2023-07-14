import LoginForm from "@/app/components/loginForm/LoginForm";
import style from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
    const oneClickIcons = [faApple, faFacebook, faGoogle]
    return (
        <div className={style.loginContainer}>
            <div>
                <LoginForm />
            </div>
            <div className={style.oneClickIconContainer}>
                {oneClickIcons.map((icon) => {
                    return(
                        <FontAwesomeIcon className={style.oneClickIcon} icon={icon} />
                    )
                })}
            </div>
        </div>
    )
}