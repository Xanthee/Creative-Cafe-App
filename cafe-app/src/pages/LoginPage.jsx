import { Link } from "react-router-dom"
import cafeTillImg from "../assets/cafePeopleImg.jpeg";
import { useState } from "react";
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function loginUser(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/login', {
            email: email,
            password: password,
        }, { withCredentials: true })
            .then(result => console.log("res",result))
            .catch(err => console.log("error",err));
    }
    return (


        <div className="flex flex-col w-full h-full bg-[#24402E]">
            <div className="flex flex-row justify-around ml-24 mt-40 p-20">
                <div className="flex flex-col ">
                    <div className="flex flex-col">
                        <span className="font-bold text-5xl pb-4 underline underline-offset-4 text-[#DAE9DE]">REGISTER</span>
                        <span className="text-xl text-[#DAE9DE] pb-4">Required fields are marked with an asterisk*</span>
                    </div>
                    <div className="flex flex-col">
            </div>
                <form className="flex flex-col " onSubmit={loginUser}>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="*Enter your email" className="mb-6 p-2"/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}placeholder="*Enter password" className="p-2"/>
                    <button className="text-left font-bold text-3xl mt-12 mb-12 left-nav-link text-[#DAE9DE]">Login</button>
                    <div className="text-xl font-semibold text-[#DAE9DE]">  
                        Don't have an account yet? <Link to={'/register'} className="text-2xl font-bold underline text-[#DAE9DE]">Register</Link>
                    </div>
                </form>
            
                </div>
                <img src={cafeTillImg} width={500} height={250} className=" "/> 
            </div>
        </div>        
    );
}
