import '../App.css';
import React from "react";
import HomePage from "../components/HomePage/HomePage";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Card/Cards";

function Home() {
    return (
        <div className='homepage-container'>
            <HomePage/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home;