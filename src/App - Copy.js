import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pie from './component/pieChart';
import Bar from './component/barChart';
import Line from './component/lineChart';
import Donut from './component/donutChart';
import Stacked from './component/stackedChart';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Charts</h1>
        </header>
        <div id="chart"></div>
        <Pie/>
        <Bar/>
        <Line/>
        <Donut/>
        <Stacked/>
      </div>
    );
  }
}

export default App;
