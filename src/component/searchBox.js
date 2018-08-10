import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
      function handleKeyPress(e) {
        e.preventDefault();
        var a=  e.target.value;
        var filter = e.target.value.toUpperCase();
       // console.log('The link was clicked.'+a);
         var div = document.getElementById("searchContent");
        var h2 = div.getElementsByTagName("h2");
        //console.log(h2.length);
        for (var i = 0; i < h2.length; i++) {
          a = h2[i];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
           //console.log(h2[i].parentElement.nodeName);
              h2[i].parentElement.classList.remove("hide");
          } else {
              h2[i].parentElement.classList.add("hide");
          }
      }
     
      }
      console.log('test');
      return (
        <div className="Search"><br/>
          <h1>{this.props.title}</h1>
          <input type="text" name="search" placeholder={this.props.placeholder}  onKeyPress={(event) => {
    if (event.key === "Enter") {
      handleKeyPress(event);
    }
  }}/>
       </div>
      );
    }
  }
  
  export default SearchBox;
  

  