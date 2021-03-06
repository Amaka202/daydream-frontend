import React, {useEffect} from 'react'
import { Calendar } from 'antd';
import {Link} from 'react-router-dom';
import '../../styles/entries.css'
import {connect} from 'react-redux';
import {getReminders} from '../../store/actions/remindersActions';

function EntryCalender({reminders, time, getReminders}) {
    function onPanelChange(value, mode) {
        console.log(value, mode);
      }

      useEffect(() => {
        getReminders()
    }, [time])

    return (
        <div className="entry-calender">
            <h5 className="page-title">Reminders</h5>
            <div>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
            <div  className="upcoming-reminder">
                {reminders && reminders.length > 0
                ?
                (<div>
                    <h5>Upcoming Reminder</h5>
                    <p className="entry-date" style={{marginTop:'1rem'}}>{reminders[0].date}</p>
                    <p>{reminders[0].reminder}</p>
                </div>)
                :
                <h6>No Reminders yet...</h6>
                }
                <div style={{marginTop: '1rem'}}>
                    <Link to="/reminders" style={{paddingTop: '3rem', fontSize: '0.9em'}}>View all...</Link>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        reminders: state.reminders.reminderData,
        time: state.reminders.time
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReminders: () => dispatch(getReminders()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryCalender);
