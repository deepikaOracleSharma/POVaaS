import React, { Component } from 'react';

class ContentBox extends Component {
    render() {
     var myObj, j,x='';
      myObj=this.props.jsonData;
      for (j in myObj) {
        console.log(myObj[j].status);
        if( myObj[j].status==='true'){
          var cl="column blue";
        }else{
           cl ="column red";
        }
        x += '<div class="'+cl+'">'+
        "<h2>" + myObj[j].name + "</h2>"+
            "<p>"+myObj[j].description+"</p> </div>";
       
      }
      return (
        <div id="searchContent" class="searchContent" dangerouslySetInnerHTML={ { __html: x } }>
        </div>
          
        
      );
    }
  }
  
  export default ContentBox;
  

  