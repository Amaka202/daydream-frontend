import React from 'react'
import arrow from '../../img/arrow-left.png';
import '../../styles/entries.css'
import EmptyEntries from './EmptyEntries';

function Entries() {
    return (
        <div>
            <h5 className="page-title">All Enteries</h5>
            <section>
                <EmptyEntries />
            </section>
            {/* <section>
            <section className="entries-section">
                <div>
                    <p className="entry-date">12 Febuary</p>
                    <p className="entry-title">Awesome day at the Beach</p>
                </div>
                <div className="arrow-div">
                    <img src={arrow} alt="arrow-left"/>        
                </div>
            </section>
            <section className="entries-section">
                <div>
                    <p className="entry-date">12 Febuary</p>
                    <p className="entry-title">Awesome day at the Beach</p>
                </div>
                <div className="arrow-div">
                    <img src={arrow} alt="arrow-left"/>        
                </div>
            </section>
            <section className="entries-section">
                <div>
                    <p className="entry-date">12 Febuary</p>
                    <p className="entry-title">Awesome day at the Beach</p>
                </div>
                <div className="arrow-div">
                    <img src={arrow} alt="arrow-left"/>        
                </div>
            </section>
            <section className="entries-section">
                <div>
                    <p className="entry-date">12 Febuary</p>
                    <p className="entry-title">Awesome day at the Beach</p>
                </div>
                <div className="arrow-div">
                    <img src={arrow} alt="arrow-left"/>        
                </div>
            </section>
            </section> */}
        </div>
    )
}

export default Entries
