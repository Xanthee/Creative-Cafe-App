import React from 'react';
import Food from '../assets/CafeFood.jpeg';
import Farmer from '../assets/Farmer.jpeg';

import Banner from '../assets/ForestBanner.mp4';


export default function CoffeePage(){
    return (
        <div className=" relative flex flex-col w-full h-full bg-[#4a4342]">
            
            <div className="mt-10 relative w-full h-[65vh]">
                <img src={Food} className="absolute inset-0 w-full h-full object-cover" ></img>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center text-white p-4">
                        <p className="text-lg">YEARS OF CRAFTING</p>
                        <h1 className="text-4xl font-bold mb-2 letter-spacing">LUNA COFFEE</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-auto h-auto ">
                <p className="p-12 text-2xl leading-loose text-white tracking-wider font-extralight text-center">We're on an ambitious mission to revolutionize the way we experience coffee. As avid coffee enthusiasts, we've come to a profound realization: with the sheer volume of coffee we consume, it’s essential that we indulge in each cup with a clear conscience.</p>
                <div className="flex flex-row justify-evenly w-full p-12 mt-8">
                    <img src={Farmer} width={400} height={400}/> 
                    <div className="p-12 flex flex-col justify-center text-white">
                        <h1 className="text-4xl font-bold mb-1">FAIR TRADE; EXCEPTIONAL TASTE</h1>
                        <h1 className="text-2xl font-extralight mb-6">Discover the Difference of Ethically-Sourced, Rich Coffee Beans at LUNA Cafe</h1>
                        <p className="mb-4 text-xl">At LUNA Cafe, we are proud of our commitment to sourcing only the finest beans from fair trade farmers. We believe in fostering strong, ethical relationships with our growers by ensuring they are paid fairly for their hard work and dedication. This partnership not only supports sustainable farming practices but also guarantees that we receive the most intense and rich coffee beans, providing our customers with a truly exceptional coffee experience. By choosing LUNA Cafe, you're not only indulging in quality coffee but also contributing to a more equitable and sustainable coffee industry.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 relative w-full h-[50vh]">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={Banner}
                    autoPlay
                    loop
                    muted
                ></video>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center text-white p-4">
                        <p className="text-lg">OUR HISTORY</p>
                        <h1 className="text-4xl font-bold mb-2 letter-spacing">HOW WE GOT HERE</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-evenly w-full bg-[#c1dbce] p-12">
                    <div className="p-12 text-xl flex flex-col justify-center text-leftr">
                        <p className="mb-4">The journey of coffee, stretching back centuries, is steeped in rich traditions and tales. Originating from the ancient coffee forests of Ethiopia, legend has it that a goat herder named Kaldi first discovered the potential of these beloved beans. By the 15th century, coffee spread to the Arabian Peninsula, cultivating a rich coffee culture that permeated Yemen, Egypt, and the Ottoman Empire. Cafés, or "qahveh khaneh," became vibrant social hubs where conversations flowed as freely as the coffee. Fast forward to the modern day, Luna Café carries on this legacy, offering its patrons a sanctuary to savor fine brews and gather with friends, continuing a tradition centuries in the making. </p>
                        <p>Luna Café is committed not just to great coffee but also to the planet. By sourcing beans from sustainable farms that use eco-friendly practices, they ensure that their coffee cultivation has a minimal environmental footprint. Organic farming methods enrich the soil and maintain biodiversity, while fair trade ensures that farmers receive fair wages, promoting social equity and community development. Luna Café's dedication to sustainability means that every cup of coffee not only delights the taste buds but also contributes to a greener, fairer world. Sip by sip, Luna Café's patrons are helping to support practices that prioritize the health of our environment.</p>
                    </div>
            </div>
            <h1 className="m-12 text-4xl font-bold text-center text-white">BUT WE DONT STOP THERE.</h1>
            <p className="mb-12 pl-12 pr-12  text-2xl leading-loose text-white tracking-wider font-extralight text-center">Our coffee cups are also fully biodegradable, meaning they break down naturally and leave no harmful residues. This approach helps to minimize waste and reduce the environmental footprint of our cafe operations.</p>
        </div>

    );
}
