import React, { useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'rsuite';
import SignInHeader from './headers/SignInHeader'
import '../styles/signup.css';
import { Button } from 'rsuite';

import {useHistory} from 'react-router-dom';
import TextError from './TextError'
import {connect} from 'react-redux';
import LoginPic from '../img/login.png';
import {loginUser} from '../store/actions/authActions';
import {resetAuthState} from '../store/actions/resetStateAction';
import {saveToken} from './helpers/saveToken';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {loginUser, status, time, resetAuthState} = props
  const initialValues = {
    email: "",
    password: ""
  }
  const onSubmit = values => {
    setLoading(true)
    loginUser(values)
  }

  useEffect(() => {
    if(!time){
        return;
    }else{
        setLoading(false);
        if(status.status === 'error'){
          Alert.error(status.message, 3000)
          resetAuthState()
        }else{
            Alert.success(status.message, 5000)
            saveToken(status.token)
            history.push('./entries')
        }
    }
    }, [time, status])

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
                    <Button type="submit" className="primary-btn" loading={loading}>Submit</Button>
                </div>
            </Form>
            </Formik>
            </div>
                </div>  
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      status: state.auth.data,
      time: state.auth.time,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userData) => dispatch(loginUser(userData)),
    resetAuthState: () => dispatch(resetAuthState())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
