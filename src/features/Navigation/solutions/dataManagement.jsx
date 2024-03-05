import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function DataManagement() {
    var [datamanagement, setDatamanagement] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3500/datamanagement'
        }).then((res) => {
            setDatamanagement(res.data)
        })
    }, [])
    console.log(datamanagement)
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
                    <h3>Data Management</h3>
                    <p>
                        VENSYX Data Solutions helps you to meet the data management goals to provide data assurance in terms of security, quality and accessibility. VENSYX Data Solutions is focused on creation of accurate, consistent and transparent data content for its customers. It emphasizes usability of data for its intended purpose and audience. VENSYX Data Solutions provides processes, tools, and metrics to help organizations use information effectively and efficiently in order to achieve their business objectives.
                    </p>
                    <p>
                        Companies today look at integrating and analyzing structured and unstructured content across the enterprise. Our service offering in Data Management enables customers to effectively manage volumes of data and help convert information to insights. Our primary focus is on helping our customers to build and maintain Master Data repositories, tackle inconsistencies within their data, and cleanse and enrich it to gain competitive benefits while simultaneously adhering to compliance requirements.
                    </p>
                    <b>BI Data Management offerings at VENSYX Data Solutions:</b>
                    <ul>
                        <li>Data Quality Management</li>
                        <li>Master Data Management</li>
                        <li>Meta – Data Management</li>
                        <li>Data Migration</li>
                        <li>Data Integration</li>
                        <li>Data Governance</li>
                    </ul>
                    <h3>Key Capabilities</h3>
                    <b>Data Quality Management</b>
                    <p>VENSYX Data Solutions specialists implement robust governance processes and assure quality via data de-duplication, data filtering, and error treatment across Telecom, Retail, Manufacture and Finance Services sectors.</p>
                    <b>Master Data Management</b>
                    <p>Our comprehensive MDM offerings optimize internal and external data management, and governance to help you make better-informed business decisions.</p>
                    <b>Meta – Data Management</b>
                    <p>Our metadata-driven development approach assigns a high priority to master data—the static core data at the heart of an organization—which encompasses information across the various units and teams in an organization.</p>
                    <b>Data Migration</b>
                    <p>VENSYX Data Solutions help enterprises to consolidate their data systems or migrate to a newer, more robust platform. We offer frameworks and solutions to mitigate associated risks while accelerating deployment.</p>
                    <b>Data Integration</b>
                    <p>Build an information-enabled enterprise by speedily transforming data into a key decision driver with VENSYX Data Solutions Data Transformation service. Our engineers leverage expertise in various ETL and ETL data transformation tools and operate across a variety of sectors.</p>
                    <b>Data Governance</b>
                    <p>VENSYX Data Solutions uses a high-performance data governance framework that embraces collaboration at all levels, we partner with you to drive business alignment, specialization, stewardship, responsibility, accountability, consistency, and scalability across the enterprise.</p>
                    <h3>Business Value</h3>
                    <ul>
                        <li>Achieve organizational alignment on the governance of data management issues throughout the enterprise</li>
                        <li>Define and implement data architecture encompassing data modelling, data flow analysis, tuning, storage, visualization, and infrastructure</li>
                        <li>Identify, implement and maintain a single, unified view of reference data across the enterprise</li>
                        <li>Ensure data security, through security policies and processes</li>
                        <li>Establish processes that ensure good quality data on a regular and consistent basis</li>
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
export default DataManagement