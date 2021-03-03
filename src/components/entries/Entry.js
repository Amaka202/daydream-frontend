import React, {useEffect} from 'react'
import {connect } from 'react-redux';
import {getEntries} from '../../store/actions/entriesActions';
import {withRouter} from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import tooTired from '../../img/too-tired.png'
import '../../styles/entries.css'

function Entry({entries, time, match, id}) {
    console.log(id);
    let entryId = match.params.id;
    console.log(entryId);
    const element1 = <FontAwesomeIcon icon={faTrash} />
    const element2 = <FontAwesomeIcon icon={faEdit} />
    
    useEffect(() => {
        getEntries()
    }, [ time])

    const entry = entries && entries.filter(val => val.id === id) 

    // entry && console.log(entry[0].date);
    return (
        
        <div>
            {id 
            ?
              entry && 
                    <div className="entry-section">
                    <div>
                    <div style={{marginBottom: '2rem'}}>
                        <p className="entry-date">{entry[0].date}</p>
                        <p className="entry-title">{entry[0].title}</p>
                    </div>
                    <div>
                        <div className="entry-img-div">
                            <img src={tooTired} alt=""/>
                        </div>
                        <div className="entry-text">
                            <p>
                           {entry[0].entry}
                            </p>
                        </div>
                    </div>
                    <div className="trash-icon">
                        <div style={{color: '#AEAEAE'}}>
                            {element2}
                        </div>
                        <div style={{color: '#FF0202'}}>
                            {element1}
                        </div>
                    </div>
                    </div>
                </div>
            :
                <h3>hey hmm</h3>
            }

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
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Entry));
  
