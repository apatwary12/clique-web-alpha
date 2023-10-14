import LoginContainer from "@/app/components/loginContainer/LoginContainer";
import SignupContainer from "@/app/components/signupContainer/SignupContainer";
import LoginGraphicContainer from "@/app/components/loginGraphicContainer/LoginGraphicContainer";
import { initFirebase } from "@/firebase/firebaseConfig";

export default function Home() {
  initFirebase();
  
  return (
    <main className="flex">
      <div className="w-6/12">
        <LoginContainer />
      </div>
      <div className="w-6/12">
        <LoginGraphicContainer />
      </div>
    </main>
  )
}