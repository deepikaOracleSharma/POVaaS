import React, { Component } from 'react';
import './App.css';
import SearchBox from './component/searchBox';
import ContentBox from './component/contentBox';
import LoginBox from './component/loginBox';

let jsonData=[
  {name: "Sporting Goods1", description: "$49.99", status: 'true', link: "Football"},
  {name: "Sporting Goods2", description: "$9.99", status: 'true', link: "Baseball"},
  {name: "Sporting Goods3", description: "$29.99", status: 'false', link: "Basketball"},
  {name: "Electronics1", description: "$99.99", status: 'true', link: "iPod Touch"},
  {name: "Electronics3", description: "$399.99", status: 'false', link: "iPhone 5"},
  {name: "Electronics", description: "$199.99", status: 'true', link: "Nexus 7"}
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <img src="http://solutionengineering.us.oracle.com/excellence/css/images/logo.png" class="App-logo" alt="logo" />
          <span>POVaaS</span>
        </header>
        <LoginBox/>
        <div id="searchPanel" class="hide">
          <SearchBox title="" placeholder="Search" /> 
          <ContentBox jsonData={jsonData}/>   
          </div>      
      </div>
    );
  }
}

export default App;
