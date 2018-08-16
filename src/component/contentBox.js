import React, {
  Component
} from 'react';
import axios from 'axios';
class ContentBox extends Component {

  constructor() {
      super();
      this.state = {
          componentData: ''
      };

  }

  componentDidMount() {

      axios.get('http://solutionengineering-devops.us.oracle.com:3000/getAssets/')
          .then(res => {
              var myObj = res.data;
              var j, x = '';
              for (j in myObj) {
                  if (myObj[j].implemented === '0') {
                      var cl = "column blue ";
                      var msg = '<b>coming soon.....</b>';
                  } else {
                      cl = "column red ";
                      msg = "<a href='" + myObj[j].link + "'>" + myObj[j].link + "</a>";
                  }
                  x += '<div class="' + cl + '" >' +
                      "<h2>" + myObj[j].name + "</h2>" +
                      "<p>" + myObj[j].description + "</p><p>" + msg + "</p></div>";

              }
              this.setState({
                  componentData: x
              })
          })
  }

  render() {


          setTimeout(function() {
              var classname = document.getElementsByClassName("column");
              var myFunction = function() {
                  var attribute = this.getAttribute("class");
                  var el = document.getElementById('content-box').getElementsByTagName('button');
                  document.getElementById("myModal").style.display = 'block';
              };

              for (var i = 0; i < classname.length; i++) {
                  classname[i].addEventListener('click', myFunction, false);
              }
          }, 3000);
     return (
        <div id="content-box">
          <div id="searchContent" class="searchContent" dangerouslySetInnerHTML={ { __html:  this.state.componentData } }></div>
       
        </div>
          
        
      );
    }
  }
  
  export default ContentBox;
  

  