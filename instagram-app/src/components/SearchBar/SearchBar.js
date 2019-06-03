import React from 'react';
import './SearchBar.css';


const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div className='logo-area'>
                <div className='logo'>  </div>
                <div className='divider'></div>
                <div className='logo2' aria-label='Instagram'></div>
            </div>

            <div className='search-container'>
                {/* <span className='coreSpriteSearchIcon'></span> */}
                <input className='search-input' placeholder="Search"></input>
                
            </div>
        </div>
    )
}

export default SearchBar