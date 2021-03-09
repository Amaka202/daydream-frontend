import React, { useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'rsuite';

import {connect} from 'react-redux';
import { Alert } from 'rsuite';
import {useHistory} from 'react-router-dom'
import '../styles/signup.css'
import TextError from './TextError';
import SignUpHeader from './headers/SignUpHeader';
import signupPic from '../img/create-account.png';
import {createUser} from '../store/actions/authActions';
import {resetAuthState} from '../store/actions/resetStateAction';

import {saveToken} from './helpers/saveToken';

function Signup(props) {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const {createUser, status, time, resetAuthState, serverError} = props
  const initialValues = {
    firstname: "",
    lastname:"",
    email: "",
    password: ""
  }
  
  const onSubmit = (values, submitProps) => {
    setLoading(true)
    createUser(values)
}
    useEffect(() => {
    if(!time){
        return;
    }else{
        setLoading(false);
        if(serverError){
            Alert.error('server error', 5000)
            resetAuthState()
        }else
        if(status.status === 'error'){
            Alert.error(status.message, 5000)
            resetAuthState()
        }else{
            Alert.success(status.message, 5000)
            saveToken(status.token)
            history.push('./entries')
        }
    }
    }, [time, status])


  const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required').min(6, "Passwword should be at least 6 characters"),
  })

  return (
    <div className="signup-container">
        <SignUpHeader /> 
        <div className="title-div">
            <p>Create an account</p>
        </div> 
        <div className="flexed page-padding">
            <div className="signup-img-div flex-item">
                <img src={signupPic} alt="sign up pic"/>
            </div>  
            <div className="signup-form flex-item">
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                <Form>
                <div className='form-control'>
                <label htmlFor='firstname'>
                    First Name
                    <span className="required-star"> *</span>
                </label>
                <Field
                    type='text'
                    id='firstname'
                    name='firstname'
                />
                <ErrorMessage name="firstname" component={TextError}/>
        
                </div>

                <div className='form-control'>
                <label htmlFor='lastname'>
                    Last Name
                    <span className="required-star"> *</span>
                </label>
                <Field
                    type='text'
                    id='lastname'
                    name='lastname'
                />
                <ErrorMessage name="lastname" component={TextError}/>
                </div>

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
        serverError: state.auth.serverError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (userData) => dispatch(createUser(userData)),
        resetAuthState: () => dispatch(resetAuthState())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
