import React, { Component } from 'react';
import Photo from '../components/Photo';
import { connect } from 'react-redux';

class SearchResultsContainer extends Component {
  render() {
    return(
      <div>
        <h3>SearchResults Container</h3> 
        <Photo />
      </div>
    ) 
  }
}

const mapStateToProps = state => {
  return { photos: state.photos };
};



const SearchResults = connect(mapStateToProps, null)(SearchResultsContainer);
export default SearchResults;