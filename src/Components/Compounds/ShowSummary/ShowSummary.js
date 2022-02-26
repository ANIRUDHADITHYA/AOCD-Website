import { useState, useEffect } from 'react';
import './ShowSummary.css';
import { useParams } from "react-router-dom";

const restEndpoint = "http://aopmdb-backend.herokuapp.com/db/";


function ShowSummary() {

    const params = useParams();

    const [data, setData] = useState([]);
    const getData=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson.data[params.id]);
            setData(myJson.data[params.id])
        });

        
    }
    useEffect(()=>{
        getData()
    
    
    })





    return(
        <>
        <div className='summary-view'>
            <div className='compount-details-container'>
                <div className='compound-name'><h3>Compound Name: {data.compound_name}</h3></div>
                <div className='compound-details'><h4>Accession No:</h4> <p className='access_id'>{data.accession_no}</p></div>

                <div className='compound-details'><h4>PUBCHEM ID: </h4><p><a rel="noreferrer" href={'https://pubchem.ncbi.nlm.nih.gov/#query='+data.pubchem_cid}>{data.pubchem_cid}</a></p></div>
                <div className='compound-details'><h4>Molecular Formula: </h4><p>{data.molf}</p></div>
                <div className='compound-details'><h4>Molecular Weight: </h4><p>{data.mw}</p></div>
                <div className='compound-details'><h4>Mode of Action: </h4><p>{data.moa}</p></div>
                <div className='compound-details'><h4>Origin: </h4><p>{data.origin}</p></div>
                <div className='compound-details'><h4>Scientific Name: </h4><p>{data.sci_name}</p></div>
                <div className='compound-details'><h4>Class of compounds: </h4><p>{data.class_comp}</p></div>
                <div className='compound-details'><h4>Biological Activity</h4> <p>(IC50 values/ KI )</p><h4>: </h4><p>{data.bio_act}</p></div>

                <div className='compound-heading'><span><h4>Structural Information</h4></span></div>
                <div className='compound-details'><h4>IUPAC Name: </h4><p>{data.iupac_name}</p></div>
                <div className='compound-details'><h4>Canonical Smiles: </h4><p>{data.canl_smiles}</p></div>
                <div className='compound-details'><h4>InchI: </h4><p>{data.inchl}</p></div>

                <div className='compound-heading'><span><h4>Predicted Properties</h4></span></div>
                <div className='compound-details'><h4>xlogP<sub>3</sub>: </h4><p>{data.xlogp3}</p></div>
                <div className='compound-details'><h4>H-Bond Donor: </h4><p>{data.h_bond_d}</p></div>
                <div className='compound-details'><h4>H-Bond Acceptor: </h4><p>{data.h_bond_a}</p></div>
                <div className='compound-details'><h4>Molar Refraction: </h4><p>{data.mol_refa}</p></div>
                <div className='compound-details'><h4>TPSA: </h4><p>{data.tpsa}</p></div>
                <div className='compound-details'><h4>No. of rotatable Bonds: </h4><p>{data.rot_bonds}</p></div>
                <div className='compound-details'><h4>No. of heavy Atoms: </h4><p>{data.heavy_atoms}</p></div>
                <div className='compound-details'><h4>Lipinski - Drug likeness: </h4><p>{data.lipinski}</p></div>
                <div className='compound-details'><h4>BBB Permeant: </h4><p>{data.bbb_per}</p></div>
                <div className='compound-details'><h4>Bioavailability Score: </h4><p>{data.bioavail}</p></div>

                <div className='compound-heading'><span><h4>Toxicity Predited</h4></span></div>
                <div className='compound-details'><h4>LD50 values: </h4><p>{data.ld50_val}</p></div>
                <div className='compound-details'><h4>Toxicity Class: </h4><p>{data.toxicity}</p></div>
                
                <div className='compound-heading'><span><h4>Reference</h4></span></div>
                <div className='compound-details'><h4>Reference Article DOI: </h4><p><a rel="noreferrer" href={'https://dx.doi.org/'+data.ref_doi}>{data.ref_doi}</a></p></div>
                <div className='compound-details'><h4>Year of Publication: </h4><p>{data.yop}</p></div>
                <div className='compound-details'><h4>Name of Journal: </h4><p>{data.jonl_name}</p></div>
            </div>
            <div className="image-container">
                <table>
                    <tr >
                        <th className="table-heading">2D-Structure</th>
                        <th className="table-heading">3D-Structure</th>
                    </tr>
                    <tr>
                        <td><img src={'https://aopmdb-backend.herokuapp.com/static/2D STR/'+data.accession_no+'.png'} alt="2d-structure"></img></td>
                        <td><img src={'https://aopmdb-backend.herokuapp.com/static/3D STR/'+data.accession_no+'.png'} alt="3d-structure"></img></td>
                    </tr>
                    <tr className="table-button">
                        <td className="dowload-section"><i className="fa-solid fa-download"/>
                            <a href={"https://aopmdb-backend.herokuapp.com/static/2D STR/"+data.accession_no+'.sdf'} download>
                                SDF -2D Structure
                            </a> 
                        </td>
                        <td className="dowload-section"><i className="fa-solid fa-download"/>
                            <a href={"https://aopmdb-backend.herokuapp.com/static/3D STR/"+data.accession_no+'.sdf'} download>
                                SDF -3D Structure
                            </a> 
                        </td>
                    </tr>
                </table>                                        
            </div>
        </div>
        </>
    )
}


export default ShowSummary;