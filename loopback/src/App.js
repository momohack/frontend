import React, { Component } from 'react';
import './App.css';
import AnalysisContent from './components/data/data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={require('./logo.png')} style={{ width: '500px', marginTop: '50px'}} />

        </div>
          <AnalysisContent/>
        </div>
    );
  }
}

export default App;
