import React from 'react';
import Barista from '../assets/Barista.mp4';
import Ceo from '../assets/Ceo.jpg';
import Deputy from '../assets/Deputy.jpg';
import Banner from '../assets/BaristaBanner.avif';
import Food from '../assets/CafeFood.jpeg';
import FirstCafe from '../assets/FirstCafe.jpeg';
import SecondCafe from '../assets/SecondCafe.jpeg';


export default function AboutPage() {
    return (
        <div className=" relative flex flex-col w-full h-full bg-[#4a4342]">
            <div className="mt-40 relative w-full h-[50vh]">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={Barista}
                    autoPlay
                    loop
                    muted
                ></video>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center text-white p-4">
                        <p className="text-lg">ABOUT US</p>
                        <h1 className="text-4xl font-bold mb-2 letter-spacing">WE ARE LUNA COFFEE</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-auto h-auto ">
                <p className="p-12 text-2xl leading-loose text-white tracking-wider font-extralight text-center">We're on an ambitious mission to revolutionize the way we experience coffee. As avid coffee enthusiasts, we've come to a profound realization: with the sheer volume of coffee we consume, it’s essential that we indulge in each cup with a clear conscience.</p>
                <div className="flex flex-row justify-evenly w-full bg-[#c1dbce] p-12">
                    <div className="pr-8">
                        <h1 className="text-3xl font-bold mb-1 underline">BRIAN MOYNIHAN</h1>
                        <h1 className="text-l letter-spacing mb-6">FOUNDER & CEO</h1>
                        <p className="mb-4">Brian Moynihan is the visionary founder and CEO of LUNA Coffee. In 2012, with a dream and a passion for coffee, he transformed an old bookstore in Notting Hill into the very first LUNA Coffee shop. Initially a cozy nook for book lovers and coffee enthusiasts alike, LUNA Coffee quickly evolved into a vibrant space known for its serene daytime ambiance and chic evening atmosphere. </p>
                        <p>Over the past decade, LUNA Coffee has emerged as a leading coffee brand in the UK. With fifteen locations across London, a thriving online business serving an ever-growing customer base worldwide, and LUNA Coffee beans, cold brews, and coffee capsules now available in most major UK grocery stores, the brand's footprint is unmistakable. LUNA Coffee is also the exclusive coffee provider for The Savoy Hotel, and collaborates with industry giants like Minor Figures and BrewDog to deliver exceptional coffee experiences.</p>
                    </div>
                    <img src={Ceo} width={500} height={500} className=" "/> 
                </div>
                <div className="flex flex-row justify-evenly w-full p-12 mt-8">
                    <img src={Deputy} width={500} height={500} className=" "/> 
                    <div className="pl-8 text-white">
                        <h1 className="text-3xl font-bold mb-1 underline">JAMES HARDING</h1>
                        <h1 className="text-l letter-spacing mb-6">DEPUTY CEO</h1>
                        <p className="mb-4">James Harding is the dynamic Deputy CEO of LUNA Coffee. Joining forces with Brian Moynihan in 2013, James brought a wealth of experience and a strategic vision to the team. Together, they transformed a quaint bookstore in Notting Hill into the first LUNA Coffee location, known for its warm, inviting atmosphere and seamless blend of daytime tranquility and nighttime vibrancy.</p>
                        <p>With a decade of dedicated leadership, James has played an instrumental role in LUNA Coffee's rise as a premier coffee brand in the UK. He has been pivotal in expanding the company's footprint to fifteen locations across London and establishing a robust online presence that caters to a global audience. Under his guidance, LUNA Coffee's signature beans, cold brews, and coffee capsules have become household staples, available in major grocery stores nationwide.</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 relative w-full h-[50vh]">
                <img src={Banner} className="absolute inset-0 w-full h-full object-cover" ></img>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center text-white p-4">
                        <p className="text-lg">OUR HISTORY</p>
                        <h1 className="text-4xl font-bold mb-2 letter-spacing">HOW WE GOT HERE</h1>
                    </div>
                </div>
            </div>
            <p className="p-12 text-2xl leading-loose text-white tracking-wider font-extralight text-center">This endeavor marks a significant chapter in our journey as a coffee company. We are dedicated to transforming the way we enjoy our daily brew. As passionate coffee lovers, we've realized the importance of savoring every cup with a clear conscience. Our mission goes beyond just a beverage; it's about fostering a more ethical and sustainable approach to coffee consumption.</p>
            <div className="flex flex-row justify-center h-[34rem] mb-24 font-light text-3xl text-white leading-snug" >
                <div className="relative m-4 w-3/12 h-full bg-cover bg-center" style={{ backgroundImage: `url(${FirstCafe})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
                        <h1 className="fmt-12 mb-4 ">2012: The first LUNA cafe in Bristol.</h1>
                    </div>
                </div>
                <div className="relative m-4 w-3/12 h-full bg-cover bg-center" style={{ backgroundImage: `url(${SecondCafe})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
                        <h1 className="fmt-12 mb-4 ">2014: Over 15 cafes across the UK.</h1>
                    </div>             
                </div>
                <div className="relative m-4 w-3/12 h-full bg-cover bg-center" style={{ backgroundImage: `url(${Food})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
                        <h1 className="fmt-12 mb-4">2018: Coffee, Food AND Sweet Treats.</h1>
                    </div>             
                </div>
            </div>
        </div>
    );
}
