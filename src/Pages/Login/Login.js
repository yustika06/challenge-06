import React, { useState } from 'react'
import Logo from '../../Assets/img/Rectangle 62.png'
import bg from '../../Assets/img/background.png'
import { Alert, Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import '../Login/Login.css'
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const authHandle = auth;
  const provider = new GoogleAuthProvider();
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const changeEmail = (e) =>{
    setEmail(e.target.value);
  }
  const changePass =(e)=> {
    setPass(e.target.value);
  }

  let Navigate = useNavigate();

  const handleGoggle = () => {
    signInWithPopup(authHandle, provider).then ((data)=> {
        if (data) {
            // console.log(data, "inidataku");
            signInToApi(data.user);
            return Navigate('Pageuser');
        }
    })
      .catch((err) => {
        console.log(err, "ini adalah eror");
      });
  };

//user
  const signInToApi = (data) => {
    var axios = require('axios');
    var data = JSON.stringify({
        "username": data.displayName,
        "email": data.email,
        "password": data.uid,
        "fullName":  data.displayName,
        "address": "Dumai",
        "phone": "082266200274",
        "gender": "Female"
    });
    var config = {
      method: 'post',
      url: `${process.env.REACT_APP_API}/customer/auth/login`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data, "ini data");
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  //admin
  const handleButton = () => {
    signInWithPopup(authHandle, provider)
      .then((data) => {
        if (data) {
          signInAdmin(data.user, "loggin Admin");
          return Navigate("PageAdmin");
        }
      })
      .catch((err) => {
        console.log(err, "ini adalah eror");
      });
  };
  
  const signInAdmin =(data) =>{
    var axios = require('axios');
    var data = {
      email: Email,
      password: Pass
    };
    
    var config = {
      method: 'post',
      url: `${process.env.REACT_APP_API}/admin/auth/login`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data, "login admin");
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
                <input  type="email" className="form-control" placeholder="Enter email" onChange={changeEmail} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={changePass}/>
            </div>
        </Form>
        <Button variant="primary" type="submit"  size="md"  id='btn-signup' onClick={handleButton}>Sign Up</Button>
        <p></p>
        <GoogleButton onClick={handleGoggle} />
        </div>
    </div>
  )
}