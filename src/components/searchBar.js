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
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;

        }
        else {
          response.json().then(data => this.setState({ data: data }));
        }
      }).then(
          this.state.data.map((n,i) => {
            console.log(n.body.includes(this.state.query));
            
          })
        
      )
      .catch(err => { console.log(err) });

    console.log('Search ' + this.state.query);
  }
  getLucky(e) {
    e.preventDefault();
    console.log('I\'m Lucky' + e);
  }

  render() {
    return (
      <div className="App-search_bar">
        <form action=''>
          <input type="text" placeholder="Search..." value={this.state.query}  className="App-search_input" onChange={this.handleInput}/>
          <button onClick={this.Search}>Search</button><button onClick={this.getLucky}>I'm lucky</button>
        </form>
      </div>
    );
  }

}
