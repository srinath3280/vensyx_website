import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function BusinessIntelligenceService() {
    var [businessintelligence, setBusinessintelligence] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/files/services/business_intelligence.txt'
        }).then((res) => {
            setBusinessintelligence(res.data)
        })
    }, [])
    console.log(businessintelligence)
    return (
        <>
            <div id='socialMedia'>
                <a href="tel: +91 9000316721">
                    <i class="bi bi-telephone">
                        <span class="tooltiptext">+91-9000316721</span>
                    </i>
                </a>
                <a href="mailto:info@vensyx.com?subject=subject text">
                    <i class="bi bi-envelope-at">
                        <span class="tooltiptext">info@vensyx.com</span>
                    </i>
                </a>
                <a href="https://www.linkedin.com/company/vensyx-data-solutions-pvt-ltd-/about/">
                    <i class="bi bi-linkedin">
                        <span class="tooltiptext">https://www.linkedin.com/vensyx</span>
                    </i>
                </a>
                {/* <a href="">
                        <i class="bi bi-facebook">
                            <span class="tooltiptext">https://www.facebook.com/vensyx</span>
                        </i>
                    </a> */}
                <a href="https://twitter.com/vensyx2014">
                    <i class="bi bi-twitter">
                        <span class="tooltiptext">https://www.twitter.com/vensyx</span>
                    </i>
                </a>
                <a href="https://wa.me/+919000316721">
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
                <div id="businessIntelligence">
                    <h1 style={{ color: 'white' }}>Business Intelligence Services</h1>
                    <div style={{ padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                        <h4 style={{ color: 'white' }}>Expert Business Intelligence Services for Assured Optimum Growth</h4>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                            Business Intelligence has transformed from being able to integrate data and create reports and dashboards. With the changing market dynamics where we see multiple mergers and Acquisitions, addition of new tools, Open source BI stabilizing, majority of the workforce is on the move so mobility become critical etc. it is important that Organizations be innovative, forward looking and nimble enough to adapt to changing business imperatives. Quality of data is vital as the risk is high for decisions based on inaccurate, incomplete or untimely information. Well-structured and comprehensive Business Intelligence Solutions mitigate these risks, creating seamless information access and provide a competitive advantage in the marketplace. We partner with our customers to advice, build and co-manage an effective BI implementation strategy coupled with a sustainable cost effective execution model.
                        </p>
                        <h2 style={{ color: 'white' }}>Key Services</h2>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Consulting and Direction setting</b>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                            VENSYX Data solutions Business Intelligence Consulting Services comprise High Impact, Diagnostic and assessment studies that facilitate BIDW initiative of Many High Performing 'Fortune-1000' Companies across the Globe. We help Organizations across multiple verticals analyze the business problems and then propose innovative business intelligence and analytical solutions which link strategy with actions and create synergy between organizations Short-term, Medium term and long term priorities and Business Objectives. With our mission to be a transforming partner we constantly innovate and have in place a set of methodologies, frameworks, checklists and IP assets that help us strategize BI initiatives.
                        </p>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
                            VENSYX Data solutions DWBI team of Consultants helps its clients convert the Strategic Business objectives and goals into BI strategy and convert these ideas into actionable results. With Hundreds of successful deployment across Technology, Products and Verticals we have partnered with many customers and transformed their business. Our BI Experts have expertise in working with some of the 'Fortune-1000'companies across the World. These highly motivated Professionals are 100% committed to customer satisfaction in all services that we deliver.
                        </p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Consulting offerings at VENSYX Data solutions include:</b>
                        <ul>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Assessment Study</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Rationalization Services</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Competency Center</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Architecture Services</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Tool Evaluation Services</li>
                        </ul>
                        <h2 style={{ color: 'white' }}>Business Value</h2>
                        <ul>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Strategic BI Projects aligned to Business Strategy</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Enable faster and fact-based decision making</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Reusable frameworks and components</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Catering to users most pertinent needs and optimize the use</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Ensure that operations are aligned to Strategic and Tactical needs</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Lower costs for BI tools and processes</li>
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
                    <div style={{width:'auto',height:'1px',border:'1px solid grey'}}></div>
                    <div id="footertext">
                        <span>
                            <a href="/termsofuse" style={{marginRight:'25px'}}>Terms of Use</a>
                            <a href="/privacypolicy">Privacy Policy</a>
                        </span>
                        <p style={{ color: 'white' }}>Copyright © 2014 - VENSYX Data Solutions</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default BusinessIntelligenceService