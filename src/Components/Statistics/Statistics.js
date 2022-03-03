import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Statistics.css';
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';

const restEndpoint = "http://aopmdb-backend.herokuapp.com/graph/";

function Statistics() {

    const [data, setData] = useState([]);

    const getData=()=>{

        fetch(restEndpoint)
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson.molecular_weight.data)
        
        });
    
        
    }
    
    
    useEffect(()=>{
        getData()

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

            <Chart
                chartType="Bar"
                data={data}
                options={{
                    chart: {
                        title: "Moleculae weight of compounds",
                    },
                }}
            />

<Chart
                chartType="Bar"
                data={data}
                options={{
                    chart: {
                        title: "Moleculae weight of compounds",
                    },
                }}
            />

<Chart
                chartType="Bar"
                data={data}
                options={{
                    chart: {
                        title: "Moleculae weight of compounds",
                    },
                }}
            />

<Chart
                chartType="Bar"
                data={data}
                options={{
                    chart: {
                        title: "Moleculae weight of compounds",
                    },
                }}
            />
            </div>
            <Footer />
        </div>
	);
}

export default Statistics;
// ["100-200", 25], ["200-300", 41], ["300-400", 39], ["400-500", 30], ["500-600", 14], ["600-700", 18], ["700-800", 6], ["800-900", 3], ["900-1000", 15], ["1000-1100", 4], ["1100-1200", 4], ["1200-1300", 1], ["1400-1500", 1]


