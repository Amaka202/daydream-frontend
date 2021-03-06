import React, {useState, useEffect} from 'react'
import { Modal } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert, Button } from 'rsuite';
import {connect} from 'react-redux';
import TextError from './TextError';
import '../styles/postentry.css'
import {createEntry} from '../store/actions/entriesActions';
import {resetEntriesState} from '../store/actions/resetStateAction';


function PostEntry(props) {
    
  const [loading, setLoading] = useState(false);
    const {handleClose, show, createEntry, status, resetEntriesState} = props;

    const initialValues = {
        title: "",
        date:"",
        mood: "",
        entry: ""
      }
      
      const onSubmit = (values, submitProps) => {
        setLoading(true)
        createEntry(values)
        submitProps.resetForm()

      } 

      useEffect(() => {
        if(!status.createEntriesSuccessTime){
            return;
        }else{
            setLoading(false);
            handleClose();
        }
        }, [status.createEntriesSuccessTime])

        useEffect(() => {
          if(status.createEntriesErrorTime){
            Alert.error('error creating post', 5000);
            resetEntriesState();
          }
        }, [status.createEntriesErrorTime])

      const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        date: Yup.string().required('Required'),
        mood: Yup.string().required('Required'),
        entry: Yup.string().required('Required'),
      })

    return (
        <div>
        <Modal
          visible={show}
          title="Title"
          onOk={handleClose}
          onCancel={handleClose}
          footer={[
            <p onClick={handleClose}>Cancel</p>           
          ]}
        >
          <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                <Form>
                <div className='form-field'>
                <label htmlFor='title'>
                   Title
                    <span className="required-star"> *</span>
                </label>
                <Field
                    type='text'
                    id='title'
                    name='title'
                    placeholder='title'
                />
                <ErrorMessage name="title" component={TextError}/>
        
                </div>

                <div className='form-field'>
                <label htmlFor='date'>
                    Date
                    <span className="required-star"> *</span>
                </label>
                <Field
                    type='date'
                    id='date'
                    name='date'
                />
                <ErrorMessage name="date" component={TextError}/>
                </div>

                <div className='form-field'>
                <label htmlFor='mood'>
                    What mood are you in.
                    <span className="required-star"> *</span>
                </label>
                <Field as="select" name="mood">
                  <option value="" selected disabled>Mood</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="anxious">Anxious</option>
                    <option value="depressed">Depressed</option>
                    <option value="mixed feeling">Mixed feeling</option>
                </Field>
                <ErrorMessage name="mood" component={TextError}/>
                </div>

                <div className='form-field'>
                <label htmlFor='entry'>
                    Entry
                    <span className="required-star"> *</span>
                </label>
                <Field
                    as='textarea'
                    type='text'
                    id='entry'
                    name='entry'
                    placeholder='entry'
                />
                <ErrorMessage name="entry" component={TextError}/>
                </div>       
                <div className="post-entry-btn-div">
                    <Button type="submit" className="secondary-btn" loading={loading}>Submit</Button>
                </div>
            </Form>
            </Formik>
          </div>
        </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      status: state.entries,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEntry: (entryData) => dispatch(createEntry(entryData)),
    resetEntriesState: () => dispatch(resetEntriesState())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEntry);

