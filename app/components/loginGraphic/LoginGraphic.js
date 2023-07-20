import Image from "next/image";
import Clique from "@/public/images/Clique.png"
import Ellipse436 from "@/public/images/Ellipse-436.png";
import Ellipse437 from "@/public/images/Ellipse-437.png";
import Ellipse438 from "@/public/images/Ellipse-438.png";

export default function LoginGraphic () {
    return(
        <div className="">
            <div className="relative top-20 left-20">
                <Image src={Ellipse438} width={250}/>
            </div>
            <div className="absolute top-80 right-60">
                <Image src={Clique} width={500} />
            </div>
            <div className="absolute right-0 bottom-0">
                <Image src={Ellipse436} width={350}/>
            </div>
            <div className="absolute right-0 bottom-36">
                <Image src={Ellipse437} width={300}/>
            </div>
        </div>
    )
}