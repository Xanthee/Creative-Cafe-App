import { Link } from "react-router-dom"
import PeopleTalking from '../assets/Talking.mp4';
import Barista from '../assets/Barista.mp4';


export default function BookingsPage(){
    return (
        <div className=" relative flex flex-col w-full h-full bg-[#4a4342]">
            <div className="mt-40 relative w-full h-[50vh]">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={PeopleTalking}
                    autoPlay
                    loop
                    muted
                ></video>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center text-white p-4">
                        <p className="text-lg">BOOK IN ADVANCE</p>
                        <h1 className="text-4xl font-bold mb-2 letter-spacing">TABLE RESERVATION</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1>HELLO</h1>
            </div>
         
        </div>
    );
}
