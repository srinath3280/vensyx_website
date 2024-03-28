import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function Teams() {
    return (
        <div>
            <div id='socialMedia'>
                <a href="tel: +91 9000316721" target="_blank">
                    <i class="bi bi-telephone">
                        <span class="tooltiptext">+91-9000316721</span>
                    </i>
                </a>
                <a href="mailto:info@vensyx.com?subject=subject text" target="_blank">
                    <i class="bi bi-envelope-at">
                        <span class="tooltiptext">info@vensyx.com</span>
                    </i>
                </a>
                <a href="https://www.linkedin.com/company/vensyx-data-solutions-pvt-ltd-/about/" target="_blank">
                    <i class="bi bi-linkedin">
                        <span class="tooltiptext">https://www.linkedin.com/vensyx</span>
                    </i>
                </a>
                {/* <a href="" target="_blank">
                        <i class="bi bi-facebook">
                            <span class="tooltiptext">https://www.facebook.com/vensyx</span>
                        </i>
                    </a> */}
                <a href="https://twitter.com/vensyx2014" target="_blank">
                    <i class="bi bi-twitter">
                        <span class="tooltiptext">https://twitter.com/vensyx2014</span>
                    </i>
                </a>
                <a href="https://wa.me/+919000316721" target="_blank">
                    <i class="bi bi-whatsapp">
                        <span class="tooltiptext">+91-9000316721</span>
                    </i>
                </a>
            </div>
            <div id="makeanenquiry">
                <a href="/form">
                    <span id="make" style={{ width: '40px', height: '100px', padding: '12px', backgroundColor: 'rgb(230, 16, 165)', color: 'white' }}>Make An Enquiry</span>
                </a>
            </div>
            <main>
                <div id="aboutus">
                    <h1 style={{ color: 'white' }}>Team</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
                        <div style={{ marginRight: '50px' }}>
                            <button id="modal1" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#StaticBackDrop">
                                <div class="card" style={{ width: "300px", height: '350px', border: 'none' }}>
                                    <img src="/images/team2.jpeg" class="card-img-top" alt="..." style={{ width: '100%', height: '250px' }} />
                                    <div class="card-body">
                                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Venkata Subba Reddy Atluri</span>
                                        <p class="card-text" style={{ fontSize: '20px' }}>
                                            FOUNDER AND CEO
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <div class='modal' id="StaticBackDrop">
                                <div class="modal-dialog">
                                    <div class="modal-content" style={{ width: '1200px', height: '550px', left: '-350px', top: '50px', bottom: '50px', display: 'flex', flexDirection: 'row' }}>
                                        <div class="modal-body" style={{ width: '40%' }}>
                                            <img src="/images/team2.jpeg" alt="" style={{ width: '350px', height: '350px', marginTop: '75px' }} />
                                        </div>
                                        <div class="modal-header" style={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '30px', overflow: 'scroll' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <h1 class="modal-title" style={{ marginRight: '150px' }}>Venkata Subba Reddy Atluri</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <p class="modal-text" style={{ fontSize: '22px' }}>Founder and CEO</p>
                                            <p style={{ fontSize: '18px', textAlign: 'justify', fontFamily: 'Raleway, sans-serif', }}>
                                                Venkata Subba Reddy Atluri has more than 25 years of IT experience in the space of Data Management & Data warehouse technologies. Worked to build analytical systems, Data Lakes, EDW & BI systems for different domains telecom, retail, financials & Manufacturing. And build large-scale data management systems from 4 to 20 Pita bytes
                                            </p>
                                            <p style={{ fontSize: '18px', textAlign: 'justify', fontFamily: 'Raleway, sans-serif', }}>
                                                Have a proven track record of improving data quality, mitigating data risks, achieving productivity and efficiency saves, reducing costs, and building a strong and efficient team. Also worked and demonstrated strong global stakeholder partnership, by working with teams across Asia, EMEA, and US, to drive and implement robust data solutions.
                                            </p>
                                            <p style={{ fontSize: '18px', textAlign: 'justify', fontFamily: 'Raleway, sans-serif', }}>
                                                In this journey worked for prestigious organizations like Tesco, PayPal, Etisalat, Uninor,  Orange Network, Dialog Telecom, and service-based companies Wipro, Tech Mahindra, Nuwara Systems and also worked e-governance for GOA state. In this career Played different roles as a Database Architect, ETL Architect, OLAP Architect, MDM Architect, Information Architect, E2E Architect, Senior Solution Architect, and Chief Technical Architect.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button id="modal1" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#StaticBackDrop1">
                                <div class="card" style={{ width: "300px", height: '350px', border: 'none' }}>
                                    <img src="/images/team1.jpeg" class="card-img-top" alt="..." style={{ width: '100%', height: '250px' }} />
                                    <div class="card-body">
                                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Dr. BaskeraRao Shastri</span>
                                        <p class="card-text" style={{ fontSize: '20px' }}>
                                            DIRECTOR
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <div class='modal' id="StaticBackDrop1">
                                <div class="modal-dialog">
                                    <div class="modal-content" style={{ width: '1200px', height: '550px', left: '-350px', top: '50px', bottom: '50px', display: 'flex', flexDirection: 'row' }}>
                                        <div class="modal-body" style={{ width: '40%' }}>
                                            <img src="/images/team1.jpeg" alt="" style={{ width: '350px', height: '350px', marginTop: '75px' }} />
                                        </div>
                                        <div class="modal-header" style={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '30px', overflow: 'scroll' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <h1 class="modal-title" style={{ marginRight: '240px' }}>Dr. BaskeraRao Shastri</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <p class="modal-text" style={{ fontSize: '22px' }}>Director</p>
                                            <p style={{ fontSize: '18px', textAlign: 'justify', fontFamily: 'Raleway, sans-serif', }}>
                                                Dr. BaskeraRao Shastri, a distinguished scholar, holds a doctorate from Multimedia University, Malaysia (MMU), an MBA from RMIT University, Australia, and a Master’s in Project Management from George Washington University, USA. An alumni of the National University of Malaysia (UKM) and an associate member of the Malaysian Institute of Management (MIM), he brings over 30 years of telecommunications expertise.
                                            </p>
                                            <p style={{ fontSize: '18px', textAlign: 'justify', fontFamily: 'Raleway, sans-serif', }}>
                                                In his extensive career at Telekom Malaysia(TM), Dr. BaskeraRao Shastri has excelled in developing and sustaining global markets for Telecommunications Products and Services, particularly in International Bandwidth, VSAT, Content Delivery platforms, and Data-Centres. Leading Digital Start-ups, he aims to enhance the value of offered services and products, ensuring substantial returns for consumers and corporate clients.
                                            </p>
                                            <p style={{ fontSize: '18px', textAlign: 'justify', fontFamily: 'Raleway, sans-serif', }}>
                                                Notable contributions include his role in the Project Management of the WiFi Project for Schools in Mauritius and the VSAT Project for Timor Leste. Actively engaged in Smart Meters and E-Sport Gaming projects abroad, Dr. BaskeraRao Shastri proficiency in gathering user requirements, finalizing specifications, and overseeing project activities is critical for success.
                                            </p>
                                            <p style={{ fontSize: '18px', textAlign: 'justify', fontFamily: 'Raleway, sans-serif', }}>
                                                Beyond his professional endeavors, Dr. BaskeraRao has held key positions, including Chairman of Sathya Sai Baba of Batu Caves Branch and Associate Member of JJ Consultants – Zambia Investment Committee. He is a Central Committee Member of the Islamic Green Development Bureau of the UK. As a part-time lecturer at Coventry University, he passionately delivers high-quality, result-oriented training for the MBA program.
                                            </p>
                                            <p style={{ fontSize: '18px', textAlign: 'justify', fontFamily: 'Raleway, sans-serif', }}>
                                                In January 2024, Dr. BaskeraRao Shastri assumed the role of Director, overseeing Malaysian operations at Vensyx Data Solutions Sdn Bhd, following his position as Chief Operating Officer at Innojc Technologies Sdn Bhd until 2023. His leadership continues to leave an enduring impact in the industries he serves.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div style={{ width: '1px', height: '225px', border: '1px solid grey' }}></div>
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
                        <div style={{ width: '1px', height: '225px', border: '1px solid grey', }}></div>
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
                        <div style={{ width: '1px', height: '225px', border: '1px solid grey' }}></div>
                        <div id="footer4" class='links' style={{ width: '25%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <h3 style={{ color: 'white', marginLeft: '30px' }}>Company</h3>
                            <div class='links'>
                                <ul>
                                    <li><a href="/corporate/aboutus">About Us</a></li>
                                    <li><a href="/corporate/vissionmission">Vission & Mission</a></li>
                                    <li><a href="/corporate/corevalue">Core Value</a></li>
                                    <li><a href="/corporate/socialresponsibility">Social Responsibility</a></li>
                                    <li><a href="/corporate/location">Location</a></li>
                                    <li><a href="/corporate/teams">Team</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 'auto', height: '1px', border: '1px solid grey' }}></div>
                    <div id="footertext">
                        <span>
                            <a href="/termsofuse" style={{ marginRight: '25px' }}>Terms of Use</a>
                            <a href="/privacypolicy">Privacy Policy</a>
                        </span>
                        <p style={{ color: 'white' }}>Copyright © 2014 - VENSYX Data Solutions</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Teams