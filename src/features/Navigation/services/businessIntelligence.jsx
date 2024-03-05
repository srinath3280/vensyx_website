import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function BusinessIntelligenceService() {
    var [businessintelligence, setBusinessintelligence] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3500/businessintelligence'
        }).then((res) => {
            setBusinessintelligence(res.data)
        })
    }, [])
    console.log(businessintelligence)
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
                    <h3>Business Intelligence Services</h3>
                    <h4>Expert Business Intelligence Services for Assured Optimum Growth</h4>
                    <p>
                        Business Intelligence has transformed from being able to integrate data and create reports and dashboards. With the changing market dynamics where we see multiple mergers and Acquisitions, addition of new tools, Open source BI stabilizing, majority of the workforce is on the move so mobility become critical etc. it is important that Organizations be innovative, forward looking and nimble enough to adapt to changing business imperatives. Quality of data is vital as the risk is high for decisions based on inaccurate, incomplete or untimely information. Well-structured and comprehensive Business Intelligence Solutions mitigate these risks, creating seamless information access and provide a competitive advantage in the marketplace. We partner with our customers to advice, build and co-manage an effective BI implementation strategy coupled with a sustainable cost effective execution model.
                    </p>
                    <h4>Key Services</h4>
                    <b>Consulting and Direction setting</b>
                    <p>
                        VENSYX Data solutions Business Intelligence Consulting Services comprise High Impact, Diagnostic and assessment studies that facilitate BIDW initiative of Many High Performing 'Fortune-1000' Companies across the Globe. We help Organizations across multiple verticals analyze the business problems and then propose innovative business intelligence and analytical solutions which link strategy with actions and create synergy between organizations Short-term, Medium term and long term priorities and Business Objectives. With our mission to be a transforming partner we constantly innovate and have in place a set of methodologies, frameworks, checklists and IP assets that help us strategize BI initiatives.
                    </p>
                    <p>
                        VENSYX Data solutions DWBI team of Consultants helps its clients convert the Strategic Business objectives and goals into BI strategy and convert these ideas into actionable results. With Hundreds of successful deployment across Technology, Products and Verticals we have partnered with many customers and transformed their business. Our BI Experts have expertise in working with some of the 'Fortune-1000'companies across the World. These highly motivated Professionals are 100% committed to customer satisfaction in all services that we deliver.
                    </p>
                    <b>BI Consulting offerings at VENSYX Data solutions include:</b>
                    <ul>
                        <li>BI Assessment Study</li>
                        <li>Rationalization Services</li>
                        <li>BI Competency Center</li>
                        <li>Architecture Services</li>
                        <li>Tool Evaluation Services</li>
                    </ul>
                    <h4>Business Value</h4>
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
export default BusinessIntelligenceService