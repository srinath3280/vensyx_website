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
                    <h1 style={{ color: 'white' }}>Data Management</h1>
                    <div style={{ padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                        <p style={{ color: 'white' }}>
                            VENSYX Data Solutions helps you to meet the data management goals to provide data assurance in terms of security, quality and accessibility. VENSYX Data Solutions is focused on creation of accurate, consistent and transparent data content for its customers. It emphasizes usability of data for its intended purpose and audience. VENSYX Data Solutions provides processes, tools, and metrics to help organizations use information effectively and efficiently in order to achieve their business objectives.
                        </p>
                        <p style={{ color: 'white' }}>
                            Companies today look at integrating and analyzing structured and unstructured content across the enterprise. Our service offering in Data Management enables customers to effectively manage volumes of data and help convert information to insights. Our primary focus is on helping our customers to build and maintain Master Data repositories, tackle inconsistencies within their data, and cleanse and enrich it to gain competitive benefits while simultaneously adhering to compliance requirements.
                        </p>
                        <b style={{ color: 'white' }}>BI Data Management offerings at VENSYX Data Solutions:</b>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <div style={{ width: '50%', }}>
                                <ul>
                                    <li style={{ color: 'white' }}>Data Quality Management</li>
                                    <li style={{ color: 'white' }}>Master Data Management</li>
                                    <li style={{ color: 'white' }}>Meta – Data Management</li>
                                    <li style={{ color: 'white' }}>Data Migration</li>
                                    <li style={{ color: 'white' }}>Data Integration</li>
                                    <li style={{ color: 'white' }}>Data Governance</li>
                                </ul>
                            </div>
                            <div style={{ width: '50%', }}>
                                <img src="/images/dm.png" alt="" width='70%' height="300px" />
                            </div>
                        </div>
                        <h3 style={{ color: 'white' }}>Key Capabilities</h3>
                        <b style={{ color: 'white' }}>Data Quality Management</b>
                        <p style={{ color: 'white' }}>VENSYX Data Solutions specialists implement robust governance processes and assure quality via data de-duplication, data filtering, and error treatment across Telecom, Retail, Manufacture and Finance Services sectors.</p>
                        <b style={{ color: 'white' }}>Master Data Management</b>
                        <p style={{ color: 'white' }}>Our comprehensive MDM offerings optimize internal and external data management, and governance to help you make better-informed business decisions.</p>
                        <b style={{ color: 'white' }}>Meta – Data Management</b>
                        <p style={{ color: 'white' }}>Our metadata-driven development approach assigns a high priority to master data—the static core data at the heart of an organization—which encompasses information across the various units and teams in an organization.</p>
                        <b style={{ color: 'white' }}>Data Migration</b>
                        <p style={{ color: 'white' }}>VENSYX Data Solutions help enterprises to consolidate their data systems or migrate to a newer, more robust platform. We offer frameworks and solutions to mitigate associated risks while accelerating deployment.</p>
                        <b style={{ color: 'white' }}>Data Integration</b>
                        <p style={{ color: 'white' }}>Build an information-enabled enterprise by speedily transforming data into a key decision driver with VENSYX Data Solutions Data Transformation service. Our engineers leverage expertise in various ETL and ETL data transformation tools and operate across a variety of sectors.</p>
                        <b style={{ color: 'white' }}>Data Governance</b>
                        <p style={{ color: 'white' }}>VENSYX Data Solutions uses a high-performance data governance framework that embraces collaboration at all levels, we partner with you to drive business alignment, specialization, stewardship, responsibility, accountability, consistency, and scalability across the enterprise.</p>
                        <h3 style={{ color: 'white' }}>Business Value</h3>
                        <ul>
                            <li style={{ color: 'white' }}>Achieve organizational alignment on the governance of data management issues throughout the enterprise</li>
                            <li style={{ color: 'white' }}>Define and implement data architecture encompassing data modelling, data flow analysis, tuning, storage, visualization, and infrastructure</li>
                            <li style={{ color: 'white' }}>Identify, implement and maintain a single, unified view of reference data across the enterprise</li>
                            <li style={{ color: 'white' }}>Ensure data security, through security policies and processes</li>
                            <li style={{ color: 'white' }}>Establish processes that ensure good quality data on a regular and consistent basis</li>
                        </ul>
                    </div>
                </div>
            </main>

            <footer>
                <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: 'black', width: 'auto', height: 'auto', display: 'flex', flexDirection: 'row', padding: '20px', textAlign: 'start' }}>
                        <div style={{ width: '20%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
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
                        <div style={{ width: '1px', height: '500px', border: '1px solid grey' }}></div>
                        <div style={{ width: '40%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '5px' }}>
                            <h3 style={{ color: 'white', }}>Services</h3>
                            <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'start' }}>
                                <div style={{ width: '50%', height: 'auto', }}>
                                    <div class='links' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <h5 style={{ color: 'orange' }}>Enterprise Mobility Service</h5>
                                        <ul style={{ marginLeft: '-25px' }}>
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
                                        <ul style={{ marginLeft: '-25px' }}>
                                            <li><a href="/services/andriodapp">Android App Development</a></li>
                                            <li><a href="/services/window8">Windows8 App Development</a></li>
                                            <li><a href="/services/blackberry">Blackberry App Development</a></li>
                                            <li><a href="/services/iphoneapp">Iphone App Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Business Intelligence Services</h5>
                                        <ul style={{ marginLeft: '-25px' }}>
                                            <li><a href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ width: '50%', height: 'auto', }}>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Web Application Development</h5>
                                        <ul style={{ marginLeft: '-25px' }}>
                                            <li><a href="/services/crmapplication">CRM Application Development</a></li>
                                            <li><a href="/services/inventory">Inventory Management</a></li>
                                            <li><a href="/services/contentmanagement">Content Management System</a></li>
                                            <li><a href="/services/customwebapp">Custom Web App Development</a></li>
                                            <li><a href="/services/opensourcedevelopment">OpenSource Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Test & QA Services</h5>
                                        <ul style={{ marginLeft: '-25px' }}>
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
                        <div style={{ width: '1px', height: '500px', border: '1px solid grey' }}></div>
                        <div class='links' style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white', marginLeft: '30px' }}>Industries</h3>
                            <ul>
                                <li><a href="/industries/telecommunications">Telecommunications</a></li>
                                <li><a href="/industries/retail">Retail</a></li>
                                <li><a href="/industries/financialservices">Financial Services</a></li>
                                <li><a href="/industries/manufacturing">Manufacturing</a></li>
                                <li><a href="/industries/utilities">Utilities</a></li>
                                <li><a href="/industries/government">Government</a></li>
                            </ul>
                        </div>
                        <div style={{ width: '1px', height: '500px', border: '1px solid grey' }}></div>
                        <div class='links' style={{ width: '20%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <h3 style={{ color: 'white', marginLeft: '30px' }}>Company</h3>
                            <div>
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