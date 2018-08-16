import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
 //aaaa
export default class App extends React.Component {
 
 
  render() {
    function closePop(){
      document.getElementById("myModal").style.display = 'none';
    }
    return (
      <div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={closePop}>&times;</span>
              <form action="/action_page.php" id="content_form">
              <div class="row">
                <div class="col-25">
                  <label for="fname">First Name</label>
                </div>
                <div class="col-75">
                  <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="lname">Last Name</label>
                </div>
                <div class="col-75">
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="country">Country</label>
                </div>
                <div class="col-75">
                  <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="subject">Subject</label>
                </div>
                <div class="col-75">
                  <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                </div>
              </div>
              <div class="row">
                <input type="submit" value="Submit"/>
              </div>
            </form>
        </div>
    </div>
    </div>
    );
  }
}
  

  