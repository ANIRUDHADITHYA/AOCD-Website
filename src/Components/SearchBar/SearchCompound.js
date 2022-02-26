import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './SearchCompound.css';
import { useState, useEffect } from 'react';
import ShowLess from '../Compounds/ShowLess/ShowLess';
function SearchCompounds() {
const [data, setData] = useState([]);
const [filterNo , setFilter] = useState(0);
const getFilter = (filterId) => {
    setFilter(filterId)
}
const [key, setKey] = useState("");

const getData=()=>{

    const db = JSON.parse(localStorage.getItem('data'));
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    setKey(key)
    const result = db.filter((item) =>
			item.accession_no.toLowerCase().includes(key.toLowerCase()) 
            || item.compound_name.toLowerCase().includes(key.toLowerCase()) 
            || item.pubchem_cid.toLowerCase().includes(key.toLowerCase()) 
            || item.sci_name.toLowerCase().includes(key.toLowerCase())
            || item.iupac_name.toLowerCase().includes(key.toLowerCase())
            || item.canl_smiles.toLowerCase().includes(key.toLowerCase())
            || item.inchl.toLowerCase().includes(key.toLowerCase())
        
		);
    console.log(result);
    setData(result)

    
}
console.log(key);
useEffect(()=>{
    
    getData();

},[])


    
	return (
		<div className="compounds">
            <div className="compounds-header">
                <Navbar colors={true}/>
            </div>
            
            <div className='compounds-content'> 
            <div className="title"><h1>Compound Details</h1><hr/></div>
            <>
            <div className="data-container">
            <div className='menubar-container'>
                <div className={(filterNo===0)?'menubar-filter-selected' : 'menubar-filter'} onClick={()=>getFilter(0)}>
                    <h3>ALL</h3>
                </div>
                <div className={(filterNo===1)?'menubar-filter-selected' : 'menubar-filter'} onClick={()=>getFilter(1)}>
                    <h3>Pancreatic Lipase</h3>
                </div>
                <div className={(filterNo===2)?'menubar-filter-selected' : 'menubar-filter'} onClick={()=>getFilter(2)}>
                    <h3>Appetite Suppressant</h3>
                </div>
                <div className={(filterNo===3)?'menubar-filter-selected' : 'menubar-filter'} onClick={()=>getFilter(3)}>
                    <h3>Adipogenesis</h3>
                </div>
                </div>
                <div className="compound-container">
                <div>
                {
                    data && data.length>0 && data.map((item, index)=><ShowLess compound={item} index={index} filter={filterNo}/>)
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
