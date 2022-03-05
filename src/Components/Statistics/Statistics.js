import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Statistics.css';
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';

const restEndpoint = "http://aopmdb-backend.herokuapp.com/graph/";

function Statistics() {

    const [data1, setData1] = useState([["Molecular weight Range", "No. of compounds"]]);
    const [data2, setData2] = useState([["Molecular weight Range", "No. of compounds"]]);
    const [data3, setData3] = useState([["Molecular weight Range", "No. of compounds"]]);
    const [data4, setData4] = useState([["Molecular weight Range", "No. of compounds"]]);
    const [data5, setData5] = useState([["Molecular weight Range", "No. of compounds"]]);
    const [data6, setData6] = useState([["Molecular weight Range", "No. of compounds"]]);
    const [data7, setData7] = useState([["Molecular weight Range", "No. of compounds"]]);
    const [data8, setData8] = useState([["Molecular weight Range", "No. of compounds"]]);

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
                    legendToggle
                    width="100%"
                    height="400px"
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">xLog P3</h2>
                <Chart
                    chartType="Bar"
                    data={data2}
                    legendToggle
                    width="100%"
                    height="400px"
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">H-Bond Donor</h2>
                <Chart
                    chartType="Bar"
                    data={data3}
                    legendToggle
                    width="100%"
                    height="400px"
                />
            </div>


            <div className="graph">
                <h2 className="graph-title">H-Bond Acceptor</h2>
                <Chart
                    chartType="Bar"
                    data={data4}
                    legendToggle
                    width="100%"
                    height="400px"
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">LD50 Values</h2>
                <Chart
                    chartType="Bar"
                    data={data5}
                    legendToggle
                    width="100%"
                    height="400px"
                />
            </div>


            <div className="graph">
                <h2 className="graph-title">Toxicity Class</h2>
                <Chart
                    chartType="Bar"
                    data={data6}
                    legendToggle
                    width="100%"
                    height="400px"
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">Class of Compounds</h2>
                <Chart
                    chartType="BarChart"
                    data={data7}
                    legendToggle
                    width="100%"
                    height="900px"
                />
            </div>

            <div className="graph">
                <h2 className="graph-title">Year of Publication</h2>
                <Chart
                    chartType="PieChart"
                    data={data8}
                    legendToggle
                    width="100%"
                    height="400px"
                />
            </div>
            </div>
            <Footer />
        </div>
	);
}

export default Statistics;

