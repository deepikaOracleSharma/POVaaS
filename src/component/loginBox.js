import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
 
const LoginPage = (props) => {
   
    const loginWasClickedCallback = (data) => {
      console.log(data.username +data.password);
      if(data.username==='admin' && data.password==='admin@123'){
        document.getElementById("loginForm").classList.add("hide");
        document.getElementById("searchPanel").classList.remove("hide");
      }else{
        alert('Please try again you are not authorized user');
        return false;
      }
    };
    
    return (
        <div id="loginForm">
            <ReactSignupLoginComponent
                title="Admin"
                handleLogin={loginWasClickedCallback}
            />
        </div>
    );
};
 
export default LoginPage;

  