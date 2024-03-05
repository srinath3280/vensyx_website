import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function BigData() {
    var [bigdata, setBigdata] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3500/bigdata'
        }).then((res) => {
            setBigdata(res.data)
        })
    }, [])
    console.log(bigdata)
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
                    <h1 style={{ color: 'white' }}>Big Data & Advanced Analytics</h1>
                    <div style={{ padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                        <p style={{ color: 'white' }}>Data is exploding. Individuals, corporates, websites, call centers, shopping malls, mobile and RFID devices etc. are generating data in various formats – Regular data, voice data, text data, video – and like never before. It is estimated that by 2017 there will more bytes of data than the sand grains in the world. Unstructured data is growing faster than structured data. Big data is the buzz everywhere. Big data refers to huge data sets characterized by larger volumes, greater variety and complexity, generated at a higher velocity than any organization has faced before. Information, insights and foresights have tremendous implication in every aspect of business. Organizations which are leveraging analytics to differentiate themselves at the front with standardization at the core are able to create sustainable competitive advantage. Analytics is enabling organizations to predict customer behaviour, meet their needs and cement long-term customer relationships.</p>

                        <h2 style={{ color: 'white' }}>Key Services</h2>

                        <p style={{ color: 'white' }}>VENSYX Data Solutions Big Data and Advanced Analytics uniquely enable your organization to apply analytics to decision-making, anytime, anywhere. Our company has a dedicated practice on High-end Analytics & Data Mining with proven expertise in Forecasting, Model Management, Optimization Services including expertise in emerging areas such as Descriptive and Text Mining.</p>

                        <p style={{ color: 'white' }}>Technologies have emerged to make easy and cost effective analysis of unstructured data as unstructured data sources used for big data analysis may not fit in traditional data warehouses. Big data analytics is the application of advanced analytic techniques to very large, diverse data sets. There are advanced analytics techniques like predictive analysis, data mining, statistics, etc to study the state of business and data. NoSQL, Hadoop and Mapreduce are new methods of working with big data that offer alternatives to traditional data warehousing. These technologies form the core framework that supports the processing of large data sets across clustered systems.</p>
                        <img src="/images/bigdata.jpg" alt="" width="700px" height="300px" style={{marginLeft:'300px'}}/>
                        <h2 style={{ color: 'white' }}>Key Capabilities</h2>

                        <b style={{ color: 'white' }}>Data Mining</b>

                        <p style={{ color: 'white' }}>The Effectiveness of the data warehouse applications are only calculated when the data stored in them are meaningfully utilized, to get the hidden knowledge and utilize it for the competitive advantage the data mining technique comes into picture .By using analytical techniques, VENSYX Data Solutions helps to get complete process of discovering information and knowledge.</p>

                        <b style={{ color: 'white' }}>Big data</b>

                        <p style={{ color: 'white' }}>The rise of internet scale applications has led to an unprecedented scenario that industry cannot ignore, it's a problem but also an opportunity that business proactively address it.</p>

                        <p style={{ color: 'white' }}>Big data offers you an opportunity to build a compelling competitive advantage in the marketplace by adding the whole new dimension to analytics, which aids decision making. VENSYX Data Solutions helps you to Leverage our services and solutions around big data, to address the specific problems and gives a competitive advantage.</p>

                        <b style={{ color: 'white' }}>Advance analytics:</b>

                        <p style={{ color: 'white' }}>VENSYX Data Solutions expertise in statistical and advanced data-mining techniques gives a smarter decision making.</p>

                        <p style={{ color: 'white' }}>VENSYX Data Solutions Advanced Analytics Services go beyond simple off-the-shelf tools labelled as 'BI' or 'CRM' that are more often than not backward-looking. Instead, we leverage historical data, current macro factors and aid in decision-making that is forward-looking, and that your business can implement in a very actionable way across key decision-making functions: prediction, forecasting, simulations and optimization.</p>

                        <h2 style={{ color: 'white' }}>Business Value</h2>

                        <ul>
                            <li style={{ color: 'white' }}>Improve insights based on analytics</li>
                            <li style={{ color: 'white' }}>Provide insights to real-time analysis</li>
                            <li style={{ color: 'white' }}>Improve business outcomes and manage risk, now and in the future</li>
                            <li style={{ color: 'white' }}>All types of information can be tapped</li>
                        </ul>
                    </div>
                </div>
            </main>

            <footer>
                <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: 'black', width: 'auto', height: 'auto', display: 'flex', flexDirection: 'row', padding: '20px' }}>
                        <div style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Solutions</h3>
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
                        <div style={{ width: '40%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Services</h3>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ width: '50%', height: 'auto', }}>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Enterprise Mobility Service</h5>
                                        <ul>
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
                                        <ul>
                                            <li><a href="/services/andriodapp">Android App Development</a></li>
                                            <li><a href="/services/window8">Windows8 App Development</a></li>
                                            <li><a href="/services/blackberry">Blackberry App Development</a></li>
                                            <li><a href="/services/iphoneapp">Iphone App Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Business Intelligence Services</h5>
                                        <ul>
                                            <li><a href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ width: '50%', height: 'auto' }}>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Web Application Development</h5>
                                        <ul>
                                            <li><a href="/services/crmapplication">CRM Application Development</a></li>
                                            <li><a href="/services/inventory">Inventory Management</a></li>
                                            <li><a href="/services/contentmanagement">Content Management System</a></li>
                                            <li><a href="/services/customwebapp">Custom Web App Development</a></li>
                                            <li><a href="/services/opensourcedevelopment">OpenSource Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Test & QA Services</h5>
                                        <ul>
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
                        <div class='links' style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Industries</h3>
                            <ul>
                                <li><a href="/industries/telecommunications">Telecommunications</a></li>
                                <li><a href="/industries/retail">Retail</a></li>
                                <li><a href="/industries/financialservices">Financial Services</a></li>
                                <li><a href="/industries/manufacturing">Manufacturing</a></li>
                                <li><a href="/industries/utilities">Utilities</a></li>
                                <li><a href="/industries/government">Government</a></li>
                            </ul>
                        </div>
                        <div class='links' style={{ width: '20%', height: 'auto' }}>
                            <h3 style={{ color: 'white' }}>Company</h3>
                            <ul>
                                <li><a href="/corporate/aboutus">About Us</a></li>
                                <li><a href="/corporate/vissionmission">Vission & Mission</a></li>
                                <li><a href="/corporate/corevalue">Core Value</a></li>
                                <li><a href="/corporate/socialresponsibility">Social Responsibility</a></li>
                                <li><a href="/corporate/location">Loaction</a></li>
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
export default BigData