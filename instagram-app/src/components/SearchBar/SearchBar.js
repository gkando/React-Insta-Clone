import React, { useState } from 'react';
import './SearchBar.css';


const SearchBar = props => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = e => {
        e.preventDefault();

        setSearchTerm(e.target.value)

        // console.log(searchTerm)

        if (searchTerm.length > 2) {
            getMatchedItems()
        }
        
      };

    //   const handleCommentSubmit = e => {
    //     const newComment = {text: commentNew, username: 'miller06'}
    //     const comments = commentsData.slice();
    //     comments.push(newComment)
    //     setCommentsData(comments);
    //     setCommentNew('')
    //   };

    const getMatchedItems = () => {
        // const temp = commentsData.filter(searchTerm);
        return
      };
    
    return (
        <div className='search-container'>
            {/* <span className='coreSpriteSearchIcon'></span> */}
            <input className='search-input' placeholder="Search" onChange={handleSearch}></input>
            
        </div>

    )
}

export default SearchBar