import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    userName: '',
    password: ''
  }

  userNameChangedHandler = (event) => {
    this.setState(
      {
        userName: event.target.value
      }
    )
  }

  passwordChangedHandler = (event) => {
    this.setState(
      {
        password: event.target.value
      }
    )
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name] : event.target.value
      }
    )
  }
  

  onSigninClicked = () => {
    console.log("username is : " + this.state.userName + " password is : " + this.state.password)
  }

  render() {
    return (
      <div className="App">
        <h1>Login Example</h1>

        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" name="userName" onChange={this.handleChange} value={this.state.userName} />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} />
        <br />

        <button onClick={this.onSigninClicked}>Sign in</button>
      </div>
    );
  }
}

export default App;
