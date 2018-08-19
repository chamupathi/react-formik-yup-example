import React, { Component } from 'react';
import './App.css';
import { Formik } from 'formik'
import * as Yup from 'yup' 

class App extends Component {

  state = {
    userName: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
    this.validateFields()
  }

  validateFields = () => {

    var errorMessage

    this.state.password.length < 5 ? errorMessage = "password should be more than 5 chars" : errorMessage = null

    this.setState({
      passwordError: errorMessage
    })
  }


  onSigninClicked = () => {
    console.log("username is : " + this.state.userName + " password is : " + this.state.password)
  }

  handleSubmit = (values) => {
    console.log(values)
  }

  validationSchema  = Yup.object().shape({
    userName: Yup.string()
    .email("invalid email Address")
    .min(9, "minimum length is 9 chars")
    .required("user name is required"),

    password: Yup.string()
    .min(5, "min length is 5 chars")
    .required("password is required")
  })

  render() {
    return (

      <Formik
        onSubmit={this.handleSubmit}
        validationSchema={this.validationSchema}
        render={(formikProps) => {
          return (
            <div>
              <h1>Login Example</h1>

              <label htmlFor="userName">User Name</label>
              <input type="text" 
              id="userName" 
              name="userName" 
              onChange={formikProps.handleChange} 
              value={formikProps.userName} />
              <p>{formikProps.errors.userName}</p>
              <br />

              <label htmlFor="password">Password</label>
              <input type="password" 
              id="password" 
              name="password" 
              onChange={formikProps.handleChange} 
              value={formikProps.password} />
              <p>{formikProps.errors.password}</p>
              <br />

              <button onClick={formikProps.submitForm} disabled={!formikProps.isValid}>Sign in</button>
            </div>
          )
        }}
      />
      // <div className="App">

      // </div>
    );
  }
}

export default App;
