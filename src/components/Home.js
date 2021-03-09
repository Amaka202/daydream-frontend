import React from 'react';
import { Button } from 'rsuite';
import {useHistory} from 'react-router-dom';
import HomeHeader from './headers/HomeHeader';
import '../styles/home.css';
import heroPic from '../img/hero-pic.png';
import spiral from '../img/spiral.png';
import mobileMockup from '../img/phone-mock-up.png';
import quotesopen from '../img/quotes-open.png';
import quotesclose from '../img/quotes-close.png';
import forWritters from '../img/for-writers.png'
import forMultitask from '../img/multi-real.png'
import forEveryone from '../img/for-multitaskers.png'
import tooTired from '../img/too-tired.png'
import twiterLogo from '../img/twitter.png'
import blac from '../img/blac-chyna.jpg'
import kim from '../img/kim.jpg'
import kylie from '../img/kylie.jpg'
import drake from '../img/drake.jpg'
import MyFooter from './MyFooter';

function Home() {
    const history = useHistory();

    const redirectToSignUp = () => {
        history.push('/signup')
    }
    return (
        <div className="home-container">
            <header>
                <HomeHeader />
            </header>
            <section className="page-container">
                <div className="hero-section page-padding">
                    <section className=" flexed">
                        <div className="hero-write-up flex-item">
                            <h2>The <span style={{color: 'rgba(255, 2, 2, 0.8)'}}>most</span> trusted</h2>
                            <h2> online private journal </h2>
                            <h2>and reminder app</h2>
                            <p>Write journals online  securely  </p>
                            <p>login, make an entry, retrieve any time</p>
                            <p> set and get email reminder on upcoming tasks.</p>
                        </div>
                        <div className="hero-img-div flex-item">
                        <img src={heroPic} alt="hero-pic"/>
                        </div>
                    </section>
                    <div className="hero-btn">
                       <Button className="primary-btn" onClick={redirectToSignUp}>GET STARTED</Button>
                    </div>
                </div>
                <section className="spiral-section">
                    <img src={spiral} alt="spiral"/>
                </section>
                <section className="phone-mockup-section flexed page-padding">
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
                <section className="app-desc page-padding">
                    <section className="flexed desc-item">
                        <div className="flex-item desc-write-up">
                            <h4>For Writers</h4>
                            <p>Write out your thoughts, ideas and feelings anytime as they come. Login into your account from any device to access your entries, safely, securely, privately,  </p>
                        </div> 
                        <div className="flex-item">
                            <img src={forEveryone} alt="writer"/>
                        </div>
                    </section>
                    <section className="reverse-flexed desc-item">
                    <div className="flex-item">
                            <img src={forMultitask} alt="writer"/>
                    </div>
                        <div className="flex-item desc-write-up">
                            <h4>For Multi-taskers</h4>
                            <p>Dont worry about forgetting a task or an event, don't depend solely on phone reminders. Set reminders on here and get emails one hour before time. From any device, anywhere! </p>
                        </div>
                    </section>
                    <section className="flexed desc-item">
                        <div className="flex-item desc-write-up">
                            <h4>For Everyone</h4>
                            <p>This app is indeed for anyone who has a need of securely and privately keeping diaries, No other person has access but you! Intuitive, user friendly, no unwanted emails all for free!</p>
                        </div>
                        <div className="flex-item">
                            <img src={forWritters} alt="writer"/>
                        </div>
                    </section>

                </section>
                <section className="spiral-section">
                    <img src={spiral} alt="spiral"/>
                </section>
                <section className="testimonial-section page-padding">
                    <h4>Why Daydream?</h4>
                    <div className="flexed">
                        <div className="flex-item tweet">
                            <div className="testimonial-body">
                                <div className="testimonial-body dp-div">
                                    <img src={blac} alt="twiter-dp"/>
                                    <div>
                                        <p style={{fontWeight: 'bold'}}>Blac Chyna</p>
                                        <p style={{color: '#BBBCBD'}}>@blacchyna</p>
                                    </div>
                                </div>
                                <div className="twitter-logo-div">
                                    <img src={twiterLogo} alt="twitter-logo" />
                                </div>
                            </div>
                            <p className="" style={{color: '#555D61', marginTop: '1rem'}}><span style={{color: '#2AA4EF'}}>@daydream</span> is the best productivity app I have. So on point!</p>
                        </div>
                        <div className="flex-item tweet">
                            <div className="testimonial-body">
                                <div className="testimonial-body dp-div">
                                    <img src={kim} alt="twiter-dp"/>
                                    <div>
                                        <p style={{fontWeight: 'bold'}}>Kim Kardashian</p>
                                        <p style={{color: '#BBBCBD'}}>@kimkardashian</p>
                                    </div>
                                </div>
                                <div className="twitter-logo-div">
                                    <img src={twiterLogo} alt="twitter-logo" />
                                </div>
                            </div>
                            <p className="" style={{color: '#555D61', marginTop: '1rem'}}> I love <span style={{color: '#2AA4EF'}}>@daydream</span> so much. I dont have to bother about anyone going to read my diary</p>
                        </div>
                    </div>
                    <div className="flexed">
                        <div className="flex-item tweet">
                            <div className="testimonial-body">
                                <div className="testimonial-body dp-div">
                                    <img src={kylie} alt="twiter-dp"/>
                                    <div>
                                        <p style={{fontWeight: 'bold'}}>Kylie Jenner</p>
                                        <p style={{color: '#BBBCBD'}}>@kyliejenner</p>
                                    </div>
                                </div>
                                <div className="twitter-logo-div">
                                    <img src={twiterLogo} alt="twitter-logo" />
                                </div>
                            </div>
                            <p className="" style={{color: '#555D61', marginTop: '1rem'}}><span style={{color: '#2AA4EF'}}>@daydream</span> is like the best guys! the email reminders are so on point</p>
                        </div>
                        <div className="flex-item tweet">
                            <div className="testimonial-body">
                                <div className="testimonial-body dp-div">
                                    <img src={drake} alt="twiter-dp"/>
                                    <div>
                                        <p style={{fontWeight: 'bold'}}>Drake</p>
                                        <p style={{color: '#BBBCBD'}}>@drake</p>
                                    </div>
                                </div>
                                <div className="twitter-logo-div">
                                    <img src={twiterLogo} alt="twitter-logo" />
                                </div>
                            </div>
                            <p className="" style={{color: '#555D61', marginTop: '1rem'}}> Highlight of my day is logging into my <span style={{color: '#2AA4EF'}}>@daydream</span> account to record music lines as they come. </p>
                        </div>
                    </div>
                </section>
                <section className="spiral-section">
                    <img src={spiral} alt="spiral"/>
                </section>
                <section className="join-section page-padding">
                    <p>JOIN NOW AND START USING THIS AWESOME </p>
                    <p>WEBSITE FOR FREE!</p>
                    <Button className="primary-btn" onClick={redirectToSignUp}>GET STARTED</Button>
                </section>
            </section>
            <footer>
                <MyFooter />
             </footer>
        </div>
    )
}

export default Home;
