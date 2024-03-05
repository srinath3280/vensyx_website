import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function EnterpriseData() {
    var [enterprise, setEnterprise] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3500/enterprisedatawarehouse'
        }).then((res) => {
            setEnterprise(res.data)
        })
    }, [])
    console.log(enterprise)
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
                    <h3>Enterprise Data Warehouse</h3>
                    <p>The data warehouse is the key behind a competent Business Intelligence system. This is the place to store and organize your data so business users can access and query it to help the company move in the right direction. This easy access to complicated data enables effective business analysis and business forecasting, which in turn provides great insight on various trends and supports in faster and better decision making.</p>
                    <p>VENSYX Data Solutions BI/DW offers complete suite of data warehousing solutions encompassing data warehouse development, implementation, maintenance operations and support. We offer full life cycle design and development activities necessary to implement an end-to-end data warehouse and business intelligence solution. The service delivery begins with engaging end-users in a rigorous requirements gathering process and completes with the implementation of BI/DW solution.</p>
                    <b>BI Data Management offerings at VENSYX Data Solutions include:</b>
                    <ul>
                        <li>Data Modelling</li>
                        <li>Data Mart Development</li>
                        <li>Data Integration</li>
                        <li>Information Delivery</li>
                        <li>Maintenance Operations, Support & Upgrades</li>
                    </ul>
                    <h4>Key Capabilities</h4>
                    <b>Data Modelling</b>
                    <p>VENSYX Data Solutions Data Modelling service provides organizations with customized, business-specific solutions and creates effective data models that meet their current and evolving needs. Our experts employ both tool-based and manual methodologies to customize existing models for enhanced business performance.</p>
                    <b>Data Mart Development</b>
                    <p>VENSYX Data Solutions is a leading provider of data warehouse and data mart design and development services, VENSYX Data Solutions helps organizations across a variety of industries collate and store discrete data on a single platform, enabling effective analyses and informed business decisions.</p>
                    <b>Data Integration</b>
                    <p>Build an information-enabled enterprise by speedily transforming data into a key decision driver with VENSYX Data Solutions Data Transformation service. Our engineers leverage expertise in various ETL and ETL data transformation tools and operate across a variety of sectors.</p>
                    <b>Information Delivery</b>
                    <p>VENSYX Data Solutions is committed to placing data in the hands of an organization's workers in a form-factor (mobile, PDF report, Excel etc.) that ensures action is taken on the information at the right time. VENSYX Data Solutions Information Delivery service provides a single access point for aggregated information via an easy-to-use Web-based interface.</p>
                    <b>Maintenance Operations, Support & Upgrades</b>
                    <p>VENSYX Data Solutions has extensive experience in delivering large-scale migration and upgrade services and has established methodologies specific to business intelligence projects. Our services are tailored to meet your needs, whether you want to upgrade to a newer version of your existing tools and applications or you are making a platform or re-engineering decision for your overall BI architecture.</p>
                    <h4>Business Value</h4>
                    <ul>
                        <li>Easy to deploy and manage; dramatically simplifies your data warehouse and analytics infrastructure</li>
                        <li>Fast time-to-value for important business intelligence and analytic initiatives that impact your bottom line</li>
                        <li>Meet increasing demands for performance and capacity using cost-effective industry building blocks</li>
                        <li>Protect your information with high availability, business continuity, and security</li>
                    </ul>
                </div>
            </main>

            <footer>
                <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: 'black', width: 'auto', height: 'auto', display: 'flex', flexDirection: 'row', padding: '20px' }}>
                        <div style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Solutions</h3>
                            <div class='links'>
                                <ul>
                                    <li><a href="">Big Data & Advanced Analytics</a></li>
                                    <li><a href="">Business Intelligence solutions</a></li>
                                    <li><a href="">Data Management</a></li>
                                    <li><a href="">Enterprise Data Warehouse</a></li>
                                    <li><a href="">Application Middleware Management</a></li>
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
                                            <li><a href="">Business Process Mobilisation</a></li>
                                            <li><a href="">B2B Mobile Apps Development</a></li>
                                            <li><a href="">Enterprise ANdroid App Development</a></li>
                                            <li><a href="">Enterprise App Distribution</a></li>
                                            <li><a href="">Enterprise IOS App Development</a></li>
                                            <li><a href="">Mobile Business Intelligence</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Mobile Apps Development</h5>
                                        <ul>
                                            <li><a href="">Android App Development</a></li>
                                            <li><a href="">Windows8 App Development</a></li>
                                            <li><a href="">Blackberry App Development</a></li>
                                            <li><a href="">Iphone App Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Business Intelligence Services</h5>
                                        <ul>
                                            <li><a href="">Business Intelligence Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ width: '50%', height: 'auto' }}>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Web Application Development</h5>
                                        <ul>
                                            <li><a href="">CRM Application Development</a></li>
                                            <li><a href="">Inventory Management</a></li>
                                            <li><a href="">Content Management System</a></li>
                                            <li><a href="">Custom Web App Development</a></li>
                                            <li><a href="">OpenSource Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Test & QA Services</h5>
                                        <ul>
                                            <li><a href="">Automated Testing</a></li>
                                            <li><a href="">Selenium</a></li>
                                            <li><a href="">QTP</a></li>
                                            <li><a href="">Manual Testing</a></li>
                                            <li><a href="">Test Complete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='links' style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Industries</h3>
                            <ul>
                                <li><a href="">Telecommunications</a></li>
                                <li><a href="">Retail</a></li>
                                <li><a href="">Financial Services</a></li>
                                <li><a href="">Manufacturing</a></li>
                                <li><a href="">Utilities</a></li>
                                <li><a href="">Government</a></li>
                            </ul>
                        </div>
                        <div class='links' style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Company</h3>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Vission & Mission</a></li>
                                <li><a href="">Core Value</a></li>
                                <li><a href="">Social Responsibility</a></li>
                                <li><a href="">Loaction</a></li>
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
export default EnterpriseData