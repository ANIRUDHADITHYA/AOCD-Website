import { useState } from "react";
import './SearchBar.css';
import { useHistory } from "react-router-dom";

function SearchBar({placeholder ,data}){

    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const history = useHistory();

    function handleClick() {
        history.push("/search?key=" + search);
        if (search === "") {
            setError("Enter Something.");
            return;
        }
    }
    
    const handleEnter = (e) =>{
        console.log(error);
        if(e.key==='Enter') {
            if (e.target.value === "") {
                setError("Enter Something.");
                return;
            }
    
            history.push("/search?key=" + search);
            
            
        }
    }

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input className='inputBar' type="text" placeholder={placeholder}  onChange={(event) =>{
														setSearch(event.target.value)}
													} onKeyPress={handleEnter}/>
                <div className='searchIcon'>
                <i className="fas fa-search"  onClick={handleClick}></i>
                </div>
            </div>
            <div className='dataResults'></div>
        </div>
    )
}

export default SearchBar;