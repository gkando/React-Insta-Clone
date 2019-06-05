import React, { useState, useEffect }  from 'react';
// import axios from 'axios';
import './App.css';
import './components/SearchBar/SearchBar.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';




function App() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setPosts(dummyData);
  }, [posts])
  
  const handleSearchPosts = e => {
    const postsTmp = posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    setFilteredPosts(postsTmp)
  };

    return (
      <div className='App'>
        <div className='search-bar'>
            <div className='logo-area'>
                <div className='logo'>  </div>
                <div className='divider'></div>
                <div className='logo2' aria-label='Instagram'></div>
            </div>
            <SearchBar
              searchPosts={handleSearchPosts}
            />
        </div>
          
          <PostContainer 
              posts={
                filteredPosts.length > 0
                ? filteredPosts
                : posts
          }/>

          
      </div>
    );
  
}

export default App;