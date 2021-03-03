import React from 'react'
import {connect} from 'react-redux';
import {createEntry} from '../../store/actions/entriesActions';
import SignedInHeader from '../headers/SignedInHeader';
import MyFooter from '../MyFooter';
import currentWindowWidth from '../helpers/getCurrentWidth';
import Entries from './Entries';
import '../../styles/displayEntries.css'
import Entry from './Entry';
import EntryCalender from './EntryCalender';
import EmptyEntries from './EmptyEntries';
import MakeEntryButton from '../MakeEntryButton';
function DisplayEnteries({entries}) {
    return (
        <div>
            <header>
                <SignedInHeader />
            </header>
            {currentWindowWidth()[0] > 700 
            ? 
                <div>
                    <div>
                        <MakeEntryButton />
                    </div>
                    <section className="display-entries-section page-padding">
                    <section className="display-entries">
                        <Entries />
                    </section>
                    <section className="display-calender">
                        <EntryCalender />
                    </section>
                </section>
                </div>
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
        // entries: state.entries.enteries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEntry: (entry) => dispatch(createEntry(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayEnteries);
