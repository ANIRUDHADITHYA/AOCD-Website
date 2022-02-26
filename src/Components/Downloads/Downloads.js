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
            <div className='downloads-content'>
                <div className="download_col">
                    <h1>2D Structure</h1>
                    <h3>Download all 2D Compounds Now</h3>
                    <div className="download-format">
                        <a href={"https://aopmdb-backend.herokuapp.com/download_2d_image_png"} download>
                            <h5><i className="fa-solid fa-download"/>PNG</h5>
                        </a>
                        <span><h5></h5></span>
                        <a href={"https://aopmdb-backend.herokuapp.com/download_2d_image_sdf"} download>
                            <h5><i className="fa-solid fa-download"/>SDF</h5>
                        </a> 
                    </div>
                </div>
                <div className="stick"></div>
                <div className="download_col">
                    <h1>3D Structure</h1>
                    <h3>Download all 3D Compounds Now</h3>
                    <div className="download-format">
                        <a href={"https://aopmdb-backend.herokuapp.com/download_3d_image_png"} download>
                            <h5><i className="fa-solid fa-download"/>PNG</h5>
                        </a>
                        <span><h5></h5></span>
                        <a href={"https://aopmdb-backend.herokuapp.com/download_3d_image_sdf"} download>
                            <h5><i className="fa-solid fa-download"/>SDF</h5>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
	);
}

export default Downloads;
