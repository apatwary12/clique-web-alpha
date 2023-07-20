import Image from "next/image";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import LoginGraphic from "./components/loginGraphic/LoginGraphic";
import LoginGraphicContainer from "./components/loginGraphicContainer/LoginGraphicContainer";

export default function Home() {
  return (
    <main className="flex">
      <div className="w-6/12">
        <Login />
      </div>
      <div className="w-6/12">
        {/* <SignUp /> */}
        {/* <LoginGraphic /> */}
        <LoginGraphicContainer />
      </div>
    </main>
  )
}
