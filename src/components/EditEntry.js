import React, {useState, useEffect} from 'react'
import { Modal } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'rsuite';
import {connect} from 'react-redux';
import TextError from './TextError';
import '../styles/postentry.css'
import {Button} from 'rsuite';
import {editEntry} from '../store/actions/entriesActions';
import dayjs from 'dayjs';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

function PostEntry(props) {
    
  const [loading, setLoading] = useState(false);

    const {handleClose, show, editEntry, status, time, entryId, entry, myFormatedDate} = props;
    const initialValues = {
        title: entry[0].title,
        date: '',
        mood: entry[0].mood,
        entry: entry[0].entry
      }
      
      const onSubmit = (values, submitProps) => {
        setLoading(true)
        editEntry(entryId, values)
        console.log("edited", values)
      } 

      useEffect(() => {
        if(!time){
            return;
        }else{
            setLoading(false);
            if(status.status === 'error'){
                Alert.error(status.message, 5000)
            }else{
                Alert.success(status.message, 5000)
                handleClose();
                window.location.reload();

            }
        }
        }, [time, status])

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
  console.log(state);
  return {
      status: state.entries.editedData,
      time: state.entries.timeEdited,
      // time: state.auth.time,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editEntry: (entryId, entryData) => dispatch(editEntry(entryId, entryData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEntry);

