import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Statistics.css';
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';

const restEndpoint = "http://aopmdb-backend.herokuapp.com/graph/";

function Statistics() {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);
    const [data7, setData7] = useState([]);
    const [data8, setData8] = useState([]);

    const getData1=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData1(myJson.molecular_weight.data)
        
        });
    
        
    }

    const getData2=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData2(myJson.x_log_p3.data)
        
        });
    
        
    }

    const getData3=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData3(myJson.h_bond_donor.data)
        
        });
    
        
    }

    const getData4=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData4(myJson.h_bond_acceptor.data)
        
        });
    
        
    }

    const getData5=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData5(myJson.ld50.data)
        
        });
    
        
    }

    const getData6=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData6(myJson.toxicity.data)
        
        });
    
        
    }

    const getData7=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData7(myJson.class_of_compounds.data)
        
        });
    
        
    }

    const getData8=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData8(myJson.year_of_publication.data)
        
        });
    
        
    }
  
    
    
    useEffect(()=>{
        getData1()

    },[])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        getData2()

    },[])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        getData3()

    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    useEffect(()=>{
        getData4()

    },[])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        getData5()

    },[])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        getData6()

    },[])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        getData7()

    },[])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        getData8()

    },[])// eslint-disable-line react-hooks/exhaustive-deps


	return (
		<div className="statistics">
            <div className="statistics-header">
                <Navbar/>
                <div className='statistics-heading'>
                    <h1>Statistics</h1>
                </div>
            </div>
            <div className='statistics-content'>

            <div className="graph">
                <h2 className="graph-title">Molecular weight Range</h2>
                <Chart
                    chartType="Bar"
                    data={data1}
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">xLog P3</h2>
                <Chart
                    chartType="Bar"
                    data={data2}
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">H-Bond Donor</h2>
                <Chart
                    chartType="Bar"
                    data={data3}
                />
            </div>


            <div className="graph">
                <h2 className="graph-title">H-Bond Acceptor</h2>
                <Chart
                    chartType="Bar"
                    data={data4}
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">LD50</h2>
                <Chart
                    chartType="Bar"
                    data={data5}
                />
            </div>


            <div className="graph">
                <h2 className="graph-title">Toxicity Class</h2>
                <Chart
                    chartType="Bar"
                    data={data6}
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">Class of Compounds</h2>
                <Chart
                    chartType="Bar"
                    data={data7}
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">Year of Publication</h2>
                <Chart
                    chartType="Bar"
                    data={data8}
                />
            </div>
            </div>
            <Footer />
        </div>
	);
}

export default Statistics;
// ["100-200", 25], ["200-300", 41], ["300-400", 39], ["400-500", 30], ["500-600", 14], ["600-700", 18], ["700-800", 6], ["800-900", 3], ["900-1000", 15], ["1000-1100", 4], ["1100-1200", 4], ["1200-1300", 1], ["1400-1500", 1]


