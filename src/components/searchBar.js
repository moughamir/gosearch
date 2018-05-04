/*global fetch*/
import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.Search = this.Search.bind(this);
    this.getLucky = this.getLucky.bind(this);
  }
  handleInput(e) {
    e.preventDefault();
    this.setState({ query: e.target.value });
  }
  
  Search(e) {
    e.preventDefault();
    console.log('Search ' + this.state.query);
  }
  getLucky(e) {
    e.preventDefault();
    console.log('I\'m Lucky ' + this.state.query);
  }

  render() {
    return (
      <div className="App-search_bar">
        <form action=''>
          <input type="text" placeholder="Search..." value={this.state.query}  className="App-search_input" onChange={this.handleInput}/>
          <div className="button-group">
            <button className="button" onClick={this.Search}>Search</button><button className="button" onClick={this.getLucky}>I'm lucky</button>
          </div>
        </form>
      </div>
    );
  }

}
