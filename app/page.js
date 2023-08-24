"use client"
import LoginContainer from "@/app/components/loginContainer/LoginContainer";
import LoginGraphicContainer from "./components/loginGraphicContainer/LoginGraphicContainer";
import { useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState("hidden");
  const [showGraphic, setShowGraphic] = useState("block");

  return (
    <main className="lg:flex">
      <div className={`lg:w-6/12 ${showLogin} lg:block`}>
        <LoginContainer />
      </div>
      <div 
        className={`lg:w-6/12 ${showGraphic} md:w-screen`}
        onClick={() => {
          setShowGraphic("hidden");
          setShowLogin("block")
        }}>
        <LoginGraphicContainer />
      </div>
    </main>
  )
}
