import React from "react";

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <div style={{width:'550px',display:'flex',flexDirection:'row',justifyContent:'start',alignItems:'center'}}>
                    <img src="/images/vensyxlogo.png" alt="" width="50px" height="50px"/>
                    <h5 style={{marginLeft:'15px'}}>VENSYX Data Solutions Pvt. Ltd</h5>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav nav-underline navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">HOME</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/corporate" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Corporate
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/corporate/aboutus">About Us</a></li>
                                <li><a class="dropdown-item" href="/corporate/vissionmission">Vision & Mission</a></li>
                                <li><a class="dropdown-item" href="/corporate/corevalue">Core Value</a></li>
                                <li><a class="dropdown-item" href="/corporate/socialresponsibility">Social Responsibility</a></li>
                                <li><a class="dropdown-item" href="/corporate/location">Location</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/solutions" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/solutions/bigdata">Big Data & Advanced Analytics</a></li>
                                <li><a class="dropdown-item" href="/solutions/businessIntelligence">Business Intelligence Solutions</a></li>
                                <li><a class="dropdown-item" href="/solutions/datamanagement">Data Management</a></li>
                                <li><a class="dropdown-item" href="/solutions/enterprisedatawarehouse">Enterprise Data Warehouse</a></li>
                                <li><a class="dropdown-item" href="/solutions/applicationmiddleware">Application Middleware Management</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/products/logmode">Log-MODE</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item" href="/services/enterprisemobility">Enterprise Mobility Service</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/services/businessProcess">Business Process Mobilization</a></li>
                                        <li><a class="dropdown-item" href="/services/b2bmobileapps">B2B Mobile Apps Development</a></li>
                                        <li><a class="dropdown-item" href="/services/enterpriseandroidapp">Enterprise Android App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/enterpriseapp">Enterprise App Distribution</a></li>
                                        <li><a class="dropdown-item" href="/services/enterpriseiosapp">Enterprise iOS App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/mobilebusiness">Mobile Business Intelligence</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item nav-link" href="/services/mobileapps">Mobile Apps Development</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/services/andriodapp">Android App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/window8">Windows8 App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/blackberry">Blackberry App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/iphoneapp">iPhone App Development</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item nav-link" href="/services/webapplication">Web Application Development</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/services/crmapplication">CRM Application Development</a></li>
                                        <li><a class="dropdown-item" href="/services/inventory">Inventory management</a></li>
                                        <li><a class="dropdown-item" href="/services/contentmanagement">Content Management System</a></li>
                                        <li><a class="dropdown-item" href="/services/customwebapp">Custom Web App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/opensourcedevelopment">Open Source Development</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item nav-link" href="/services/testing">Testing and QA Services</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/services/automatedtesting">Automated Testing</a></li>
                                        <li><a class="dropdown-item" href="/services/selenium">Selenium</a></li>
                                        <li><a class="dropdown-item" href="/services/qtp">QTP</a></li>
                                        <li><a class="dropdown-item" href="/services/manualtesting">Manual Testing</a></li>
                                        <li><a class="dropdown-item" href="/services/testcomplete">Test Complete</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/industries" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/industries/telecommunications">Telecommunications</a></li>
                                <li><a class="dropdown-item" href="/industries/retail">Retail</a></li>
                                <li><a class="dropdown-item" href="/industries/financialservices">Financial Services</a></li>
                                <li><a class="dropdown-item" href="/industries/manufacturing">Manufacturing</a></li>
                                <li><a class="dropdown-item" href="/industries/utilities">Utilities</a></li>
                                <li><a class="dropdown-item" href="/industries/government">Government</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar