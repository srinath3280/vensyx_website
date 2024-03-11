import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function LogMode() {

    return (
        <>
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
                <div id="logmode">
                    <h1 style={{ color: 'white' }}>Log-Mode</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '50px', marginRight: '50px', textAlign: 'justify', fontSize: '20px' }}>
                        <h4 style={{ color: 'white' }}>Logistic Movement optimization Delivery Engagement (Log-MODE)</h4>
                        <p style={{ color: 'white',fontFamily:'Raleway, sans-serif' }}>Log-MODE is a universal program designed to control all stages of delivery and field services operations. The service allows to perform a wide range of tasks in logistics and delivery – transportation arrangements, transport processes optimization and cost saving.</p>
                        <p style={{ color: 'white',fontFamily:'Raleway, sans-serif' }}>
                            Log-MODE comprises a web-version for dispatchers and a mobile application for driver.  Web-version ensures effective operating procedures to create trips, order placement, planning and distribution, Google Maps-based routing, delivery process monitoring and coordination. Log-MODE mobile app is designed for drivers to easily manage to deliver products to specified locations.
                        </p>
                        <p style={{ color: 'white',fontFamily:'Raleway, sans-serif' }}>
                            Log-MODE used bigdata platform to create delivery schedule dynamic, based on the inelegancy options on urgent need basis, low fright charges, return fleet and availability of truck and driver timings.
                        </p>
                        <p style={{ color: 'white',fontFamily:'Raleway, sans-serif' }}>
                            Log-MODE have following features.
                        </p>
                        <h4 style={{ color: 'white' }}>Real-time tracking</h4>
                        <h5 style={{ color: 'white' }}>
                            Driver can see his delivery location and Route map in his mobile
                        </h5>
                        <h5 style={{ color: 'white' }}>
                            Manager Can see all movements in his Dashboard
                        </h5>
                        <img src="/images/scr1.png" alt="" width="600px" height="300px" />
                        <p style={{ color: 'white',fontFamily:'Raleway, sans-serif' }}>
                            <b>Manager can change the schedule trips based on circumstances.</b>
                        </p>
                        <img src="/images/scr2.png" alt="" width="600px" height="300px" />
                        <h4 style={{ color: 'white' }}>
                            Request & Approvals
                        </h4>
                        <p style={{ color: 'white',fontFamily:'Raleway, sans-serif' }}>
                            Approval process was implemented for the requests made by drivers like fuel, delivery problems, vehicle problems.
                        </p>
                        <img src="/images/scr3.png" alt="" width="600px" height="300px" />
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
        </>
    )
}
export default LogMode