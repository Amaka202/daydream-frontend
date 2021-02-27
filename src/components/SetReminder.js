import React from 'react'
import { Modal } from 'antd';
import TextError from './TextError';
import '../styles/postentry.css'
import { DatePicker } from 'rsuite';
import '../styles/reminders.css';
import {Button} from 'rsuite';



function SetReminder(props) {

    return (
        <div className="reminder-form-container page-padding">
            <div className="">
            <form className="reminder-form">
                <h4 className="page-title">Create a reminder</h4>
                <div>
                    <label>Time and Date
                        <span className='required-star'> *</span>
                    </label>
                    <DatePicker
                        format="YYYY-MM-DD HH:mm"
                        ranges={[
                        {
                            label: 'Now',
                            value: new Date()
                        }
                        ]}
                    />
                </div>
                <div style={{marginTop: '1rem'}}>
                    <label>What do we remind you of?
                        <span className='required-star'> *</span>
                    </label>
                    <textarea 
                        type='text'
                        placeholder='reminder'

                    />
                </div>
                <div className="">
                        <Button className="secondary-btn">Create New</Button>
                 </div>
            </form>
            </div>
          </div>
    )
}

export default SetReminder;
