import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function FinancialServices() {
    var [financial, setFinancial] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/files/industries/financial_services.txt'
        }).then((res) => {
            setFinancial(res.data)
        })
    }, [])
    console.log(financial)
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
                <div id="financialservice">
                    <h1 style={{ color: 'white' }}>Financial Services</h1>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '60%', padding: '50px', textAlign: 'justify', fontSize: '25px' }}>
                            {
                                financial && financial.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {typeof item === 'string' ? (
                                                <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>{item}</p>
                                            ) : (
                                                Object.entries(item).map(([key, value]) => {
                                                    return (
                                                        <>
                                                            {
                                                                typeof value === 'string' ? (
                                                                    <>
                                                                        <h4 style={{ color: 'white' }}>{key}</h4>
                                                                        <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>{value}</p>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <h4 style={{ color: 'white' }}>{key}</h4>
                                                                        {
                                                                            value && value.map((subitem) => {
                                                                                return (
                                                                                    <p style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>{subitem}</p>
                                                                                )
                                                                            })
                                                                        }
                                                                    </>
                                                                )
                                                            }
                                                        </>
                                                    )
                                                })
                                            )}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div style={{ width: '40%', paddingRight: '50px', paddingTop: '50px', }}>
                            <img src="/images/financial.jpg" alt="financial" width="100%" height="500px" style={{ borderRadius: '10px' }} />
                        </div>
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
export default FinancialServices