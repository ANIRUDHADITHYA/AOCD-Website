import React from "react";
import './PancreaticLipase.css';
import { useState } from 'react';
import twod from '../../Images/AO002.png';
import threed from '../../Images/AO001.png';


const PancreaticLipase = (props) => {

    
    const [expand, setExpand] = useState(false);

    const viewExpand = (id) =>{setExpand(!expand)};




    return(
        <>
            <div className="PL-table">
                <div className="PL-container">
                    <div className="PL-img">

                    </div>
                    <div className="PL-content">
                        
                        
                        {
                            expand ? (

                                <div>
                                    <div className='compound-name'><h3>Compound Name: {props.compound.compound_name}</h3></div>
                                    <div className='compound-details'><h4>PUBCHEM ID: </h4><p>{props.compound.pubchem_id}</p></div>
                                    <div className='compound-details'><h4>Molecular Formula: </h4><p>{props.compound.molecular_formula}</p></div>
                                    <div className='compound-details'><h4>Mode of Action: </h4><p>{props.compound.mode_of_action}</p></div>
                                    <div className='compound-details'><h4>Origin: </h4><p>{props.compound.plant_source}</p></div>
                                    <div className='compound-details'><h4>Scientific Name: </h4><p>{props.compound.plant_source}</p></div>

                                    <div className='compound-heading'><span><h4>Structural Information</h4></span></div>
                                    <div className='compound-details'><h4>IUPAC Name: </h4><p>{props.compound.iupac_name}</p></div>
                                    <div className='compound-details'><h4>Canonical Smiles: </h4><p>{props.compound.canonical_smiles}</p></div>
                                    <div className='compound-details'><h4>InchI: </h4><p>{props.compound.InchI}</p></div>
                                    <div className="compound-split-container">
                                        <div className="compound-split">
                                            <div className='compound-heading'><span><h4>Predicted Properties</h4></span></div>
                                            <div className='compound-details'><h4>xlogP<sub>3</sub>: </h4><p>{props.compound.xlogP3}</p></div>
                                            <div className='compound-details'><h4>H-Bond Donor: </h4><p>{props.compound.h_bond_donor}</p></div>
                                            <div className='compound-details'><h4>H-Bond Acceptor: </h4><p>{props.compound.h_bond_acceptor}</p></div>
                                            <div className='compound-details'><h4>Molar Refraction: </h4><p>{props.compound.molar_refractivity}</p></div>
                                            <div className='compound-details'><h4>TPSA: </h4><p>{props.compound.TPSA}</p></div>
                                            <div className='compound-details'><h4>No. of rotatable Bonds: </h4><p>{props.compound.no_of_rotatable_bonds}</p></div>
                                            <div className='compound-details'><h4>No. of heavy Atoms: </h4><p>{props.compound.no_of_heavy_atoms}</p></div>
                                            <div className='compound-details'><h4>Lipinski - Drug likeness: </h4><p>{props.compound.Lipinski_drug_likeness}</p></div>
                                            <div className='compound-details'><h4>BBB Permeant: </h4><p>{props.compound.BBB_permeant}</p></div>
                                            <div className='compound-details'><h4>Bioavailability Score: </h4><p>{props.compound.bioavailabilty_score}</p></div>
                                            <div className='compound-heading'><span><h4>Toxicity Predited</h4></span></div>
                                            <div className='compound-details'><h4>LD50 values: </h4><p>{props.compound.LD50_values}</p></div>
                                            <div className='compound-details'><h4>Toxicity Class: </h4><p>{props.compound.toxicity_class}</p></div>


                                            
                                        </div>


                                        <div className="image-container">
                                            <table>
                                                <tr >
                                                    <th className="table-heading">2D-Structure</th>
                                                    <th className="table-heading">3D-Structure</th>
                                                </tr>
                                                <tr>
                                                    <td><img src={twod} alt="2d-structure"></img></td>
                                                    <td><img src={threed} alt="3d-structure"></img></td>
                                                </tr>
                                                <tr className="table-button">
                                                    <td className="dowload-section"><i className="fa-solid fa-download"/> SDF -2D Structure</td>
                                                    <td className="dowload-section"><i className="fa-solid fa-download"/> SDF -3D Structure</td>
                                                </tr>
                                            </table>                                        
                                        </div>
                                        
                                    </div>
                                    <div className='compound-heading'><span><h4>Reference</h4></span></div>
                                    <div className='compound-details'><h4>Reference DOE: </h4><p>NA is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's{/*props.compound.reference_artical*/}</p></div>
                                    <div className='compound-details'><h4>Year of Publication: </h4><p>NA is simply dummy text of the printing and typesetting industry. {/*props.compound.year_pub*/}</p></div>
                                    <div className='compound-details'><h4>Name of Journal: </h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's{/*props.compound.journal_name*/}</p></div>
                                    <div className="compound-footer"><p className='expand' onClick={() => {viewExpand(props.index);}}>less</p></div>
                                </div>
                                
                            
                            ) : (
                                <div>
                                    <div className='compound-name'><h3>Compound Name: {props.compound.compound_name}</h3></div>
                                    <div className='compound-details'><h4>PUBCHEM ID: </h4><p>{props.compound.pubchem_id}</p></div>
                                    <div className='compound-details'><h4>Molecular Formula: </h4><p>{props.compound.molecular_formula}</p></div>
                                    <div className='compound-details'><h4>Mode of Action: </h4><p>{props.compound.mode_of_action}</p></div>
                                    <div className='compound-details'><h4>Source: </h4><p>{props.compound.plant_source}</p></div>
                                    <div className='compound-details'><h4>IUPAC Name: </h4><p>{props.compound.iupac_name}</p></div>
                                    <div className='compound-details'><h4>Canonical Smiles: </h4><p>{props.compound.canonical_smiles}</p></div>
                                    <div className="compound-footer"><p className='expand' onClick={() => {viewExpand(props.index);}}>show more</p></div><br/>
                                </div>
                                

                            )
                        }
                        

                    </div>
                </div>
            </div>
        </>
    )
}


export default PancreaticLipase;
