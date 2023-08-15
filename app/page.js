import LoginContainer from "@/app/components/loginContainer/LoginContainer";
import LoginGraphicContainer from "./components/loginGraphicContainer/LoginGraphicContainer";

export default function Home() {
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
