import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Compounds.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { click } from "@testing-library/user-event/dist/click";
import CompoundItem from './CompoundItem/PancreaticLipase';
import PancreaticLipase from "./CompoundItem/PancreaticLipase";
const restEndpoint = "http://aopmdb-backend.herokuapp.com/db/";

const callRestApi = async () => {
    const response = await fetch(restEndpoint, {method: "GET", mode:'cors'});
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
};

function Compounds() {

  var url = "http://aopmdb-backend.herokuapp.com/db/";

  const [currentCompound, setCurrentCompound] = useState("");
  
  const [data, setData] = useState([]);
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
  },[])

    
	return (
		<div className="compounds">
            <div className="compounds-header">
                <Navbar colors={true}/>
            </div>
            
            <div className='compounds-content'> {/*data.data && data.data.length>0 && data.data.map((item)=><p>{item.compound_name}</p>)*/}
              <div className="title"><h1>Data Center</h1><hr/></div>
              <>
              <div className="data-container">
                <div className='menubar-container'>
                  <div className="menubar-filter">
                    <h3>Pancreatic Lipase</h3>
                  </div>
                  <div className="menubar-filter">
                    <h3>Appetite Suppression</h3>
                  </div>
                  <div className="menubar-filter">
                    <h3>Adipogenesis</h3>
                  </div>
                </div>
                <div className="compound-container">
                  <div>
                  {
                    data.data && data.data.length>0 && data.data.map((item, index)=><PancreaticLipase compound={item} index={index}/>)
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
