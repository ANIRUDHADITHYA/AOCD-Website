import { Link } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({placeholder ,data}){
    return(
        <div className='search'>
            <div className='searchInputs'>
                <input className='inputBar' type="text" placeholder={placeholder}/>
                <div className='searchIcon'>
                <Link to='/compounds' className="nav-links" ><i class="fas fa-search"></i></Link>
                </div>
            </div>
            <div className='dataResults'></div>
        </div>
    )
}

export default SearchBar;