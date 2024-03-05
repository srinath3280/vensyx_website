import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function Utilities() {
    var [utilities, setUtilities] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3500/utilities'
        }).then((res) => {
            setUtilities(res.data)
        })
    }, [])
    console.log(utilities)
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
                <div>
                    <h1 style={{ color: 'white' }}>Utilities</h1>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                            {
                                utilities && utilities.map((data) => {
                                    return (
                                        <>
                                            {Array.isArray(data) ? (
                                                <div>
                                                    <h3 style={{ color: 'white' }}>VENSYX Data Solutions for Utilities</h3>
                                                    <ul>
                                                        {data.map((subItem, subIndex) => (
                                                            <li key={subIndex} style={{ color: 'white' }}>{subItem}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <p style={{ color: 'white' }}>{data}</p>
                                            )}
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
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
export default Utilities