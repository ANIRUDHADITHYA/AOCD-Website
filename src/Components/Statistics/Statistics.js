import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Statistics.css';
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';

const restEndpoint = "http://aopmdb-backend.herokuapp.com/db/";

function Statistics() {

    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([]);

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

    function getChartData(){

        const chartItems = [["Molecular weight Range", "No. of compounds"], ["100-200", 0], ["200-300", 0], ["300-400", 0], ["400-500", 0], ["500-600", 0], ["600-700", 0], ["700-800", 0], ["800-900", 0], ["900-1000", 0], ["1000-1100", 0], ["1100-1200", 0], ["1200-1300", 0], ["1300-1400", 0],  ["1400-1500", 0]];
        const Items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        
        
        data.data && data.data.length>0 && data.data.map((item, index)=>
        Items[getRangeMW(item.mw)-1] += 1)
        
        
        console.log(Items);

        chartItems[1][1] = Items[0]; 
        chartItems[2][1] = Items[1]; 
        chartItems[3][1] = Items[2]; 
        chartItems[4][1] = Items[3]; 
        chartItems[5][1] = Items[4]; 
        chartItems[6][1] = Items[5]; 
        chartItems[7][1] = Items[6]; 
        chartItems[8][1] = Items[7]; 
        chartItems[9][1] = Items[8]; 
        chartItems[10][1] = Items[9]; 
        chartItems[11][1] = Items[10]; 
        chartItems[12][1] = Items[11]; 
        chartItems[13][1] = Items[12]; 
        chartItems[14][1] = Items[13]; 

        console.log('====================================');
        console.log(chartItems);
        console.log('====================================');
    
        
        setChartData(chartItems);
        
    }

    function getRangeMW(mw) {
        if (mw >= 100 && mw < 200) {
            return 1;
        } else if (mw >= 100 && mw < 200) {
            return 2;
        } else if (mw >= 200 && mw < 300) {
            return 3;
        } else if (mw >= 300 && mw < 400) {
            return 4;
        } else if (mw >= 400 && mw < 500) {
            return 5;
        } else if (mw >= 500 && mw < 600) {
            return 6;
        } else if (mw >= 600 && mw < 700) {
            return 7;
        } else if (mw >= 700 && mw < 800) {
            return 8;
        } else if (mw >= 800 && mw < 900) {
            return 9;
        } else if (mw >= 900 && mw < 1000) {
            return 10;
        } else if (mw >= 1000 && mw < 1100) {
            return 11;
        } else if (mw >= 1100 && mw < 1200) {
            return 12;
        } else if (mw >= 1200 && mw < 1300) {
            return 13;
        } else if (mw >= 1300 && mw < 1400) {
            return 14;
        } else if (mw >= 1400 && mw < 1500) {
            return 15;
        }
    }

    
    useEffect(()=>{
        getData()
        getChartData()

    })


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
                data={chartData}
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


