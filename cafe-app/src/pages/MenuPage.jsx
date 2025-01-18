import React from 'react';
import Menu from '../components/Menu.jsx';

export default function MenuPage() {
    return (
        <div className="flex flex-col w-full h-full bg-[#4a4342]">
            <div className="flex flex-col mt-32 text-[#c1dbce]">
                <h3 className="text-center letter-spacing mb-6 font-bold text-3xl mt-10">HAVE A LOOK AT OUR</h3>
                <h1 className="text-center letter-spacing font-bold text-5xl text-white mb-10">M E N U</h1>
                <Menu />
            </div>
        </div>
    );
}
