import './AboutUsKnowMore.css';
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


function AboutUsKnowMore(){
    return(
        <div className='aboutus-know-more'>
            <div className="aboutus-header">
                <Navbar/>
                <div className='aboutus-heading'>
                    <h1>About <span>Us</span></h1>
                </div>
            </div>
            <div className='aboutus-content'>
                <p>
                    AOMDB delivers a comprehensive resource on botanicals isolated from plant source(s) 
                    and its classification. It provides extensive information on physicochemical 
                    descriptors, pharmacokinetic properties, Drug like nature, Computational toxicity prediction, 
                    Lipophilic properties of compounds to support drug discovery. Every compound in AOPMdb has 
                    its own specific mode of action against obesity consisting of more than 100 data fields covering 
                    parameters like Molecular Weight, Molecular Formula, Inchl, Canonical Smiles, IUPAC name, xLogP3, 
                    Number of hydrogen bond donors and acceptors, Molar refractivity, TPSA, Number of rotatable bonds 
                    and Number of heavy atoms, Lipinski’s rule, Bioavailability score, BBB permeant, LD50 values, and 
                    Toxicity Class. The 2D and 3D structure of the compound can be accessed through .Sdf format/.Png 
                    format depending on the relevance.
                </p>
                <br/>
                <p>
                    In this Repository users can retrieve data either by Accession number, Compound search or 
                    through Mode of action. This is available as an open access database wherein public can access 
                    it and download relevant information.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsKnowMore;