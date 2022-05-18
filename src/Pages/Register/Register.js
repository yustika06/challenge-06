import React, { useState } from 'react'
import Logo from '../../Assets/img/Rectangle 62.png'
import bg from '../../Assets/img/background.png'
import { Alert, Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import '../Register/Register.css'
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { auth } from "../../firebase";

export const Register = () => {
  var axios = require('axios');
  const [Email, setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [Host, setHost] = useState(process.env.REACT_APP_API)
  

  const handleChange = (event) =>{
    if(event.target.is === "email"){
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const signUp = () =>{
    var data = {
      email: Email,
      password: Password
    };

    var config = {
      method: 'post',
      url: `${Host}/customer/auth/register`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data,
    };

    axios(config)
    .then(function (response) {
      console.log(response.data.token);
      sessionStorage.setItem("Token", response.data.token)
    })
    .catch(function (error) {
      console.log(error);
    });

  
  }
  return (
    <div className='register'>
    <div className='latar'><img src={bg} id='bg'></img></div>
    <div className='login'>
        <img src={Logo}></img><p></p>
        <h2>Create New Account</h2><p></p>
        <Form>
            <div className="form-group">
                <label>Email</label>
                <input  type="email" className="form-control" placeholder="Enter email" onChange={(e) => {handleChange(e)}}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {handleChange(e)}}/>
            </div>
        </Form>
        <Button  onClick={() => {signUp()}}  variant="primary" type="submit"  size="md"  id='btn-signup'>Sign Up</Button>
        <p></p>Already have an account? <a href='Login'>Login</a>
        </div>
    </div>
  )
}