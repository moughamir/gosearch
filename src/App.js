import React from 'react';
import banner from './banner.svg';
import './App.css';
import SearchBar from './components/searchBar';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={banner} className="App-banner" alt="Go Search" />
          <SearchBar className='Test'/>
        </header>
        <p className="App-intro">
          display results here
        </p>
      </div>
    );
  }
}

export default App;
