import React, { Component }  from 'react';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data';
import { Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className='App'>

          <SearchBar />
          <PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;