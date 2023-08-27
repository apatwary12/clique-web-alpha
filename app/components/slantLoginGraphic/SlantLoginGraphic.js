import EllipseOrange from "@/public/images/Ellipse-Orange.png";
import EllipseWhite from "@/public/images/Ellipse-White.png";
import Image from "next/image";

export default function SlantLoginGraphic () {
    return (
        <div>
            <div 
                className="absolute bottom-0 left-0 z-20 h-auto w-6/12 md:w-5/12 md:left-20"
            >
                <Image src={EllipseOrange} className="w-full" alt="Orange Ellipse" />
            </div>
            <div className="absolute bottom-16 right-8 w-4/12 z-10 md:w-4/12 md:right-48 md:bottom-0">
                <Image src={EllipseWhite} className="w-full" width={150} alt="White Ellipse" />
            </div>
            <div className="absolute bottom-0 w-screen h-2/5 bg-pink [clip-path:polygon(0%_0%,100%_50%,100%_100%,0%_100%)] md:h-3/5 md:[clip-path:polygon(0%_0%,100%_70%,100%_100%,0%_100%)]">

            </div>
        </div>
    )
}