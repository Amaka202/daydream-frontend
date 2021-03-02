import React, { useState, useEffect } from 'react'
import arrow from '../../img/arrow-left.png';
import dayjs from 'dayjs';
import '../../styles/entries.css'
import {connect, useDispatch} from 'react-redux';
import EmptyEntries from './EmptyEntries';
import {getEntries} from '../../store/actions/entriesActions';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

function Entries({entries, time}) {
    const [loading, setLoading] = useState();
    const [entriesArray, setEntriesArray] = useState([]);
    const dispatch = useDispatch()
    console.log(entries);
    let mounted = true;

    useEffect(() => {
        dispatch(getEntries())
    }, [])
    return (
        <div>
            <h5 className="page-title">All Enteries</h5>
                <EmptyEntries />
            { entries && entries.data.data.length === 0 
                ?
                <section>
                    <EmptyEntries />
                </section> 
                :
                entries.data.data.map((val) => {
                    return (
                    <section>
                        <section className="entries-section">
                            <div>
                                <p className="entry-date">{dayjs(val.date).format('ll')}</p>
                                <p className="entry-title">{val.title}</p>
                            </div>
                            <div className="arrow-div">
                                <img src={arrow} alt="arrow-left"/>        
                            </div>
                        </section>
                    </section>

                    )
                })
            } 
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        entries: state.entries,
        time: state.entries.time,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        // getEntries: () => dispatch(getEntries())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Entries);
  
