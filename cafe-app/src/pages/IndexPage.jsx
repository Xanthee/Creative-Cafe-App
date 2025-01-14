import { Link } from "react-router-dom"
import React from 'react';
import coffeeMachineImg from '../assets/coffeeMachine.png';
import hazelnutBanner from '../assets/hazelnutBanner.png';
import cafeImg from '../assets/cafeInteriorImg.jpeg';
import oldCafeImg from '../assets/vintageCafeImg.jpeg';
import ReviewSlider from '../components/ReviewSlider.jsx';
import Tabs from '../components/Tabs.jsx';
import "./IndexPage.css";
import "../index.css";

export default function IndexPage() {
    return (

    <div className="flex flex-col w-auto h-auto bg-[#dbd6ce]">

        <div className="w-full h-screen">
            <img src={hazelnutBanner} alt="Coffee Machine Image" className="absolute top-0 left-0 w-full h-full object-cover z-10"/> 
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>
            <h1 className="absolute top-80 left-0 ml-10 w-1/2 h-full text-white font-bold text-6xl leading-normal z-30">OUR NEW HAZELNUT RANGE FOR THIS SEASON</h1>
            <Link to={'/menu'} className="menu-link absolute top-2/3 left-0 ml-10 text-5xl font-bold text-center text-white border border-white border-4 z-40">2025 MENU</Link>
        </div>


        <div className="relative z-20 -mt-16">
            <div className="relative z-20 flex justify-center mt-40 mb-20">
                <h1 className="text-4xl font-bold underline decoration-4 underline-offset-4">EXPLORE</h1>
            </div>
            
            <div className="flex flex-row justify-center h-[34rem]" >
                <div className="relative m-4 w-3/12 h-full bg-cover bg-center" style={{ backgroundImage: `url(${coffeeMachineImg})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
                        <h1 className="fmt-12 mb-4 font-semibold text-4xl text-white leading-snug">OUR NEW SEASONAL ROBUSTA COFFEE HAS ARRIVED</h1>
                        <Link to={'/menu'} className="left-nav-link font-bold text-2xl text-white">LEARN MORE</Link>
                    </div>
                </div>

                <div className="relative m-4 w-3/12 h-full bg-cover bg-center" style={{ backgroundImage: `url(${cafeImg})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
                        <h1 className="fmt-12 mb-4 font-semibold text-4xl text-white leading-snug">PLANT BASED PERFECTION</h1>
                        <Link to={'/menu'} className="left-nav-link font-bold text-2xl text-white">LEARN MORE</Link>
                    </div>             
                </div>

                <div className="relative m-4 w-3/12 h-full bg-cover bg-center" style={{ backgroundImage: `url(${oldCafeImg})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
                        <h1 className="fmt-12 mb-4 font-semibold text-4xl text-white leading-snug">LEARN ABOUT OUR HISTORY AND WHO WE ARE</h1>
                        <Link to={'/menu'} className="left-nav-link font-bold text-2xl text-white">LEARN MORE</Link>
                    </div>             
                </div>
            </div>

            <Tabs/>
            <ReviewSlider/>

        </div>

        
    </div>

    );
}