import React from "react";

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav nav-underline navbar-nav me-auto mb-2 mb-lg-0">
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
                                    <a class="dropdown-item  dropdown-toggle" href="/services/enterprisemobility" role="button" data-bs-toggle="dropdown">Enterprise Mobility Service</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/services/enterprisemobility/businessProcess">Business Process Mobilization</a></li>
                                        <li><a class="dropdown-item" href="/services/enterprisemobility/b2bmobileapps">B2B Mobile Apps Development</a></li>
                                        <li><a class="dropdown-item" href="/services/enterprisemobility/enterpriseandroidapp">Enterprise Android App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/enterprisemobility/enterpriseapp">Enterprise App Distribution</a></li>
                                        <li><a class="dropdown-item" href="/services/enterprisemobility/enterpriseiosapp">Enterprise iOS App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/enterprisemobility/mobilebusiness">Mobile Business Intelligence</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item nav-link dropdown-toggle" href="/services/mobileapps" role="button" data-bs-toggle="dropdown">Mobile Apps Development</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/services/mobileapps/andriodapp">Android App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/mobileapps/window8">Windows8 App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/mobileapps/blackberry">Blackberry App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/mobileapps/iphoneapp">iPhone App Development</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item nav-link dropdown-toggle" href="/services/webapplication" role="button" data-bs-toggle="dropdown">Web Application Development</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/services/webapplication/crmapplication">CRM Application Development</a></li>
                                        <li><a class="dropdown-item" href="/services/webapplication/inventory">Inventory management</a></li>
                                        <li><a class="dropdown-item" href="/services/webapplication/contentmanagement">Content Management System</a></li>
                                        <li><a class="dropdown-item" href="/services/webapplication/customwebapp">Custom Web App Development</a></li>
                                        <li><a class="dropdown-item" href="/services/webapplication/opensourcedevelopment">Open Source Development</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item nav-link dropdown-toggle" href="/services/testing" role="button" data-bs-toggle="dropdown">Testing and QA Services</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/services/testing/enterprisemobilityservice">Enterprise Mobility Service</a></li>
                                        <li><a class="dropdown-item" href="/services/testing/mobileappsdevelopment">Mobile Apps Development</a></li>
                                        <li><a class="dropdown-item" href="/services/testing/businessintelligenceservices">Business Intelligence Services</a></li>
                                        <li><a class="dropdown-item" href="/services/testing/webapplicationdevelopment">Web Application Development</a></li>
                                        <li><a class="dropdown-item" href="/services/testing/testingandQAservices">Testing and QA Services</a></li>
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