import { Link } from "react-router-dom";
import PeopleTalking from '../assets/Talking.mp4';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import axios from 'axios';
export default function BookingPage() {
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = async () => {
        try {
            // Convert date to ISO format (UTC)
            const formattedDate = startDate.toISOString();

            // Send a POST request to the backend to store the booking
            const response = await axios.post('http://127.0.0.1:5000/booking', { startDate: formattedDate },
                {withCredentials: true}  

            );

            // Handle successful booking (maybe show a confirmation message)
            console.log('Booking successful:', response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="relative flex flex-col w-full h-full bg-[#4a4342]">
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
            <div className="flex flex-col w-auto h-auto ">
                <p className="p-12 text-2xl leading-loose text-white tracking-wider font-extralight text-center">Book a table online and we'll have it ready for you.</p>
                <div className="flex flex-col items-center justify-evenly  w-full bg-[#c1dbce] p-12 h-96">
                    <label className="text-4xl font-light mb-2 letter-spacing">Select Date and Time</label>
                    <DatePicker
                        className="w-64 p-2 border-2 border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
                        placeholder="Select a"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                    <button
                        className="right-nav-link font-bold text-xl text-black mr-4 px-3 py-1 border border-white border-2 w-52 h-12 flex flex-col items-center justify-center"
                        onClick={handleSubmit}
                    >
                        Reserve Table
                    </button>
                </div>
            </div>
        </div>
    );
}
