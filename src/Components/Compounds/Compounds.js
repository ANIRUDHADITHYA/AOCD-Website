import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Compounds.css';
import { useState, useEffect } from 'react';
import ShowLess from "./ShowLess/ShowLess";
import { useParams } from "react-router-dom";


const restEndpoint = "http://aopmdb-backend.herokuapp.com/db/";


function Compounds() {

  const params = useParams();


  const [data, setData] = useState([]);

  const [key, setKey] = useState("");
  const [filterNo , setFilter] = useState( params.id === 'PL' ? 1 : params.id === 'AS' ? 2 : params.id === 'AG' ? 3 : 0);
  const getFilter = (filterId) => {
    setFilter(filterId)
  }
  const getData=()=>{

    fetch(restEndpoint)
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });

    
  }
  useEffect(()=>{
    getData()

    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    setKey(key);

  },[])

    
	return (
		<div className="compounds">
            <div className="compounds-header">
                <Navbar colors={true}/>
            </div>
            
            <div className='compounds-content'> {/*data.data && data.data.length>0 && data.data.map((item)=><p>{item.compound_name}</p>)*/}
              <div className="title"><h1>Compound Details {key}</h1><hr/></div>
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
                    data.data && data.data.length>0 && data.data.map((item, index)=><ShowLess compound={item} index={index} filter={filterNo}/>)
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

export default Compounds;
