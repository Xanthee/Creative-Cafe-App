import Header from "./Header"; // These components render the header and footer sections of the site
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header /> 
            <div className="flex-1">
                <Outlet /> {/* Placeholder that gets replaced by the matched child route component */}
            </div>
            <Footer />
        </div>
    );
}
