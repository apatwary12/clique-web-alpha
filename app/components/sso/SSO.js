import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SSO () {
    return(
        <div className="flex justify-around w-[200px] mt-[20px]">
            <FontAwesomeIcon 
                className="w-[40px] h-[40px] mt-[20px] text-[color:var(--orange1)]"
                icon={faApple} 
            />
            <FontAwesomeIcon 
                className="w-[40px] h-[40px] mt-[20px] text-[color:var(--orange1)]" 
                icon={faFacebook} 
            />
            <FontAwesomeIcon 
                className="w-[40px] h-[40px] mt-[20px] text-[color:var(--orange1)]"
                icon={faGoogle} 
            />
        </div>
    )
} 