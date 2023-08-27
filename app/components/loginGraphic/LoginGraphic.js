import Image from "next/image";
import Clique from "@/public/images/CliqueLogo_KO-01.png";
import CliqueShadow from "@/public/images/CliqueLogo-01.svg"
import EllipseYellow from "@/public/images/Ellipse-Yellow.png";
import EllipseOrange from "@/public/images/Ellipse-Orange.png";
import EllipseWhite from "@/public/images/Ellipse-White.png";

export default function LoginGraphic () {
    return(
        <div className="relative flex h-full w-full">
            <div className="lg:absolute lg:left-10 lg:top-5">
                <Image src={EllipseWhite} width={250} alt="White Ellipse" />
            </div>
            <div className="lg:z-20 lg:flex lg:justify-center lg:items-center lg:shrink lg:w-full lg:h-full">
                <div className="lg:absolute lg:z-20">
                    <Image src={Clique} width={400} alt="Clique Logo" />
                </div>
                <div className="lg:relative lg:top-3 lg:opacity-40">
                    <Image src={CliqueShadow} width={400} alt="Clique Logo Shadow" />
                </div>
            </div>
            <div className="lg:absolute lg:w-88 lg:h-88 lg:right-0 lg:bottom-72 lg:z-10">
                <Image src={EllipseOrange} width={300} alt="Orange Ellipse" />
            </div>
            <div className="lg:absolute lg:bottom-0 lg:right-0">
                <Image src={EllipseYellow} width={400} alt="Yellow Ellipse" />
            </div>
        </div>
    )
}