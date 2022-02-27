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
                            strings: ['Hi, Welcome to AOMDB', 'Antiobesity Metabolite Database'],
                            autoStart: true,
                            loop: true,
                            delay:100,
                        }}
                        />
                    </h1>
                    <p>Browse me from today and let Obesity go away</p>
                </div>
                <SearchBar placeholder={placeholderName}/>
                <div className='available-lable'>
                    <div className='lable-container'>
                        <div className="lable-item"><h6>349</h6><p>Compounds</p></div>
                        <div className="lable-item"><h6>349</h6><p>Literature</p></div>
                        <div className="lable-item"><h6>281</h6><p>Plants</p></div>
                        <div className="lable-item"><h6>27</h6><p>Marine</p></div>
                        <div className="lable-item"><h6>13</h6><p>Microbes</p></div>                        
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
