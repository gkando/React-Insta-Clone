import React, { Component }  from 'react';
import './App.css';
import './components/SearchBar/SearchBar.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';
const fs = require('fs');

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  render() {
    return (
      <div className='App'>
        <div className='search-bar'>
            <div className='logo-area'>
                <div className='logo'>  </div>
                <div className='divider'></div>
                <div className='logo2' aria-label='Instagram'></div>
            </div>
            <SearchBar dummyData={this.state.dummyData}/>
        </div>
          
          <PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;