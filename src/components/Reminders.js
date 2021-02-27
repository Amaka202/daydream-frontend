import React from 'react'
import {connect} from 'react-redux';
import {createEntry} from '../store/actions/entriesActions';
import SignedInHeader from './headers/SignedInHeader';

function Reminders({reminders}) {
    return (
        <div>
            <SignedInHeader />
            <h1>hey</h1>
            
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
