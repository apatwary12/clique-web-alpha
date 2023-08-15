import Image from "next/image";
import Clique from "@/public/images/CliqueLogo_KO-01.png";
import CliqueShadow from "@/public/images/CliqueLogo-01.svg"
import EllipseYellow from "@/public/images/Ellipse-Yellow.png";
import EllipseOrange from "@/public/images/Ellipse-Orange.png";
import EllipseWhite from "@/public/images/Ellipse-White.png";

export default function LoginGraphic () {
    return(
        <div className="relative flex h-full w-full">
            <div className="relative left-10 top-5">
                <Image src={EllipseWhite} width={250}/>
            </div>
            <div className="z-20 justify-self-center mt-80 shrink">
                <div className="absolute z-10">
                    <Image src={Clique} width={400}/>
                </div>
                <div className="relative top-3 opacity-40">
                    <Image src={CliqueShadow} width={400}/>
                </div>
            </div>
            <div className="absolute w-88 h-88 right-0 bottom-72 z-10 overflow-hidden">
                <Image src={EllipseOrange} width={300}/>
            </div>
            <div className="absolute bottom-0 right-0">
                <Image src={EllipseYellow} width={400}/>
            </div>
        </div>
    )
}