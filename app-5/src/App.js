import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './image'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Image myImage={"https://http.cat/409"} />
      </div>
    );
  }
}

export default App;
