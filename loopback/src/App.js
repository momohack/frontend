import React, { Component } from 'react';
import './App.css';
import PositionIndex from './components/positions/position';
import AnalysisContent from './components/data/data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to TraitMeter</h2>

        </div>
          <h3>Select A Position</h3>
          <PositionIndex/>
          <AnalysisContent/>
        </div>
    );
  }
}

export default App;
