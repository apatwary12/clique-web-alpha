import Image from "next/image";
import Clique from "@/public/images/Clique.png"
import Ellipse436 from "@/public/images/Ellipse-436.png";
import Ellipse437 from "@/public/images/Ellipse-437.png";
import Ellipse438 from "@/public/images/Ellipse-438.png";

export default function LoginGraphic () {
    return(
        <div className="flex h-full w-full">
            <div className="relative left-10 top-5">
                <Image src={Ellipse438} width={200}/>
            </div>
            <div className="z-20 justify-self-center mt-80 shrink">
                <Image src={Clique} width={400}/>
            </div>
            <div className="absolute right-0 bottom-36 z-10">
                <Image src={Ellipse437} width={250}/>
            </div>
            <div className="absolute bottom-0 right-0">
                <Image src={Ellipse436} width={300}/>
            </div>
        </div>
    )
}