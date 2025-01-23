import { Link } from "react-router-dom";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'; // Imported icons

export default function Footer() {
    return (
        <footer className="w-full p-5 bg-[#171512] text-white">
            <div className="flex flex-row justify-evenly pt-8">
                <div className="flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-12 -rotate-45">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                    <span className="mt-4 text-left text-[#c1dbce] text-xl hover:text-4xl hover:tracking-widest transition-all duration-300"> Every Bean, Every Brew, Perfected®</span>
                </div>
                <div className="flex flex-col mb-3">
                    <h3 className="font-semibold text-xl">FIND US</h3>
                    <p>LONDON</p>
                    <p>123 example street, London</p>
                    <p>EC1A 1BB, United Kingdom</p>
                    <Link to={'/location'} className="text-white underline pt-3 text-xl font-semibold">See on map</Link>
                </div>
                <div className="flex flex-col mb-3">
                    <h3 className="font-semibold text-xl">MORE</h3>
                    <p>Careers at Luna</p>
                    <p>Student discount</p>
                    <p>Keyworker discount</p>
                    <p>Over 60s discount</p>
                    <h3 className="font-semibold text-xl mt-4">HELP</h3>
                    <p>Take a look at our FAQs</p>
                    <p>Something else? Get in touch.</p>
                </div>
                <div className="flex flex-col mb-3">
                    <h3 className="font-semibold text-xl">CONTACT US</h3>
                    <p>All enquiries: lunacafe@gmail.com</p>
                    <p>PR: luna@emergelimited.co.uk</p>
                    <p>Contact number: +44 07583 330497</p>
                    <h3 className="mt-6 font-semibold text-xl">FOLLOW US</h3>
                    <div className="flex flex-row mt-4">
                        <FontAwesomeIcon className="pr-4" icon={faFacebook} size="2xl" style={{color: "#ffffff",}} />
                        <FontAwesomeIcon className="pr-4" icon={faTwitter} size="2xl" style={{color: "#ffffff",}} />
                        <FontAwesomeIcon className="pr-4" icon={faInstagram} size="2xl" style={{color: "#ffffff",}} />
                        <FontAwesomeIcon icon={faDiscord} size="2xl" style={{color: "#ffffff",}} />
                    </div>
                </div>
            </div>
            <p className="text-center mt-8 text-xl text-[#c1dbce]">© 2024 Luna Cafe. All rights reserved.</p>
        </footer>
    );
}
