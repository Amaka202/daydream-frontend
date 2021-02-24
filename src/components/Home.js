import React from 'react';
import { Button } from 'rsuite';
import HomeHeader from './headers/HomeHeader';
import '../styles/home.css';
import heroPic from '../img/hero-pic.png';
import spiral from '../img/spiral.png';
import mobileMockup from '../img/phone-mock-up.png';
import quotesopen from '../img/quotes-open.png';
import quotesclose from '../img/quotes-close.png';
import forWritters from '../img/for-writers.png'
import forMultitask from '../img/for-everyone.png'
import forEveryone from '../img/for-multitaskers.png'
import tooTired from '../img/too-tired.png'

function Home() {
    return (
        <div className="app-container">
            <header>
                <HomeHeader />
            </header>
            <section className="page-container">
                <section className="hero-section flexed">
                    <div className="hero-write-up flex-item">
                        <h2>The <span style={{color: 'rgba(255, 2, 2, 0.8)'}}>most</span> trusted online</h2>
                        <h2>private journal and</h2>
                        <h2>reminder app</h2>
                        <p>Write private online journals securely and anonymously or public </p>
                        <p>journals to share and get connected with other journal writers.</p>
                        <Button className="primary-btn">GET STARTED</Button>
                    </div>
                    <div className="hero-img-div flex-item">
                       <img src={heroPic} alt="hero-pic"/>
                    </div>
                </section>
                <section className="spiral-section">
                    <img src={spiral} alt="spiral"/>
                </section>
                <section className="phone-mockup-section flexed">
                    <div className="phone-mockup flex-item">
                        <img src={mobileMockup} alt="phone-mockup"/>
                    </div>
                    <div className="mockup-write">
                       <p> 
                       <img src={quotesopen} alt='q'/> 
                           The life of every person is like a diary in which he </p>
                        <p> means to write one story, and writes another. When all </p>
                        <p> is said and done, leading a good life is more important </p>
                        <p> than keeping a good diary
                        <img src={quotesclose} alt='q'/> 
                            </p>
                        <p className="quotes-author"> J.M. Barrie</p>  
                    </div>
                </section>
                <section className="spiral-section">
                    <img src={spiral} alt="spiral"/>
                </section>
                <section className="app-desc">
                    <section className="flexed desc-item">
                        <div className="flex-item desc-write-up">
                            <h4>For Writers</h4>
                            <p>Writing out your thoughts and feelings gets better
                                with like-minded people around you. Goodnight 
                                Journal connects journal writers like you together so
                                you can share your thoughts and your life stories
                                with others</p>
                        </div>
                        <div className="flex-item">
                            <img src={forWritters} alt="writer"/>
                        </div>
                    </section>
                    <section className="flexed desc-item">
                    <div className="flex-item">
                            <img src={forMultitask} alt="writer"/>
                    </div>
                        <div className="flex-item desc-write-up">
                            <h4>For Writers</h4>
                            <p>Writing out your thoughts and feelings gets better
                                with like-minded people around you. Goodnight 
                                Journal connects journal writers like you together so
                                you can share your thoughts and your life stories
                                with others</p>
                        </div>
                    </section>
                    <section className="flexed desc-item">
                        <div className="flex-item desc-write-up">
                            <h4>For Writers</h4>
                            <p>Writing out your thoughts and feelings gets better
                                with like-minded people around you. Goodnight 
                                Journal connects journal writers like you together so
                                you can share your thoughts and your life stories
                                with others</p>
                        </div>
                        <div className="flex-item">
                            <img src={forEveryone} alt="writer"/>
                        </div>
                    </section>
                    <section className="flexed desc-item">
                    <div className="flex-item">
                            <img src={tooTired} alt="writer"/>
                        </div>
                        <div className="flex-item desc-write-up">
                            <h4>For Writers</h4>
                            <p>Writing out your thoughts and feelings gets better
                                with like-minded people around you. Goodnight 
                                Journal connects journal writers like you together so
                                you can share your thoughts and your life stories
                                with others</p>
                        </div>
                    </section>
                </section>
                <section className="spiral-section">
                    <img src={spiral} alt="spiral"/>
                </section>
            </section>
            <footer>
             </footer>
        </div>
    )
}

export default Home
