import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function BusinessIntelligence() {
    var [business, setBusiness] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/files/solutions/businessIntelligence.txt'
        }).then((res) => {
            setBusiness(res.data)
        })
    }, [])
    console.log(business)
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
                <div id="businessintelligence">
                    <h1 style={{ color: 'white' }}>Business Intelligence Solutions</h1>
                    <div style={{ padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                        <div id="businessintelligenceblock1" style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{ color: 'white', width: '50%', padding: '10px', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions Business Intelligence Consulting Services comprise High Impact, Diagnostic and assessment studies that facilitate BIDW initiative of Many High Performing 'Fortune-1000' Companies across the Globe. We help Organizations across multiple verticals analyze the business problems and then propose innovative business intelligence and analytical solutions which link strategy with actions and create synergy between organizations Short-term, Medium term and long term priorities and Business Objectives. We have in place a set of methodologies, frameworks, checklists and IP assets that help us strategize BI initiatives.</p>
                            <img src="/images/bi1.jpg" alt="" width='50%' height="450px" style={{ borderRadius: '15px' }} />
                        </div>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions DWBI team of Consultants helps its clients convert the Strategic Business objectives and goals into BI strategy and convert these ideas into actionable results. With Hundreds of successful deployment across Technology, Products and Verticals, our BI Experts have expertise in working with some of the 'Fortune-1000'companies across the World. These highly motivated Professionals are 100% committed to customer satisfaction in all services that we deliver.</p>
                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Consulting Offerings at VENSYX Data Solutions include:</b>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '50%', }}>
                                <ul>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Strategy & Roadmap</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Assessment Study</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Rationalization Services</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Competency Center</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Architecture Services</li>
                                    <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Tool Evaluation Services</li>
                                </ul>
                            </div>
                            <div id="businessintelligenceblock2" style={{ width: '50%', }}>
                                <img src="/images/bi2.jpg" alt="" width='100%' height="250px" />
                            </div>
                        </div>
                        <h3 style={{ color: 'white' }}>Key Capabilities</h3>
                        <div>
                            <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Strategy & Roadmap</b>
                            <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Understand different aspects of BI requirements and work on Strategy and future state with a defined timeline to achieve the defined state</p>

                            <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Assessment Study</b>
                            <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Conduct study to evaluate the current landscape of technology, architecture, resources and infrastructure to provide optimal state.</p>

                            <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Rationalization Services</b>
                            <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Assessment of current ETL and Reporting architecture and processes to recommend the right fit solution and confirming to latest best practices in the market.</p>

                            <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>BI Competency Center</b>
                            <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Consulting, Implementation and Operation of BI Competency Center or BI Center of Excellence for efficient management of BI Resources.</p>

                            <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Architecture Services</b>
                            <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Assess and recommend BI Architecture vis-à-vis organization requirement with respect to BI, Dashboard, Analytics and Scorecard.</p>

                            <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Tool Evaluation Services</b>
                            <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Tool Evaluation and Selection based on time tested evaluation criteria categorized by Architecture and User Preference, Infrastructure footprint etc.</p>
                        </div>
                        <h3 style={{ color: 'white' }}>Business Value</h3>
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
                    <div id="footertext">
                        <p style={{ color: 'white' }}>This website may store or retrive your browser information for personalizing, digital experience.To access more about our privacy policy. <a href="">click here</a></p>
                        <p style={{ color: 'white' }}>Copyright © 2014 - VENSYX Data Solutions</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default BusinessIntelligence