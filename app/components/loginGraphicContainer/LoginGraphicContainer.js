import Image from "next/image";
import Arrows from "@/public/images/arrows.png"
import LoginGraphic from "../loginGraphic/LoginGraphic";

export default function LoginGraphicContainer () {
    return (
        <div className="bg-pink h-screen hidden lg:block">
            <LoginGraphic />
        </div>
    )
}