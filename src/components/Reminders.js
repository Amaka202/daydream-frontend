import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {createEntry} from '../store/actions/entriesActions';
import SignedInHeader from './headers/SignedInHeader';
import MyFooter from './MyFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Divider } from 'rsuite';
import { Calendar } from 'antd';
import '../styles/reminders.css';


function Reminders({reminders}) {
     const history = useHistory();

     const redirectToSetReminders = () => {
         history.push('./createreminder')
     }
    const element1 = <FontAwesomeIcon icon={faTrash} />

    function onPanelChange(value, mode) {
        console.log(value, mode);
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
                        <section className="reminder">
                            <p className="entry-date">08:30pm 20 Febuary 2021</p>
                            <p className="reminder-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquam tellus ornare semper. Pellentesque tincidunt id dignissim aliquam, adipiscing. Nunc pellentesque dictum odio potenti mauris interdum. Id massa, tincidunt in  
                            </p>
                            <div style={{color: '#FF0202', paddingTop:'1rem'}}>
                                {element1}
                            </div>
                        </section>
                        <Divider />
                        <section className="reminder">
                            <p className="entry-date">08:30pm 20 Febuary 2021</p>
                            <p className="reminder-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquam tellus ornare semper. Pellentesque tincidunt id dignissim aliquam, adipiscing. Nunc pellentesque dictum odio potenti mauris interdum. Id massa, tincidunt in  
                            </p>
                            <div style={{color: '#FF0202', paddingTop:'1rem'}}>
                                {element1}
                            </div>
                        </section>
                        <Divider />


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
        entries: state.entry.enteries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEntry: (entry) => dispatch(createEntry(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminders);
