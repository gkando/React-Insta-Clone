import React from 'react';
import './SearchBar.css';


const SearchBar = props => {
    // const [searchTerm, setSearchTerm] = useState('');

    // const handleSearch = e => {
    //     e.preventDefault();

    //     setSearchTerm(e.target.value)

    //     // console.log(searchTerm)

    //     if (searchTerm.length > 2) {
    //         getMatchedItems()
    //     }
        
    //   };

    
    return (
        <div className='search-container'>
            {/* <span className='coreSpriteSearchIcon'></span> */}
            <input className='search-input' placeholder="Search" onKeyDown={props.searchPosts}></input>
            
        </div>

    )
}

export default SearchBar