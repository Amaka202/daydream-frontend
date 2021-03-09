import React, { useState, useEffect } from 'react'
import arrow from '../../img/arrow-left.png';
import dayjs from 'dayjs';
import '../../styles/entries.css';
import { Link, Route } from "react-router-dom";
import {connect } from 'react-redux';
import currentWindowWidth from '../helpers/getCurrentWidth';
import useQuerry from '../helpers/useQuerry';
import EmptyEntries from './EmptyEntries';
import {getEntries} from '../../store/actions/entriesActions';
import MyLoader from '../MyLoader';
import Entry from './Entry';
import { DesktopViewEntries, mobileViewEntries } from '../helpers/mappingEntriesFunction';
import MakeEntryButton from '../MakeEntryButton';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

function Entries({entries, time, getEntries}) {
    let querry = useQuerry();
    // const [entriesLoading, setEntriesLoading] = useState(true);


    useEffect(() => {
        getEntries()

    }, [ time])

    // useEffect(() => {
    //     if(entries){
    //         setEntriesLoading(false)
    //     }
    // })

    const mappedDesktopEntries = DesktopViewEntries(entries, arrow, Link, dayjs)
    const mappedMobileEntries = mobileViewEntries(entries, arrow, Link, dayjs)

    // if(entriesLoading){
    //     return <MyLoader/>
    // }


    if(currentWindowWidth()[0] > 700){
        return (
            <div>
                
                { entries && entries.length > 0 
                ?
                <div>
                    <div>
                        <MakeEntryButton />
                    </div>
                    <div className="entries-entry-section">
                    <div className="flexed-item">
                        <h5 className="page-title">Enteries</h5>
                          {mappedDesktopEntries}                                     
                    </div> 
                    <div className="flexed-item">
                        <Entry id={querry.get('id')} />
                    </div>
                    </div>
                </div>

                :
                <div>
                    <EmptyEntries />
                </div>
            }
            </div>
            
            
        )
    }else{
        return (
            <div>
            { entries && entries.length > 0 
            ?
            <div>
                <div>
                        <MakeEntryButton />
                </div>
                <div className="entries-entry-section">
                <div className="">
                    <h5 className="page-title">Enteries</h5>
                      {mappedMobileEntries}                                     
                </div> 
            </div>
            </div> 
            :
            <div>
                <EmptyEntries />
            </div>
        }
        </div>

        )
    }

  
}

const mapStateToProps = (state) => {
    return {
        entries: state.entries.entriesData,
      time: state.entries.time,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        getEntries: () => dispatch(getEntries())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Entries);