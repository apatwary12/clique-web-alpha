import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SSO () {
    return(
        <div className="flex justify-around w-52 mt-5">
            <FontAwesomeIcon 
                className="w-10 h-10 mt-5 text-orange"
                icon={faApple} 
            />
            <FontAwesomeIcon 
                className="w-10 h-10 mt-5 text-orange" 
                icon={faFacebook} 
            />
            <FontAwesomeIcon 
                className="w-10 h-10 mt-5 text-orange"
                icon={faGoogle} 
            />
        </div>
    )
} 