import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SignInHeader from './headers/SignInHeader'
import '../styles/signup.css'
import TextError from './TextError'
import LoginPic from '../img/login.png';


function Login(props) {
  const initialValues = {
    email: "",
    password: ""
  }
  const onSubmit = values => {
    console.log("form values", values)
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required').min(6, "Passwword should be at least 6 characters"),
  })

  return (
    <div className="signup-container">
        <SignInHeader /> 
        <div className="title-div">
            <p>LOGIN IN</p>
        </div> 
        <div className="flexed page-padding">
            <div className="signup-img-div flex-item">
                <img src={LoginPic} alt="sign up pic"/>
            </div>  
            <div className="signup-form flex-item">
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                <Form>
                <div className='form-control'>
                <label htmlFor='email'>
                    E-mail
                    <span className="required-star"> *</span>
                </label>
                <Field
                    type='email'
                    id='email'
                    name='email'
                />
                <ErrorMessage name="email" component={TextError}/>
                </div>

                <div className='form-control'>
                <label htmlFor='password'>
                    Password
                    <span className="required-star"> *</span>
                </label>
                <Field
                    type='password'
                    id='password'
                    name='password'
                />
                <ErrorMessage name="password" component={TextError}/>
                </div>       
                <div className="signup-btn-div">
                    <button type="submit" className="primary-btn" >Submit</button>
                </div>
            </Form>
            </Formik>
            </div>
                </div>  
    
    </div>
  )
}

export default Login;