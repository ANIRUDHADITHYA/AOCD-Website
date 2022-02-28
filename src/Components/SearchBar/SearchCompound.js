import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './SearchCompound.css';
import { useState, useEffect } from 'react';
import ShowLess from '../Compounds/ShowLess/ShowLess';
import { Player } from '@lottiefiles/react-lottie-player';


function SearchCompounds() {

const [data, setData] = useState([]);
const [filterNo , setFilter] = useState(0);
const getFilter = (filterId) => {
    setFilter(filterId)
}


const getData=()=>{

    const db = JSON.parse(localStorage.getItem('data'));
    const params = new URLSearchParams(window.location.search);
    const search_key = params.get('q');
    console.log(search_key+"");
    getFilter(0)
    const result = db.filter((item) =>
    item.accession_no.toLowerCase() === (search_key.toLowerCase()) 
    || item.compound_name.toLowerCase() === (search_key.toLowerCase()) 
    || item.pubchem_cid.toLowerCase() === (search_key.toLowerCase()) 
    || item.sci_name.toLowerCase() === (search_key.toLowerCase())
    || item.iupac_name.toLowerCase() === (search_key.toLowerCase())
    || item.canl_smiles.toLowerCase() === (search_key.toLowerCase())
    || item.inchl.toLowerCase() === (search_key.toLowerCase())
    || item.molf.toLowerCase() === (search_key.toLowerCase())
    || item.moa.toLowerCase() === (search_key.toLowerCase())

    || item.accession_no.toLowerCase().includes(search_key.toLowerCase()) 
    || item.compound_name.toLowerCase().includes(search_key.toLowerCase()) 
    || item.pubchem_cid.toLowerCase().includes(search_key.toLowerCase()) 
    || item.sci_name.toLowerCase().includes(search_key.toLowerCase())
    || item.iupac_name.toLowerCase().includes(search_key.toLowerCase())
    || item.canl_smiles.toLowerCase().includes(search_key.toLowerCase())
    || item.inchl.toLowerCase().includes(search_key.toLowerCase())
    || item.molf.toLowerCase().includes(search_key.toLowerCase())
    || item.moa.toLowerCase().includes(search_key.toLowerCase())
    
    );
    console.log(result);
        
    setData(result)

    
}
useEffect(()=>{
    
    getData();


},[])// eslint-disable-line react-hooks/exhaustive-deps

    
	return (
		<div className="compounds">
            <div className="compounds-header">
                <Navbar colors={true}/>
            </div>
            
            <div className='compounds-content'> 
            <div className="title"><h1>Search Results</h1><hr/></div>
            <>
            <div className="data-container">
            
                <div className="compound-container">
                <div>
                {
                    data.length === 0 ? (

                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_buhby0ug.json"
                            style={{width: '25%' }}>
                        </Player>
                    ) :(data && data.length>0 && data.map((item, index)=><ShowLess compound={item} index={item.sno} filter={filterNo}/>))



                }
                </div>
                </div>
            </div>
            </>
            </div>


            
            <Footer />
    </div>
	);
}

export default SearchCompounds;
