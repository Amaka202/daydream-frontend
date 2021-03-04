import React, {useEffect, useState} from 'react'
import {connect } from 'react-redux';
import {getEntries, deleteEntry} from '../../store/actions/entriesActions';
import {withRouter} from "react-router";
import { Popconfirm } from 'antd';
import { useHistory} from 'react-router-dom';
import dayjs from 'dayjs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import tooTired from '../../img/too-tired.png'
import '../../styles/entries.css'
import EditEntry from '../EditEntry';


var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)


function Entry({entries, time, match, id, deleteEntry}) {
    // window.location.reload(false);

    const history = useHistory();
    const [show, setShow] = useState(false);

    console.log(id);
    let entryId = match.params.id;
    const element1 = <FontAwesomeIcon icon={faTrash} />
    const element2 = <FontAwesomeIcon icon={faEdit} />
    
    useEffect(() => {
        getEntries()
    }, [ time])

    const myFormatedDate = (date) => {
        return dayjs(date).format('ll')
    }

    const entry = entries && entries.filter(val => val.id === id) 

    const handleDelete = (id) => {
        deleteEntry(id);
        history.push('/entries')
        window.location.reload();

    }

    const handlecancel = () => {
        return;
    }

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }
    // entry && console.log(entry[0].date);
    return (
        
        <div>
            {id 
            ?
              entry && 
                    <div className="entry-section">
                    <div>
                    <div style={{marginBottom: '2rem'}}>
                        <p className="entry-date">{dayjs(entry[0].date).format('ll')}</p>
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
                        <div style={{color: '#AEAEAE'}} onClick={showModal}>
                            {element2}
                        </div>
                        <Popconfirm
                            title="Are you sure to delete this entry?"
                            onConfirm={() => handleDelete(id)}
                            onCancel={handlecancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <a href="#">
                                <div style={{color: '#FF0202'}}>
                                    {element1}
                                </div>
                            </a>
                        </Popconfirm>
                    </div>
                    <EditEntry show={show} handleClose={hideModal} entryId={id} entry={entry} myFormatedDate={myFormatedDate}/>
                    </div>
                </div>
            :
                <div>
                    <p>Click on any Entry to view details</p>
                </div>
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
        getEntries: () => dispatch(getEntries()),
        deleteEntry: (entryId) => dispatch(deleteEntry(entryId))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Entry));
  
