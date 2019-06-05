import React from 'react';
import './App.css';
import withAuthenticate from './components/Authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage'

function App() {

    const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

    return (
      <div className='App'>
        <ComponentFromWithAuthenticate />
      </div>
    );
  
}

export default App;