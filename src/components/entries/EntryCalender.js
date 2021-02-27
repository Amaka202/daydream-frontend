import React from 'react'
import { Calendar } from 'antd';
import {Link} from 'react-router-dom';
import '../../styles/entries.css'


function EntryCalender() {
    function onPanelChange(value, mode) {
        console.log(value, mode);
      }

    return (
        <div className="entry-calender">
            <div>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
            <div  className="upcoming-reminder">
                <div>
                    <h5>Upcoming Reminders</h5>
                    <p className="entry-date">11: 30am, 12 Febuary 2021</p>
                    <p>Go to Amaka house and get food</p>
                </div>
                <div style={{marginTop: '1rem'}}>
                    <Link to="/reminders" style={{paddingTop: '3rem', fontSize: '0.9em'}}>View all...</Link>
                </div>
            </div>

        </div>
    )
}

export default EntryCalender
