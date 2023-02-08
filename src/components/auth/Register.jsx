import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {

  const [registerFormData, setRegisterFormData] = useState({
    'name':'',
    'email':'',
    'password':'',
    'password_confirmation':''
  });

  const handleOnChangeinput = (event) => {
    setRegisterFormData({...registerFormData, [event.target.name]:event.target.value})
  }

  const register = (event) => {
    event.preventDefault();

    axios.post('http://laravel-training.test/api/register', registerFormData)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

    return (
        <MDBContainer fluid>

          <form onSubmit={register}>

          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
  
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
  
                <MDBInput onChange={handleOnChangeinput} wrapperClass='mb-4 w-100' label='Name' id='name' name="name" type='text' size="lg"/>
                <MDBInput onChange={handleOnChangeinput} wrapperClass='mb-4 w-100' label='Email address' id='email' name="email" type='email' size="lg"/>
                <MDBInput onChange={handleOnChangeinput} wrapperClass='mb-4 w-100' label='Password' id='password' name="password" type='password' size="lg"/>
                <MDBInput onChange={handleOnChangeinput} wrapperClass='mb-4 w-100' label='Confirm Password' id='password_confirmation' name="password_confirmation" type='password' size="lg"/>
  
                {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' /> */}
  
                <MDBBtn size='lg' type="submit">
                  Register
                </MDBBtn>

                <div className="d-flex m-auto">
                <p className="pt-3">Already have account? <Link to={'/login'}>Login</Link> now</p>
                </div>

              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
          </form>
  
      </MDBContainer>
    );
}