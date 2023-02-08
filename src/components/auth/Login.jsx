import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const [loginFormData, setLoginFormData] = useState({
        'email':'',
        'password':''
    });

    const handleOnChangeinput = (event) => {
        setLoginFormData({...loginFormData,[event.target.name]:event.target.value})
    }

    const navigate = useNavigate();
    const {token, setToken} = useContext(AuthContext);

    const login = (event) => {

        event.preventDefault();

        axios.post('http://laravel-training.test/api/login', loginFormData)
        .then(
            (response) => {
                let accessToken = response.data.access_token;
                localStorage.setItem('token', accessToken);
                setToken(accessToken);

                navigate('/');
            }
        )
        .catch(
            (error) => {
                console.log(error.message);
            }
        )
    };


    return (
        <MDBContainer fluid>
                <form onSubmit={login}>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
  
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>


                <MDBInput wrapperClass='mb-4 w-100' label='Email' id='email' name="email" type='email' size="lg" onChange={handleOnChangeinput}/>
                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='password' name="password" type='password' size="lg" onChange={handleOnChangeinput}/>
  
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
  
                <MDBBtn size='lg' type="submit">
                  Login
                </MDBBtn>

  

                <div className="d-flex m-auto">
                <p className="pt-3">Don't have account? <Link to={'/register'}>Register</Link> now</p>
                </div>

              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
        </form>

      </MDBContainer>
    );
}