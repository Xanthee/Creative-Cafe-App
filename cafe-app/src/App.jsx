import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BookPage from "./pages/BookingPage.jsx";
import CoffeePage from "./pages/CoffeePage.jsx";

import Layout from "./Layout";
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:3000"; // Settings a default base URL for Axious HTTP requests

function App() {
  return (
    <Routes> {/* Defining a routing structure */}
      <Route path="/" element={<Layout />}> {/* Creating nested component */}
        <Route index path="/home" element={<IndexPage />}/> {/* Inside the Layout, we have several child routes */}
        <Route path="/menu" element={<MenuPage />} /> 
        <Route path="/book" element={<BookPage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Route>
    </Routes> 
  )
}

export default App
