import React from 'react';
import './App.css';
import withAuthenticate from './components/Authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage'
import Login from './components/Login/Login'

function App() {

    const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

    return (
      <div className='App'>
        <ComponentFromWithAuthenticate />
      </div>
    );
  
}

export default App;