import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
    return(
        <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
            <Link to={'/home'} className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-20 -rotate-45">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            </Link>
            <div className="flex p-3 pl-10">
                <Link to={'/menu'} className="left-nav-link mr-4 font-bold text-2xl text-white">MENU</Link>
                <Link to={'/book'} className="left-nav-link mr-4 font-bold text-2xl text-white">BOOK</Link>
                <Link to={'/coffee'} className="left-nav-link mr-4 font-bold text-2xl text-white">OUR COFFEE</Link>
                <Link to={'/about'} className="left-nav-link font-bold text-2xl text-white">ABOUT</Link>
            </div>
            <div className="flex p-3 items-center">
                <Link to={'/location'} className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </Link>
                <Link to={'/register'} className="right-nav-link font-bold text-2xl text-white mr-4 px-3 py-1 border border-white border-2">REGISTER</Link>
                <Link to={'/login'} className="right-nav-link font-bold text-2xl text-white px-3 py-1 border border-white border-2">LOGIN</Link>
            </div>
        </header>
    );
}
