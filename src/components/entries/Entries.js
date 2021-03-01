import React, { useState, useEffect } from 'react'
import arrow from '../../img/arrow-left.png';
import '../../styles/entries.css'
import {connect} from 'react-redux';
import EmptyEntries from './EmptyEntries';
import {getEntries} from '../../store/actions/entriesActions';

function Entries({entries, getEntries, time}) {
    const [loading, setLoading] = useState();

    useEffect(() => {
        console.log(entries);
        if(!entries){
            return
        }else{
            // getEntries()
        }
    }, [entries])
    return (
        <div>
            <h5 className="page-title">All Enteries</h5>
                <EmptyEntries />
            {/* { entries && entries.length === 0 
                ?
                <section>
                    <EmptyEntries />
                </section> 
                :
                entries.map(() => {
                    return (
                    <section>
                        <section className="entries-section">
                            <div>
                                <p className="entry-date">12 Febuary</p>
                                <p className="entry-title">Awesome day at the Beach</p>
                            </div>
                            <div className="arrow-div">
                                <img src={arrow} alt="arrow-left"/>        
                            </div>
                        </section>
                    </section>

                    )
                })
            } */}
            
            
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
        getEntries: () => dispatch(getEntries())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Entries);
  
