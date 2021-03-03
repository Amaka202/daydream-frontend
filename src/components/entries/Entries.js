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

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

function Entries({entries, time, getEntries}) {
    let querry = useQuerry();

    useEffect(() => {
        getEntries()
    }, [ time])

    const fetchSingleEntry = () => {

    }

    return (
        
        <div className="entries-entry-section">
            <div className="flexed-item">
            <h5 className="page-title">All Enteries</h5>
                {/* <EmptyEntries /> */}
            { entries && entries.length > 0 
                ?
                entries.map((val) => {
                    return (
                    <section>
                        <Link to={`/entries/?id=${val.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <section className="entries-section">
                                <div>
                                    <p className="entry-date">{dayjs(val.date).format('ll')}</p>
                                    <p className="entry-title">{val.title}</p>
                                </div>
                                <div className="arrow-div">
                                    <img src={arrow} alt="arrow-left"/>        
                                </div>
                            </section>   
                         </Link>
                    </section>

                    )
                })
                :
                <section>
                    <EmptyEntries />
                </section> 
               
            } 
        </div> 
         <div className="flexed-item">
            <Entry id={querry.get('id')} />
          </div>  
        </div>
    )
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
  
