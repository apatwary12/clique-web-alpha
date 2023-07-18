import classNames from "classnames"
import { Lato, Open_Sans } from "next/font/google"

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
})

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: "300"
})

const openSansBold = Open_Sans({
    subsets: ["latin"],
    weight: "400"
})

export default function SignUpForm () {
    return (
        <form className="flex flex-col items-center mt-32">
            <div className="mb-10 text-black">
                <h2 className={lato.className}>CREATE AN ACCOUNT!</h2>
            </div>
            <input 
                className={classNames(
                "my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange",
                openSans.className)} 
                type="name" 
                placeholder="User Name"
                required />
            <input 
                className={classNames(
                "my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange",
                openSans.className)} 
                type="email" 
                placeholder="Email"
                required />
            <input 
                className={classNames(
                "my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange",
                openSans.className)} 
                type="phone" 
                placeholder="Phone Number"
                required />
            <input 
                className={classNames(
                "my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange",
                openSans.className)} 
                type="password" 
                placeholder="Password"
                required />
            <input 
                className={classNames(
                "my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange",
                openSans.className)} 
                type="password" 
                placeholder="Confirm Password"
                required />
            <div>
                <button 
                    className={classNames(
                        "p-2 rounded-xl border-2 border-orange mt-5 w-48 text-black hover:bg-orange hover:text-white2",
                        openSansBold.className)}
                    // disabled={login}
                    type="submit"
                    // onClick={() => loginWithEmailAndPswd()}
                >
                    <h3>SIGN UP!</h3>
                </button>
            </div>
        </form>
    )
}