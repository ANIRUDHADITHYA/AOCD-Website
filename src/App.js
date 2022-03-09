import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Downloads from "./Components/Downloads/Downloads";
import AboutUsKnowMore from "./Components/AboutUsKnowMore/AboutUsKnowMore";
import ContactUs from "./Components/Footer/Footer";
import Compounds from './Components/Compounds/Compounds';
import ShowSummary from './Components/Compounds/ShowSummary/ShowSummary';
import SearchCompounds from './Components/SearchBar/SearchCompound';
import { useState, useEffect } from 'react';

const restEndpoint = "http://aocd-backend.herokuapp.com/db/";

function App() {

  const [data, setData] = useState([]);

  const getData=()=>{

    fetch(restEndpoint)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);

        localStorage.setItem('data', JSON.stringify(myJson.data));

        setData(myJson);
    });

    
}
console.log(data);
useEffect(()=>{
    getData()
    
},[])

  return (
    <div>
      <Router>
				<Switch>
					<Route exact path="/" component={Home} />
          <Route exact path="/statistics" component={Statistics}/>
          <Route exact path="/downloads" component={Downloads}/>
          <Route exact path="/about-us" component={AboutUsKnowMore}/>
          <Route exact path="/contact-us" component={ContactUs}/>
          <Route exact path="/compounds/:id" component={Compounds}/>
          <Route exact path="/summary/:id" component={ShowSummary}/>
          <Route exact path="/search" component={SearchCompounds}/>
				</Switch>
			</Router>
    </div>
  );
}

export default App;