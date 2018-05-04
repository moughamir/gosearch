import React from 'react';
import banner from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <article className="App-content">
          <div className="container">
          <img src={banner} className="App-banner" alt="Go Search" />
          <SearchBar className='Test'/>
          </div>
        </article>
        <footer className="App-footer">
          <div className="footer-container">
            <nav className="App-footer--nav nav-left">
              <ul>
                <li>Advertising</li>
                <li>Business</li>
                <li>About</li>
              </ul>
            </nav>
            <nav className="App-footer--nav nav-right">
              <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Settings</li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
