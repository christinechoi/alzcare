import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './containers/Search.js'; 
import SearchResults from './containers/SearchResults.js';


class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <SearchResults />
      </div>
    );
  }
}

export default App;
