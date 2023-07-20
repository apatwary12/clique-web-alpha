import Image from "next/image";
import Arrows from "@/public/images/arrows.png"
import LoginGraphic from "../loginGraphic/LoginGraphic";

export default function LoginGraphicContainer () {
    return (
        <div className="bg-pink h-screen">
            <div className="absolute right-[306px] bottom-0">
                <Image src={Arrows} width={750} />
            </div>
            <LoginGraphic />
        </div>
    )
}