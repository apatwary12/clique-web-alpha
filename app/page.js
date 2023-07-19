import Image from "next/image";
import Login from "./pages/login";
import SignUp from "./pages/signUp";

export default function Home() {
  return (
    <main className="flex">
      <div className="w-6/12">
        <Login />
      </div>
      <div className="w-6/12">
        <SignUp />
      </div>
    </main>
  )
}
