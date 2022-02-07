import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HomeMainContent from "../MainContent/HomeMainContent";
import AboutUs from '../AboutUs/AboutUs';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';
import Typewriter from 'typewriter-effect';

function Home() {
    const placeholderName="Enter Accession NO/Compound Name/Pubchem ID/Smiles/Inchl/Plant Source";
    
	return (
		<div className="home">
            <div className="home-header">
                <Navbar />
                <div className='home-heading'>
                    <h1>
                        <Typewriter
                        options={{
                            strings: ['Hi, Welcome to AOPMDB', 'Antiobesity Plant Metabolite Database','Get Started Now'],
                            autoStart: true,
                            loop: true,
                            delay:200,
                        }}
                        />
                    </h1>
                    <p>Browse me from today and let Obesity go away</p>
                </div>
                <SearchBar placeholder={placeholderName}/>
                <div className='available-lable'>
                    <div className='lable-container'>
                        <h6><i class="fas fa-atom"></i> 202</h6>
                        <span className="lable-container">|</span>
                        <h6><i class="fas fa-book-reader"></i> 303</h6>
                    </div>
                </div>
            </div>
            <div className='homepage-content'>
                <HomeMainContent />
            </div>
            <div className='about-us'>
                <AboutUs />
            </div>
            <Footer />
        </div>
	);
}

export default Home;
