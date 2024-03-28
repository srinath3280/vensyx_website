import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function DataManagement() {
    var [datamanagement, setDatamanagement] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/files/solutions/dataManagement.txt'
        }).then((res) => {
            setDatamanagement(res.data)
        })
    }, [])
    console.log(datamanagement)
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
                <div id="datamanagement">
                    <h1 style={{ color: 'white' }}>Data Management</h1>
                    <div style={{ padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                            VENSYX Data Solutions helps you to meet the data management goals to provide data assurance in terms of security, quality and accessibility. VENSYX Data Solutions is focused on creation of accurate, consistent and transparent data content for its customers. It emphasizes usability of data for its intended purpose and audience. VENSYX Data Solutions provides processes, tools, and metrics to help organizations use information effectively and efficiently in order to achieve their business objectives.
                        </p>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                            Companies today look at integrating and analyzing structured and unstructured content across the enterprise. Our service offering in Data Management enables customers to effectively manage volumes of data and help convert information to insights. Our primary focus is on helping our customers to build and maintain Master Data repositories, tackle inconsistencies within their data, and cleanse and enrich it to gain competitive benefits while simultaneously adhering to compliance requirements.
                        </p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Data Management offerings at VENSYX Data Solutions:</b>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '50%', }}>
                                <ul>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Quality Management</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Master Data Management</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Meta – Data Management</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Migration</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Integration</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Governance</li>
                                </ul>
                            </div>
                            <div style={{ width: '50%', }}>
                                <img src="/images/dm.png" alt="" width='70%' height="300px" />
                            </div>
                        </div>
                        <h3 style={{ color: 'white' }}>Key Capabilities</h3>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Quality Management</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions specialists implement robust governance processes and assure quality via data de-duplication, data filtering, and error treatment across Telecom, Retail, Manufacture and Finance Services sectors.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Master Data Management</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Our comprehensive MDM offerings optimize internal and external data management, and governance to help you make better-informed business decisions.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Meta – Data Management</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Our metadata-driven development approach assigns a high priority to master data—the static core data at the heart of an organization—which encompasses information across the various units and teams in an organization.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Migration</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions help enterprises to consolidate their data systems or migrate to a newer, more robust platform. We offer frameworks and solutions to mitigate associated risks while accelerating deployment.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Integration</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Build an information-enabled enterprise by speedily transforming data into a key decision driver with VENSYX Data Solutions Data Transformation service. Our engineers leverage expertise in various ETL and ETL data transformation tools and operate across a variety of sectors.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Governance</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions uses a high-performance data governance framework that embraces collaboration at all levels, we partner with you to drive business alignment, specialization, stewardship, responsibility, accountability, consistency, and scalability across the enterprise.</p>
                        <h3 style={{ color: 'white' }}>Business Value</h3>
                        <ul>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Achieve organizational alignment on the governance of data management issues throughout the enterprise</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Define and implement data architecture encompassing data modelling, data flow analysis, tuning, storage, visualization, and infrastructure</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Identify, implement and maintain a single, unified view of reference data across the enterprise</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Ensure data security, through security policies and processes</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Establish processes that ensure good quality data on a regular and consistent basis</li>
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
export default DataManagement