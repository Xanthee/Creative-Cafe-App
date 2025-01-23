import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import cafeTillImg from "../assets/cafePeopleImg.jpeg";

function RegisterPage() { // Managing the values of username, email and password input fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(e) {
        console.log(username)
        e.preventDefault(); // Prevents default form submission behaviour 
        axios.post('http://127.0.0.1:5000/register', { // Sending post request to link with the user data
            username: username,
            email: email,
            password: password,
        },
            { withCredentials: true } // Include cookies
        )
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
                    <form className="flex flex-col w-auto" onSubmit={registerUser}>
                        <input type="name" placeholder="*Enter your name" className="mb-6 p-2"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="email" placeholder="*Enter your email" className="mb-6 p-2"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="*Enter password" className="p-2"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button className="text-left font-bold text-3xl mt-12 mb-12 left-nav-link text-[#DAE9DE]">Sign up</button>
                        <div className="text-xl font-semibold text-[#DAE9DE]">
                            ALREADY A MEMBER? <Link to={'/login'} className="text-2xl font-bold underline text-[#DAE9DE]">LOGIN</Link>
                        </div>
                    </form>
                </div>
                <img src={cafeTillImg} width={500} height={250} className=" "/> 
            </div>
        </div>
    );
}

export default RegisterPage;
