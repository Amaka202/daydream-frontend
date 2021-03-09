import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';
import { Popconfirm } from 'antd';
import {getReminders} from '../store/actions/remindersActions';
import SignedInHeader from './headers/SignedInHeader';
import MyFooter from './MyFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Divider } from 'rsuite';
import { Calendar, Empty } from 'antd';
import {deleteReminder} from '../store/actions/remindersActions';
import '../styles/reminders.css';
import {resetRemindersState} from '../store/actions/resetStateAction';
import MyLoader from './MyLoader';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)


function Reminders({getReminders, timeFetched, reminders, deleteReminder, resetRemindersState, timeReminderDeleted}) {
    const [deleteLoading, setdeleteLoading] = useState(false);
    const [reminderLoading, setReminderLoading] = useState(true);

     const history = useHistory();

     const redirectToSetReminders = () => {
         history.push('./createreminder')
     }
    const element1 = <FontAwesomeIcon icon={faTrash} />

    function onPanelChange(value, mode) {
        console.log(value, mode);
      }

      const handleDate = (d) => {
          console.log(d);
          let date = new Date(d);
          console.log(dayjs(new Date(1615292187061).toString()).format('ll'));
          return date.toString()
          dayjs(new Date(1615292187061).toString()).format('ll')
      }

      const handleDelete = (reminderId) => {
        deleteReminder(reminderId);
        setdeleteLoading(true)
        // resetRemindersState();

    }

    const handlecancel = () => {
        return;
    }

      useEffect(() => {
        getReminders()

    }, [ timeFetched])

    useEffect(() => {
        if(reminders){
            setReminderLoading(false)
        }
    })

    useEffect(() => {
        if(timeReminderDeleted){
            history.push('/reminders')
            window.location.reload();
        }
    }, [timeReminderDeleted])

    if(deleteLoading){
        return <MyLoader/>
    }

    if(reminderLoading){
        return <MyLoader/>
    }

    return (
        <div>
            <header>
                <SignedInHeader />
            </header>
            <section className="page-padding">
                <h4 className="page-title">All Reminders</h4>
                <div>
                    <div className="reminder-btn">
                            <Button className="secondary-btn" onClick={redirectToSetReminders}>Create New</Button>
                    </div>
                </div>
                <section className="reminder-body flexed">
                    <div className="flex-item">
                        {reminders && reminders.length > 0 
                            ?
                            reminders.map((val) => {
                            return (
                                <div key={val.id}>
                                    <section className="reminder">
                                        <p className="entry-date">{dayjs(handleDate((val.date))).format('ll')}</p>
                                        <p className="reminder-text">
                                            {val.reminder}  
                                        </p>
                                        <Popconfirm
                                                title="Are you sure to delete this reminder?"
                                                onConfirm={() => handleDelete(val.id)}
                                                onCancel={handlecancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <a href="#">
                                                <div style={{color: '#FF0202', paddingTop:'1rem'}}>
                                                    {element1}
                                                </div>
                                            </a>
                                        </Popconfirm>
                                        
                                    </section>
                                    <Divider />
                                </div>
                            )
                        })
                        :
                        <div style={{marginBottom: '2rem'}}>
                            <Empty
                                imageStyle={{
                                height: 60,
                                }}
                                description={
                                <span className="empty-text">
                                    Go ahead and record a reminder! <br />
                                </span>
                                }
                                 >
                                    </Empty>
                        </div>
                    
                    }
                    </div>
                    <section className="flex-item reminder-calender">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                    </section>
                </section>
            </section>
            <footer>
                <MyFooter />
            </footer>
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return {
        reminders: state.reminders.reminderData,
        timeFetched : state.reminders.time,
        timeReminderDeleted: state.reminders.timeReminderDeleted

    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        getReminders: () => dispatch(getReminders()),
        deleteReminder: (reminderId) => dispatch(deleteReminder(reminderId)),
        resetRemindersState: () => dispatch(resetRemindersState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminders);
