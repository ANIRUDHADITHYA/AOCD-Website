import './App.css';
import {BrowserRouter,  Routes,  Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Downloads from "./Components/Downloads/Downloads";
import AboutUsKnowMore from "./Components/AboutUsKnowMore/AboutUsKnowMore";
import ContactUs from "./Components/Footer/Footer";
import Compounds from './Components/Compounds/Compounds';
import ShowSummary from './Components/Compounds/ShowSummary/ShowSummary';
import SearchCompounds from './Components/SearchBar/SearchCompound';
import LoginPage from './Components/Authentication/LoginPage';
import AddCompounds from './Components/AddCompounds/AddCompounds';
import RequireAuth from './Components/Authentication/RequireAuth';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import { AuthProvider } from './Components/Authentication/Auth';
import { useEffect } from 'react';
import Axios from 'axios';
import UpdateCompounds from './Components/UpdateCompounds/UpdateCompounds';
function App() {

  useEffect( ()=>{
    Axios.get("http://localhost:5000/getdata").then((response)=>{
      console.log(response.data);
    })
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home/>} />
          <Route exact path="/statistics" element={<Statistics/>}/>
          <Route exact path="/downloads" element={<Downloads/>}/>
          <Route exact path="/about-us" element={<AboutUsKnowMore/>}/>
          <Route exact path="/contact-us" element={<ContactUs/>}/>
          <Route exact path="/compounds/:id" element={<Compounds/>}/>
          <Route exact path="/summary/:id" element={<ShowSummary/>}/>
          <Route exact path="/search" element={<SearchCompounds/>}/>
          <Route exact path="/AOCD-Admin" element={<LoginPage/>} />
          <Route exact path="/AOCD-Admin/Portal" element={<RequireAuth><AdminDashboard/></RequireAuth>}/>
          <Route exact path="/AOCD-Admin/Portal/AddCompound" element={<RequireAuth><AddCompounds/></RequireAuth>}/>
          <Route exact path="/AOCD-Admin/Portal/Update_Del" element={<RequireAuth><UpdateCompounds/></RequireAuth>}/>
          
          
				</Routes>
			</BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;