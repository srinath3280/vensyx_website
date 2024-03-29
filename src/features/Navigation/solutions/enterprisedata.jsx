import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function EnterpriseData() {
    var [enterprise, setEnterprise] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/files/solutions/enterpriseDataWarehouse.txt'
        }).then((res) => {
            setEnterprise(res.data)
        })
    }, [])
    console.log(enterprise)
    return (
        <>
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
                <div id="enterprisedata">
                    <h1 style={{ color: 'white' }}>Enterprise Data Warehouse</h1>
                    <div style={{ padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>The data warehouse is the key behind a competent Business Intelligence system. This is the place to store and organize your data so business users can access and query it to help the company move in the right direction. This easy access to complicated data enables effective business analysis and business forecasting, which in turn provides great insight on various trends and supports in faster and better decision making.</p>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions BI/DW offers complete suite of data warehousing solutions encompassing data warehouse development, implementation, maintenance operations and support. We offer full life cycle design and development activities necessary to implement an end-to-end data warehouse and business intelligence solution. The service delivery begins with engaging end-users in a rigorous requirements gathering process and completes with the implementation of BI/DW solution.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Data Management offerings at VENSYX Data Solutions include:</b>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '50%', }}>
                                <ul>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Modelling</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Mart Development</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Integration</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Information Delivery</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Maintenance Operations, Support & Upgrades</li>
                                </ul>
                            </div>
                            <div style={{ width: '50%', }}>
                                <img src="/images/datawarehouse.jpg" alt="" width='100%' height="300px" />
                            </div>
                        </div>
                        <h2 style={{ color: 'white' }}>Key Capabilities</h2>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Modelling</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions Data Modelling service provides organizations with customized, business-specific solutions and creates effective data models that meet their current and evolving needs. Our experts employ both tool-based and manual methodologies to customize existing models for enhanced business performance.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Mart Development</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions is a leading provider of data warehouse and data mart design and development services, VENSYX Data Solutions helps organizations across a variety of industries collate and store discrete data on a single platform, enabling effective analyses and informed business decisions.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Integration</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Build an information-enabled enterprise by speedily transforming data into a key decision driver with VENSYX Data Solutions Data Transformation service. Our engineers leverage expertise in various ETL and ETL data transformation tools and operate across a variety of sectors.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Information Delivery</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions is committed to placing data in the hands of an organization's workers in a form-factor (mobile, PDF report, Excel etc.) that ensures action is taken on the information at the right time. VENSYX Data Solutions Information Delivery service provides a single access point for aggregated information via an easy-to-use Web-based interface.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Maintenance Operations, Support & Upgrades</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions has extensive experience in delivering large-scale migration and upgrade services and has established methodologies specific to business intelligence projects. Our services are tailored to meet your needs, whether you want to upgrade to a newer version of your existing tools and applications or you are making a platform or re-engineering decision for your overall BI architecture.</p>
                        <h2 style={{ color: 'white' }}>Business Value</h2>
                        <ul>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Easy to deploy and manage; dramatically simplifies your data warehouse and analytics infrastructure</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Fast time-to-value for important business intelligence and analytic initiatives that impact your bottom line</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Meet increasing demands for performance and capacity using cost-effective industry building blocks</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Protect your information with high availability, business continuity, and security</li>
                        </ul>
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
        </>
    )
}
export default EnterpriseData