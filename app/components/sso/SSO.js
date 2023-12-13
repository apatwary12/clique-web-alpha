import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SSO({ appleFunction }) {
  return (
    <div className="flex justify-around w-full max-w-[250px] mx-auto mt-5 mb-5 order-1 lg:order-2">
      <button
        className="w-10 h-10 mt-5 text-orange"
        onClick={() => appleFunction()}
      >
        <FontAwesomeIcon
          className="w-10 h-10 mt-5 text-orange"
          icon={faApple}
        />
      </button>
      <button
        className="w-10 h-10 mt-5 text-orange"
        onClick={() => console.log("Facebook")}
      >
        <FontAwesomeIcon
          className="w-10 h-10 mt-5 text-orange"
          icon={faFacebook}
        />
      </button>
      <button
        className="w-10 h-10 mt-5 text-orange"
        onClick={() => console.log("Google")}
      >
        <FontAwesomeIcon
          className="w-10 h-10 mt-5 text-orange"
          icon={faGoogle}
        />
      </button>
    </div>
  );
} 