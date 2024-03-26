import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function Teams() {
    return (
        <div>
            <div id='socialMedia'>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-whatsapp"></i>
            </div>
            <div id="makeanenquiry">
                <a href="/form">
                    <span id="make" style={{ width: '40px', height: '100px', padding: '12px', backgroundColor: 'rgb(230, 16, 165)', color: 'white' }}>Make An Enquiry</span>
                </a>
            </div>
            <main>
                <div id="aboutus">
                    <h1 style={{ color: 'white' }}>Teams</h1>
                    <div id="aboutusblock" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div id="aboutusimage" style={{ width: '40%', paddingLeft: '50px', paddingTop: '50px' }}>
                            <img src="/images/team1.jpeg" alt="aboutus" width="100%" height="550px" />
                            <span style={{color:'orangered',fontSize:'40px'}}>Dr. BaskeraRao Shastri</span>
                        </div>
                        <div id="aboutuscontent" style={{ width: '60%', padding: '50px', textAlign: 'justify', fontSize: '25px',paddingBottom:'25px' }}>
                            <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif',marginBottom:'50px' }}>
                                Dr. BaskeraRao Shastri, a distinguished scholar, holds a doctorate from Multimedia University, Malaysia (MMU), an MBA from RMIT University, Australia, and a Master’s in Project Management from George Washington University, USA. An alumni of the National University of Malaysia (UKM) and an associate member of the Malaysian Institute of Management (MIM), he brings over 30 years of telecommunications expertise.
                            </p>
                            <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                                In his extensive career at Telekom Malaysia(TM), Dr. BaskeraRao Shastri has excelled in developing and sustaining global markets for Telecommunications Products and Services, particularly in International Bandwidth, VSAT, Content Delivery platforms, and Data-Centres. Leading Digital Start-ups, he aims to enhance the value of offered services and products, ensuring substantial returns for consumers and corporate clients.
                            </p>
                        </div>
                    </div>
                    <div style={{ color: 'white', fontFamily: 'Raleway, sans-serif', padding: '50px', fontSize: '27px', textAlign: 'justify',paddingTop:'0px' }}>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                            Notable contributions include his role in the Project Management of the WiFi Project for Schools in Mauritius and the VSAT Project for Timor Leste. Actively engaged in Smart Meters and E-Sport Gaming projects abroad, Dr. BaskeraRao Shastri proficiency in gathering user requirements, finalizing specifications, and overseeing project activities is critical for success.
                        </p>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                            Beyond his professional endeavors, Dr. BaskeraRao has held key positions, including Chairman of Sathya Sai Baba of Batu Caves Branch and Associate Member of JJ Consultants – Zambia Investment Committee. He is a Central Committee Member of the Islamic Green Development Bureau of the UK. As a part-time lecturer at Coventry University, he passionately delivers high-quality, result-oriented training for the MBA program.
                        </p>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                            In January 2024, Dr. BaskeraRao Shastri assumed the role of Director, overseeing Malaysian operations at Vensyx Data Solutions Sdn Bhd, following his position as Chief Operating Officer at Innojc Technologies Sdn Bhd until 2023. His leadership continues to leave an enduring impact in the industries he serves.
                        </p>
                    </div>
                </div>
            </main>

            <footer>
                <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: 'black', width: 'auto', height: 'auto', display: 'flex', flexDirection: 'row', padding: '20px', textAlign: 'start' }}>
                        <div id="footer1" style={{ width: '25%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <h3 style={{ color: 'white', marginLeft: '35px' }}>Solutions</h3>
                            <div class='links'>
                                <ul>
                                    <li><a href="/solutions/bigdata">Big Data & Advanced Analytics</a></li>
                                    <li><a href="/solutions/businessIntelligence">Business Intelligence solutions</a></li>
                                    <li><a href="/solutions/datamanagement">Data Management</a></li>
                                    <li><a href="/solutions/enterprisedatawarehouse">Enterprise Data Warehouse</a></li>
                                    <li><a href="/solutions/applicationmiddleware">Application Middleware Management</a></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '1px', height: '200px', border: '1px solid grey' }}></div>
                        <div id="footer2" style={{ width: '25%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <h3 style={{ color: 'white', marginLeft: '35px' }}>Services</h3>
                            <div class='links'>
                                <ul>
                                    <li><a href="/services/enterprisemobility">Enterprise Mobility Service</a></li>
                                    <li><a href="/services/mobileapps">Mobile Apps Development</a></li>
                                    <li><a href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
                                    <li><a href="/services/webapplication">Web Application Development</a></li>
                                    <li><a href="/services/testing">Testing and QA Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '1px', height: '200px', border: '1px solid grey', }}></div>
                        <div id="footer3" class='links' style={{ width: '25%', height: 'auto' }}>
                            <h3 style={{ color: 'white', marginLeft: '30px' }}>Industries</h3>
                            <div class='links'>
                                <ul>
                                    <li><a href="/industries/telecommunications">Telecommunications</a></li>
                                    <li><a href="/industries/retail">Retail</a></li>
                                    <li><a href="/industries/financialservices">Financial Services</a></li>
                                    <li><a href="/industries/manufacturing">Manufacturing</a></li>
                                    <li><a href="/industries/utilities">Utilities</a></li>
                                    <li><a href="/industries/government">Government</a></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '1px', height: '200px', border: '1px solid grey' }}></div>
                        <div id="footer4" class='links' style={{ width: '25%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <h3 style={{ color: 'white', marginLeft: '30px' }}>Company</h3>
                            <div class='links'>
                                <ul>
                                    <li><a href="/corporate/aboutus">About Us</a></li>
                                    <li><a href="/corporate/vissionmission">Vission & Mission</a></li>
                                    <li><a href="/corporate/corevalue">Core Value</a></li>
                                    <li><a href="/corporate/socialresponsibility">Social Responsibility</a></li>
                                    <li><a href="/corporate/location">Loaction</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="footertext">
                        <p style={{ color: 'white' }}>This website may store or retrive your browser information for personalizing, digital experience.To access more about our privacy policy. <a href="">click here</a></p>
                        <p style={{ color: 'white' }}>Copyright © 2014 - VENSYX Data Solutions</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Teams