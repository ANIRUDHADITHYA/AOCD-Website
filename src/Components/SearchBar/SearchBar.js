import { useState } from "react";
import './SearchBar.css';

function SearchBar({placeholder ,data}){

    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const onTodoSearch = async (event) => {
		event.preventDefault();


		if (search === "") {
			setError("Enter Something.");
			return;
		}

        window.location = "/search?key=" + search;
        console.log(search);
	}
    const handleEnter = (e) =>{
        console.log(error);
        if(e.key==='Enter') {
            if (e.target.value === "") {
                setError("Enter Something.");
                return;
            }
    
            window.location = "/search?key=" + e.target.value;
            console.log(e.target.value);
            
        }
    }

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input className='inputBar' type="text" placeholder={placeholder}  onChange={(event) =>{
														setSearch(event.target.value)}
													} onKeyPress={handleEnter}/>
                <div className='searchIcon'>
                <i className="fas fa-search"  onClick={onTodoSearch}></i>
                </div>
            </div>
            <div className='dataResults'></div>
        </div>
    )
}

export default SearchBar;