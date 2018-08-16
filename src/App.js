import React, { Component } from 'react';
import './App.css';
import Dialog from './component/dialogBox';
import SearchBox from './component/searchBox';
import ContentBox from './component/contentBox';
import LoginBox from './component/loginBox';

let jsonData=[{"_id":"5b6dc63ba2de353768592a33","name":"Recommendation","description":"Decription related to recommendation","implemented":"0","link":"https://www.google.co.in/search?q=how+to+create+record+using+mongodb+compass+community&rlz=1C1CHBD_enIN790IN790&oq=how+to+create+record+using+mongodb+compass+community&aqs=chrome..69i57.14511j0j7&sourceid=chrome&ie=UTF-8"},{"_id":"5b6dc691a2de353768592a34","name":"Recomendation with spark","description":"Description spark recomendation engine","implemented":"0","link":"https://docs.mongodb.com/manual/core/capped-collections/"},{"_id":"5b6dc71396f1e23768de5e60","name":"Autonomous database","description":"Decription related to autonomous database","implemented":"1","link":"https://www.guru99.com/installation-configuration-mongodb.html#1"},{"_id":"5b6dc74196f1e23768de5e61","name":"Mobile cloud service","description":"Decription related to mobile cloud service","implemented":"1","link":"https://cloud.oracle.com/mobile"}]
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
          <SearchBox title="" placeholder="please type here to search" /> 
          <ContentBox jsonData={jsonData}/>  
          <Dialog/> 
          </div>      
      </div>
    );
  }
}

export default App;
