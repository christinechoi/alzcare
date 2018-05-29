import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions/actions';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger;
    this.props.getPhotos(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Search by tag(s):</p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: photo => dispatch(getPhotos(photo))
  };
}

const Search = connect(null, mapDispatchToProps)(SearchForm);
export default Search;