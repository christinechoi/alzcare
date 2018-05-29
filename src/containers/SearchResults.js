import React, { Component } from 'react';
import Photo from '../components/Photo';


class SearchResults extends Component {

  render() {
    return(
      <div>
        <h3>SearchResults Container</h3> 
        <Photo />
      </div>
    ) 
  }
}

export { SearchResults };