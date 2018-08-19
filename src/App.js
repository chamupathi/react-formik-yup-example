import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  userName;
  password;
  userNameChangedHandler = (event) => {
   this.userName = event.target.value
   console.log(event.target.value)
  }

  passwordChangedHandler = (event) => {
    this.password = event.target.value;
    console.log(event.target.value)
  }

  onSigninClicked = () => {
    console.log("username is : " + this.userName + " password is : " + this.password)
  }

  render() {
    return (
      <div className="App">
        <h1>Login Example</h1>

        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" onChange={this.userNameChangedHandler}  />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={this.passwordChangedHandler} />
        <br />

        <button onClick={this.onSigninClicked}>Sign in</button>
      </div>
    );
  }
}

export default App;
