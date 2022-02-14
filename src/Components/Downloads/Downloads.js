import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Downloads.css';

function Downloads() {
	return (
		<div className="downloads">
            <div className="downloads-header">
            <Navbar/>
                <div className='downloads-heading'>
                    <h1>Downloads</h1>
                </div>
            </div>
            <div className='downloads-content'></div>
            <Footer />
        </div>
	);
}

export default Downloads;
