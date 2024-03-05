import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function BlackberryApp() {
    var [blackberryapp, setBlackberryapp] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3500/blackberryapp'
        }).then((res) => {
            setBlackberryapp(res.data)
        })
    }, [])
    console.log(blackberryapp)
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
                    <h3>Blackberry App Development</h3>
                    {
                        blackberryapp && blackberryapp.map((data) => {
                            return (
                                <p>{data}</p>
                            )
                        })
                    }
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
export default BlackberryApp