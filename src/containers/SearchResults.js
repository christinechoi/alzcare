import React, { Component } from 'react';
import Photo from '../components/Photo';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return { photos: state.photos };
};

export default connect(mapStateToProps, null)(SearchResults);