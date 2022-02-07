import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Compounds.css';

function Compounds() {
	return (
		<div className="compounds">
            <div className="downloads-header">
                <Navbar />
                <div className='downloads-heading'>
                    <h1>Compounds</h1>
                </div>
            </div>
            <div className='downloads-content'></div>
            <Footer />
        </div>
	);
}

export default Compounds;
