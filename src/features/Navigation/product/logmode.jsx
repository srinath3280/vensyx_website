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
                <h1 style={{ color: 'white' }}>Log-Mode</h1>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '50px', marginRight: '50px',textAlign:'justify',fontSize:'20px' }}>
                    <h4 style={{ color: 'white' }}>Logistic Movement optimization Delivery Engagement (Log-MODE)</h4>
                    <p style={{ color: 'white' }}>Log-MODE is a universal program designed to control all stages of delivery and field services operations. The service allows to perform a wide range of tasks in logistics and delivery – transportation arrangements, transport processes optimization and cost saving.</p>
                    <p style={{ color: 'white' }}>
                        Log-MODE comprises a web-version for dispatchers and a mobile application for driver.  Web-version ensures effective operating procedures to create trips, order placement, planning and distribution, Google Maps-based routing, delivery process monitoring and coordination. Log-MODE mobile app is designed for drivers to easily manage to deliver products to specified locations.
                    </p>
                    <p style={{ color: 'white' }}>
                        Log-MODE used bigdata platform to create delivery schedule dynamic, based on the inelegancy options on urgent need basis, low fright charges, return fleet and availability of truck and driver timings.
                    </p>
                    <p style={{ color: 'white' }}>
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
                    <p style={{ color: 'white' }}>
                        <b>Manager can change the schedule trips based on circumstances.</b>
                    </p>
                    <img src="/images/scr2.png" alt="" width="600px" height="300px" />
                    <h4 style={{ color: 'white' }}>
                        Request & Approvals
                    </h4>
                    <p style={{ color: 'white' }}>
                        Approval process was implemented for the requests made by drivers like fuel, delivery problems, vehicle problems.
                    </p>
                    <img src="/images/scr3.png" alt="" width="600px" height="300px" />
                </div>
            </main>

            <footer>
                <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: 'black', width: 'auto', height: 'auto', display: 'flex', flexDirection: 'row', padding: '20px' }}>
                        <div style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Solutions</h3>
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
                        <div style={{ width: '40%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Services</h3>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ width: '50%', height: 'auto', }}>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Enterprise Mobility Service</h5>
                                        <ul>
                                            <li><a href="/services/businessProcess">Business Process Mobilisation</a></li>
                                            <li><a href="/services/b2bmobileapps">B2B Mobile Apps Development</a></li>
                                            <li><a href="/services/enterpriseandroidapp">Enterprise ANdroid App Development</a></li>
                                            <li><a href="/services/enterpriseapp">Enterprise App Distribution</a></li>
                                            <li><a href="/services/enterpriseiosapp">Enterprise IOS App Development</a></li>
                                            <li><a href="/services/mobilebusiness">Mobile Business Intelligence</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Mobile Apps Development</h5>
                                        <ul>
                                            <li><a href="/services/andriodapp">Android App Development</a></li>
                                            <li><a href="/services/window8">Windows8 App Development</a></li>
                                            <li><a href="/services/blackberry">Blackberry App Development</a></li>
                                            <li><a href="/services/iphoneapp">Iphone App Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Business Intelligence Services</h5>
                                        <ul>
                                            <li><a href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ width: '50%', height: 'auto' }}>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Web Application Development</h5>
                                        <ul>
                                            <li><a href="/services/crmapplication">CRM Application Development</a></li>
                                            <li><a href="/services/inventory">Inventory Management</a></li>
                                            <li><a href="/services/contentmanagement">Content Management System</a></li>
                                            <li><a href="/services/customwebapp">Custom Web App Development</a></li>
                                            <li><a href="/services/opensourcedevelopment">OpenSource Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Test & QA Services</h5>
                                        <ul>
                                            <li><a href="/services/automatedtesting">Automated Testing</a></li>
                                            <li><a href="/services/selenium">Selenium</a></li>
                                            <li><a href="/services/qtp">QTP</a></li>
                                            <li><a href="/services/manualtesting">Manual Testing</a></li>
                                            <li><a href="/services/testcomplete">Test Complete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='links' style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Industries</h3>
                            <ul>
                                <li><a href="/industries/telecommunications">Telecommunications</a></li>
                                <li><a href="/industries/retail">Retail</a></li>
                                <li><a href="/industries/financialservices">Financial Services</a></li>
                                <li><a href="/industries/manufacturing">Manufacturing</a></li>
                                <li><a href="/industries/utilities">Utilities</a></li>
                                <li><a href="/industries/government">Government</a></li>
                            </ul>
                        </div>
                        <div class='links' style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Company</h3>
                            <ul>
                                <li><a href="/corporate/aboutus">About Us</a></li>
                                <li><a href="/corporate/vissionmission">Vission & Mission</a></li>
                                <li><a href="/corporate/corevalue">Core Value</a></li>
                                <li><a href="/corporate/socialresponsibility">Social Responsibility</a></li>
                                <li><a href="/corporate/location">Loaction</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '20px', color: 'white' }}>This website may store are retrive your browser information for pernalizing, digital experience.To access more about our privacy policy. <a href="">click here</a></p>
                        <p style={{ color: 'white' }}>Copyright © 2014 - VENSYX Data Solutions</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default LogMode