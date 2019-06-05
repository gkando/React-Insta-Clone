import React, { useState, useEffect }  from 'react';
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import dummyData from '../../dummy-data';
import './PostContainer.css';

function PostsPage() {
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
      <div className='Posts-Page'>
        <SearchBar searchPosts={handleSearchPosts} />
        <PostContainer posts={filteredPosts.length > 0 ? filteredPosts : posts} />
      </div>
    );
  
}

export default PostsPage;