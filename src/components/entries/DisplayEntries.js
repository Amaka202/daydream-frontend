import React from 'react'
import {connect} from 'react-redux';
import {createEntry} from '../../store/actions/entriesActions';
import SignedInHeader from '../headers/SignedInHeader';
import MyFooter from '../MyFooter';
import currentWindowWidth from '../getCurrentWidth.js';
import Entries from './Entries';
import '../../styles/displayEntries.css'
import Entry from './Entry';
import EntryCalender from './EntryCalender';
import EmptyEntries from './EmptyEntries';
function Enteries({entries}) {
    return (
        <div>
            <header>
                <SignedInHeader />
            </header>
            {currentWindowWidth()[0] > 700 
            ? 
                <section className="display-entries-section page-padding">
                <section className="display-entries">
                        <Entries />
                    </section>
                    <section className="display-entry">
                        <Entry />
                    </section>
                    <section className="display-calender">
                        <EntryCalender />
                    </section>
                </section>
            :

            <section className="display-entries-section page-padding">
                <section>
                        <Entries />
                    </section>
                    <section>
                        <EntryCalender />
                    </section>
             </section>

        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Enteries);