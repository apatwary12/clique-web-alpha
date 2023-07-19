export default function SignUpForm () {
    return (
        <form className="flex flex-col items-center mt-32">
            <div className="mb-10 text-black">
                <h2 className="font-lato">CREATE AN ACCOUNT!</h2>
            </div>
            <input 
                className="my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="name" 
                placeholder="User Name"
                required />
            <input 
                className="my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="email" 
                placeholder="Email"
                required />
            <input 
                className="my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="phone" 
                placeholder="Phone Number"
                required />
            <input 
                className="my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="password" 
                placeholder="Password"
                required />
            <input 
                className="my-2.5 bg-white2 text-grey text-s w-96 h-12 indent-2.5 p-2 rounded-xl border-2 border-orange font-openSans font-light"
                type="password" 
                placeholder="Confirm Password"
                required />
            <div>
                <button 
                    className="p-2 rounded-xl border-2 px-10 border-orange mt-5 text-black hover:bg-orange hover:text-white2 font-openSans"
                    // disabled={login}
                    type="submit"
                    // onClick={() => loginWithEmailAndPswd()}
                >
                SIGN UP!
                </button>
            </div>
        </form>
    )
}