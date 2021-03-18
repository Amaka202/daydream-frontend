import React, {useEffect, useState} from 'react'
import {connect } from 'react-redux';
import {getEntries, deleteEntry} from '../../store/actions/entriesActions';
import {withRouter} from "react-router";
import { Popconfirm } from 'antd';
import { useHistory} from 'react-router-dom';
import dayjs from 'dayjs';
import currentWindowWidth from '../helpers/getCurrentWidth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import tooTired from '../../img/too-tired.png'
import '../../styles/entries.css'
import EditEntry from '../EditEntry';


var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)


function Entry({entries, match, id, deleteEntry}) {

    const history = useHistory();
    const [show, setShow] = useState(false);

    let entryId = match.params.id;
    const element1 = <FontAwesomeIcon icon={faTrash} />
    const element2 = <FontAwesomeIcon icon={faEdit} />

    const handleDelete = (id) => {
        deleteEntry(id);
    }
    
    useEffect(() => {
        getEntries()
    }, [ entries.createEntriesSuccessTime, entries.editEntriesSuccessTime, entries.deleteEntriesSuucessTime])

    useEffect(() => {
        if(entries.deleteEntriesSuucessTime){
            history.push('/entries')
        }
    }, [entries.deleteEntriesSuucessTime])

    const myFormatedDate = (date) => {
        return dayjs(date).format('ll')
    }

    const desktopEntry = entries.entriesData && entries.entriesData.filter(val => val.id === id) 
    const mobileEntry = entries.entriesData && entries.entriesData.filter(val => val.id === entryId) 
    
    entries && console.log(mobileEntry);

    const handlecancel = () => { 
        return;
    }

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    if(currentWindowWidth()[0] > 700){

        return (
            
            <div>
                {id 
                ?
                  entries.entriesData && 
                        <div className="entry-section">
                        <div>
                        <div style={{marginBottom: '2rem'}}>
                            <p className="entry-date">{dayjs(desktopEntry[0].date).format('ll')}</p>
                            <p className="entry-title">{desktopEntry[0].title}</p>
                        </div>
                        <div>
                            <div className="entry-img-div">
                                <img src={tooTired} alt=""/>
                            </div>
                            <div className="entry-text">
                                <p>
                               {desktopEntry[0].entry}
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
                        <EditEntry show={show} handleClose={hideModal} entryId={id} entry={desktopEntry} myFormatedDate={myFormatedDate}/>
                        </div>
                    </div>
                :
                    <div className="text-info">
                        <p>Click on any Entry to view details</p>
                    </div>
                }
    
            </div>
        )
    } else{
        return (
        <div className="entry-section">
                        <div>
                        <div style={{marginBottom: '2rem'}}>
                            <p className="entry-date">{dayjs(mobileEntry[0].date).format('ll')}</p>
                            <p className="entry-title">{mobileEntry[0].title}</p>
                        </div>
                        <div>
                            <div className="entry-img-div">
                                <img src={tooTired} alt=""/>
                            </div>
                            <div className="entry-text">
                                <p>
                               {mobileEntry[0].entry}
                                </p>
                            </div>
                        </div>
                        <div className="trash-icon">
                            <div style={{color: '#AEAEAE'}} onClick={showModal}>
                                {element2}
                             </div>
                            <Popconfirm
                                title="Are you sure to delete this entry?"
                                onConfirm={() => handleDelete(entryId)}
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
                            <EditEntry show={show} handleClose={hideModal} entryId={entryId} entry={mobileEntry} myFormatedDate={myFormatedDate}/>
                        </div>
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.entries);
    return {
        entries: state.entries
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        getEntries: () => dispatch(getEntries()),
        deleteEntry: (entryId) => dispatch(deleteEntry(entryId))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Entry));
  
