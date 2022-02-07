import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Downloads from "./Components/Downloads/Downloads";
import AboutUsKnowMore from "./Components/AboutUsKnowMore/AboutUsKnowMore";
import ContactUs from "./Components/Footer/Footer";
import Compounds from './Components/Compounds/Compounds';

function App() {
  return (
    <div>
      <Router>
				<Switch>
					<Route exact path="/" component={Home} />
          <Route exact path="/statistics" component={Statistics}/>
          <Route exact path="/downloads" component={Downloads}/>
          <Route exact path="/about-us" component={AboutUsKnowMore}/>
          <Route exact path="/contact-us" component={ContactUs}/>
          <Route exact path="/compounds" component={Compounds}/>
				</Switch>
			</Router>
    </div>
  );
}

export default App;