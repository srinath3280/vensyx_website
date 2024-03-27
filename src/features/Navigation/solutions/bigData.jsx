import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function BigData() {
    var [bigdata, setBigdata] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/files/solutions/bigData.txt'
        }).then((res) => {
            setBigdata(res.data)
        })
    }, [])
    console.log(bigdata)
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
                <div id="bigdata">
                    <h1 style={{ color: 'white' }}>Big Data & Advanced Analytics</h1>
                    <div style={{ padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data is exploding. Individuals, corporates, websites, call centers, shopping malls, mobile and RFID devices etc. are generating data in various formats – Regular data, voice data, text data, video – and like never before. It is estimated that by 2017 there will more bytes of data than the sand grains in the world. Unstructured data is growing faster than structured data. Big data is the buzz everywhere. Big data refers to huge data sets characterized by larger volumes, greater variety and complexity, generated at a higher velocity than any organization has faced before. Information, insights and foresights have tremendous implication in every aspect of business. Organizations which are leveraging analytics to differentiate themselves at the front with standardization at the core are able to create sustainable competitive advantage. Analytics is enabling organizations to predict customer behaviour, meet their needs and cement long-term customer relationships.</p>

                        <h2 style={{ color: 'white' }}>Key Services</h2>

                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions Big Data and Advanced Analytics uniquely enable your organization to apply analytics to decision-making, anytime, anywhere. Our company has a dedicated practice on High-end Analytics & Data Mining with proven expertise in Forecasting, Model Management, Optimization Services including expertise in emerging areas such as Descriptive and Text Mining.</p>

                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Technologies have emerged to make easy and cost effective analysis of unstructured data as unstructured data sources used for big data analysis may not fit in traditional data warehouses. Big data analytics is the application of advanced analytic techniques to very large, diverse data sets. There are advanced analytics techniques like predictive analysis, data mining, statistics, etc to study the state of business and data. NoSQL, Hadoop and Mapreduce are new methods of working with big data that offer alternatives to traditional data warehousing. These technologies form the core framework that supports the processing of large data sets across clustered systems.</p>
                        <img src="/images/bigdata.jpg" alt="" width="700px" height="300px" style={{ marginLeft: '300px' }} />
                        <h2 style={{ color: 'white' }}>Key Capabilities</h2>

                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Data Mining</b>

                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>The Effectiveness of the data warehouse applications are only calculated when the data stored in them are meaningfully utilized, to get the hidden knowledge and utilize it for the competitive advantage the data mining technique comes into picture .By using analytical techniques, VENSYX Data Solutions helps to get complete process of discovering information and knowledge.</p>

                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Big data</b>

                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>The rise of internet scale applications has led to an unprecedented scenario that industry cannot ignore, it's a problem but also an opportunity that business proactively address it.</p>

                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Big data offers you an opportunity to build a compelling competitive advantage in the marketplace by adding the whole new dimension to analytics, which aids decision making. VENSYX Data Solutions helps you to Leverage our services and solutions around big data, to address the specific problems and gives a competitive advantage.</p>

                        <b style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Advance analytics:</b>

                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions expertise in statistical and advanced data-mining techniques gives a smarter decision making.</p>

                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>VENSYX Data Solutions Advanced Analytics Services go beyond simple off-the-shelf tools labelled as 'BI' or 'CRM' that are more often than not backward-looking. Instead, we leverage historical data, current macro factors and aid in decision-making that is forward-looking, and that your business can implement in a very actionable way across key decision-making functions: prediction, forecasting, simulations and optimization.</p>

                        <h2 style={{ color: 'white' }}>Business Value</h2>

                        <ul>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Improve insights based on analytics</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Provide insights to real-time analysis</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>Improve business outcomes and manage risk, now and in the future</li>
                            <li style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>All types of information can be tapped</li>
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
export default BigData