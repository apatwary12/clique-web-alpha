import LoginContainer from "@/app/components/loginContainer/LoginContainer";
import SignupContainer from "@/app/components/signupContainer/SignupContainer";
import LoginGraphicContainer from "@/app/components/loginGraphicContainer/LoginGraphicContainer";

export default function Home() {
  return (
    <main className="flex">
      <div className="w-6/12">
        <LoginGraphicContainer />
      </div>
      <div className="w-6/12">
        <SignupContainer />
      </div>
    </main>
  )
}