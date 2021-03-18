import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import '../styles/postentry.css'
import { Alert, DatePicker } from 'rsuite';
import '../styles/reminders.css';
import {Button} from 'rsuite';
import {createReminder} from '../store/actions/remindersActions';
import { useHistory } from 'react-router';
import {resetRemindersState} from '../store/actions/resetStateAction';



function SetReminder({createReminder, time, reminderCreated, resetRemindersState}) {
    const history = useHistory();
    const [dateTime, setDateTime] = useState("");
    const [reminder, setReminder] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = () => {
        if(dateTime === ""){
            Alert.error('Please choose a time', 5000)
        } else if(reminder === ""){
            Alert.error('please add a reminder', 5000)
        }else{
            setLoading(true)
            const reminderData = {
                date: dateTime,
                reminder
            }
            createReminder(reminderData)
        }
    }

    useEffect(() => {
        if(!reminderCreated.createRemindersSucesstime){
            return;
        }else{
            setLoading(false)
            Alert.success('Nice! Expect an email reminder 30 minuites before time!', 5000)
            resetRemindersState()
            history.push('./reminders')
        }
    }, [ reminderCreated.createRemindersSucesstime])

    useEffect(() => {
        if(reminderCreated.createRemindersErrortime){
            Alert.error('error creating reminder', 5000)

        }
    }, [reminderCreated.createRemindersErrortime])

    const handleDateChange = (userDate) => {
        setDateTime(userDate.getTime())
    }

    const handleReminderChange = (e) => {
        setReminder(e.target.value);
    }

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
                        oneTap
                        onChange={(userDate) => handleDateChange(userDate)}
                        placeholder="Select Date/Time"
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
                        value={reminder}
                        onChange={handleReminderChange}
                    />
                </div>
                <div className="">
                        <Button className="secondary-btn" onClick={handleSubmit} loading={loading}>Create New</Button>
                 </div>
            </form>
            </div>
          </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        reminderCreated: state.reminders,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReminder: (reminderData) => dispatch(createReminder(reminderData)),
        resetRemindersState: () => dispatch(resetRemindersState())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetReminder);
