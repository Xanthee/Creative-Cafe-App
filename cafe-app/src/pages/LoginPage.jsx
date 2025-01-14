import { Link } from "react-router-dom"

export default function LoginPage(){
    return (
        <div className="m-12">
            <div className="flex flex-col">
                <span className="font-bold text-2xl pb-4">Sign in</span>
                <span className="text-sm text-slate-500 pb-4">Required fields are marked with an asterisk*</span>
            </div>
            <form className="flex flex-col ">
                <input type="email" placeholder="*Enter your email" className="mb-6"/>
                <input type="password" placeholder="*Enter password"/>
                <button className=" w-24 font-bold text-l m-2 mt-10 p-3 bg-black text-white border border-black rounded-full">Login</button>
                <div className="">  
                    Don't have an account yet? <Link to={'/register'} className="font-bold underline">Register</Link>
                </div>
            </form>
        </div>
    );
}
