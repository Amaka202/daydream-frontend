import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import '../styles/signup.css'
import TextError from './TextError';
import SignUpHeader from './headers/SignUpHeader';
import signupPic from '../img/create-account.png';
import {createUser} from '../store/actions/authActions';

function Signup(props) {
  const initialValues = {
    firstname: "",
    lastname:"",
    email: "",
    password: ""
  }
  
  const onSubmit = (values, submitProps) => {
    createUser(values)
    console.log("form value", values)
  }

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
                    <button type="submit" className="primary-btn" >Submit</button>
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
        entries: state.entry.enteries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (entry) => dispatch(createUser(entry))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
