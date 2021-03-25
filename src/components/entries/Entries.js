import React, { useState, useEffect } from 'react'
import arrow from '../../img/arrow-left.png';
import dayjs from 'dayjs';
import '../../styles/entries.css';
import { Link, Route, useHistory } from "react-router-dom";
import {connect } from 'react-redux';
import currentWindowWidth from '../helpers/getCurrentWidth';
import useQuerry from '../helpers/useQuerry';
import EmptyEntries from './EmptyEntries';
import {getEntries} from '../../store/actions/entriesActions';
import MyLoader from '../MyLoader';
import Entry from './Entry';
import { DesktopViewEntries, mobileViewEntries } from '../helpers/mappingEntriesFunction';
import MakeEntryButton from '../MakeEntryButton';
import EntryCalender from './EntryCalender';
import SignedInHeader from '../headers/SignedInHeader';
import MyFooter from '../MyFooter';
import { Alert } from 'rsuite';
import { deleteToken } from '../helpers/saveToken';
import { resetAuthState, resetEntriesState, resetRemindersState } from '../../store/actions/resetStateAction';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

function Entries({entries, time, getEntries}) {
    const history = useHistory();
    let querry = useQuerry();
    const [loading, setLoading] = useState(true);

    useEffect(() => {      
        getEntries()

    }, [ entries.createEntriesSuccessTime, entries.editEntriesSuccessTime, entries.deleteEntriesSuucessTime])
 

    // useEffect(() => {
        
    // }, [])

    useEffect(() => {
        if(entries.getEntriesSuccessTime){
            setLoading(false)
            // if(entries.notAuthorized){
            //     Alert.error('session expired', 5000)
            //     deleteToken()
            //     history.push('/login')
            //     window.location.reload(false)
            // }
        }

    }, [entries.getEntriesSuccessTime])



    const mappedDesktopEntries = DesktopViewEntries(entries.entriesData, arrow, Link, dayjs)
    const mappedMobileEntries = mobileViewEntries(entries.entriesData, arrow, Link, dayjs)

    // useEffect(() => {
    //     if(entries.getEntriesErrorTime){
    //         Alert.error('session expired', 5000)
    //         deleteToken()
            // resetAuthState()
            // resetEntriesState()
            // resetRemindersState()
    //         history.push('/login')
    //     }
    // }, entries.getEntriesErrorTime)

    if(currentWindowWidth()[0] > 700){
        if(loading){
            return <MyLoader />
        }
        return (
            <div>
                <header>
                    <SignedInHeader />

                </header>                
                { entries.entriesData && entries.entriesData.length > 0 
                ?
                   
                    <div className="entries-container">
                        <div>
                            <MakeEntryButton />
                        </div>
                        <div className="entries-wrapper page-padding">
                            <div className="entries-item">
                                <h5 className="page-title">Enteries</h5>
                                {mappedDesktopEntries}                                     
                            </div> 
                            <div className="entries-item">
                                <Entry id={querry.get('id')} />
                            </div>
                            <div className="entries-item">
                                <EntryCalender />
                            </div>
                        </div>
                    </div>

                :
                <div className="flexed" style={{marginTop:"2rem"}}>
                    <div className="flex-item">
                        <EmptyEntries />
                    </div>
                    <div className="flex-item">
                        <EntryCalender />
                    </div>
                </div>
            }
            <footer>
                <MyFooter />
            </footer>
            </div>
            
            
        )
    }else{
        if(loading){
            return <MyLoader />
        }
        return (
            <div>
                <header>
                    <SignedInHeader />
                </header> 
            { entries.entriesData && entries.entriesData.length > 0 
            ?
            <div className="entries-container">
                <div>
                    <MakeEntryButton />
                </div>
                <div className="entries-wrapper page-padding">
                    <div className="entries-item">
                        <h5 className="page-title">Enteries</h5>
                        {mappedMobileEntries}                                     
                    </div> 
                    <div className="entries-item">
                        <EntryCalender />
                    </div>
                </div>
            </div> 
            :
            <div>
                    <div>
                        <EmptyEntries />
                    </div>
                    <div className="entries-item">
                        <EntryCalender />
                    </div>
                </div>
        }
        <footer>
                <MyFooter />
            </footer>
        </div>

        )
    }

  
}

const mapStateToProps = (state) => {
    return {
        entries: state.entries,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        getEntries: () => dispatch(getEntries())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Entries);