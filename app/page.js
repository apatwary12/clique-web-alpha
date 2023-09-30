// "use client"
import LoginContainer from "@/app/components/loginContainer/LoginContainer";
import LoginGraphicContainer from "./components/loginGraphicContainer/LoginGraphicContainer";
import { initFirebase } from "@/firebase/firebaseConfig";

export default function Home() {
  // initFirebase();
  return (
    <main className="lg:flex">
      <div className="lg:w-6/12">
        <LoginContainer />
      </div>
      <div className="lg:w-6/12">
        <LoginGraphicContainer />
      </div>
    </main>
  )
}
