import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Statistics.css';

function Statistics() {
	return (
		<div className="statistics">
            <div className="statistics-header">
                <Navbar/>
                <div className='statistics-heading'>
                    <h1>Statistics</h1>
                </div>
            </div>
            <div className='statistics-content'></div>
            <Footer />
        </div>
	);
}

export default Statistics;
