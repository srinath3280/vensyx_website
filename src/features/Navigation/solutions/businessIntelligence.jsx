import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function BusinessIntelligence() {
    var [business, setBusiness] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3500/businessIntelligence'
        }).then((res) => {
            setBusiness(res.data)
        })
    }, [])
    console.log(business)
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
                    <h3>Business Intelligence Solutions</h3>
                    <p>VENSYX Data Solutions Business Intelligence Consulting Services comprise High Impact, Diagnostic and assessment studies that facilitate BIDW initiative of Many High Performing 'Fortune-1000' Companies across the Globe. We help Organizations across multiple verticals analyze the business problems and then propose innovative business intelligence and analytical solutions which link strategy with actions and create synergy between organizations Short-term, Medium term and long term priorities and Business Objectives. We have in place a set of methodologies, frameworks, checklists and IP assets that help us strategize BI initiatives.</p>
                    <p>VENSYX Data Solutions DWBI team of Consultants helps its clients convert the Strategic Business objectives and goals into BI strategy and convert these ideas into actionable results. With Hundreds of successful deployment across Technology, Products and Verticals, our BI Experts have expertise in working with some of the 'Fortune-1000'companies across the World. These highly motivated Professionals are 100% committed to customer satisfaction in all services that we deliver.</p>
                    <b>BI Consulting Offerings at VENSYX Data Solutions include:</b>
                    <ul>
                        <li>Strategy & Roadmap</li>
                        <li>BI Assessment Study</li>
                        <li>Rationalization Services</li>
                        <li>BI Competency Center</li>
                        <li>Architecture Services</li>
                        <li>Tool Evaluation Services</li>
                    </ul>
                    <h3>Key Capabilities</h3>
                    <div>
                        <b>Strategy & Roadmap</b>
                        <p>Understand different aspects of BI requirements and work on Strategy and future state with a defined timeline to achieve the defined state</p>

                        <b>BI Assessment Study</b>
                        <p>Conduct study to evaluate the current landscape of technology, architecture, resources and infrastructure to provide optimal state.</p>

                        <b>Rationalization Services</b>
                        <p>Assessment of current ETL and Reporting architecture and processes to recommend the right fit solution and confirming to latest best practices in the market.</p>

                        <b>BI Competency Center</b>
                        <p>Consulting, Implementation and Operation of BI Competency Center or BI Center of Excellence for efficient management of BI Resources.</p>

                        <b>Architecture Services</b>
                        <p>Assess and recommend BI Architecture vis-à-vis organization requirement with respect to BI, Dashboard, Analytics and Scorecard.</p>

                        <b>Tool Evaluation Services</b>
                        <p>Tool Evaluation and Selection based on time tested evaluation criteria categorized by Architecture and User Preference, Infrastructure footprint etc.</p>
                    </div>
                    <h3>Business Value</h3>
                    <ul>
                        <li>Strategic BI Projects aligned to Business Strategy</li>
                        <li>Enable faster and fact-based decision making</li>
                        <li>Reusable frameworks and components</li>
                        <li>Catering to users most pertinent needs and optimize the use</li>
                        <li>Ensure that operations are aligned to Strategic and Tactical needs</li>
                        <li>Lower costs for BI tools and processes</li>
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
export default BusinessIntelligence