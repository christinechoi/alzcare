import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions/actions';
import { Divider, Form, Grid } from 'semantic-ui-react';

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
    this.props.getPhotos(this.state.value);
  }

  render() {
    return (
      <Grid>
        <Divider hidden />
        <Divider hidden />
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={(e) => this.handleSubmit(e)} >
              <Form.Field centered>
                <label>Search Flickr by tag(s): </label>
              </Form.Field>
              <Form.Field >
                <Form.Input  
                  type="text" 
                  value={this.state.value} 
                  onChange={this.handleChange} />
              </Form.Field>
              <Form.Button 
                type='submit' 
                color='blue' 
                size='lg' 
                fluid> Submit
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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