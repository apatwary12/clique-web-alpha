import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./sso.module.css"

export default function SSO () {
    return(
        <div className={style.oneClickIconContainer}>
            <FontAwesomeIcon 
                className={style.oneClickIcon} 
                icon={faApple} 
            />
            <FontAwesomeIcon 
                className={style.oneClickIcon} 
                icon={faFacebook} 
            />
            <FontAwesomeIcon 
                className={style.oneClickIcon} 
                icon={faGoogle} 
            />
        </div>
    )
} 