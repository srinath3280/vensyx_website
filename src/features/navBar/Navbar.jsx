import React from "react";

function NavBar() {
    return (
        <nav class="navbar navbar-expand fixed-top">
            <div class="container-fluid">
                <div id="logo" style={{ width: '550px', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>
                    <a href="/">
                        <img src="/images/vensyxlogo.png" alt="" width="50px" height="50px" />
                    </a>
                    <h5 style={{ color: 'rgb(3, 3, 102)' }}>VENSYX Data Solutions</h5>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav nav-underline navbar-nav me-auto upper-come-nav-part">
                        {/* <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li> */}
                        <li class="nav-item dropdown upper-come-nav-part-content">
                            <a class="nav-link dropdown-toggle" href="/corporate" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Corporate
                            </a>
                            <ul class="dropdown-menu " style={{ width: '100%', height: '520px', position: 'fixed', zIndex: '999999', top: '75px', marginLeft: '0px', left: '0px', padding: '40px', backgroundColor: 'black' }}>
                                <span style={{ fontSize: '35px', color: 'orange' }}>CORPORATE</span>
                                <p style={{ fontSize: '20px', marginBottom: '25px', color: 'white', marginTop: '25px' }}>
                                    VENSYX Data Solutions is your Innovation to provide world-class Big Data, Business Intelligence, Data Integration, Data Quality, Data Warehousing, Data Governance, and Master Data Management services and solutions to companies around the globe and across industries.
                                </p>
                                <button class="btn btn-outline-danger" style={{ width: '150px', height: '50px', marginBottom: '50px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/aboutus" style={{ marginLeft: '-25px', color: 'white' }}>About Us</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '200px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/vissionmission" style={{ marginLeft: '-25px', color: 'white' }}>Vision & Mission</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '200px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/corevalue" style={{ marginLeft: '-25px', color: 'white' }}>Core Value</a>
                                    </li>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/socialresponsibility" style={{ marginLeft: '-25px', color: 'white' }}>Social Responsibility</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '120px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/location" style={{ marginLeft: '-25px', color: 'white' }}>Location</a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item dropdown upper-come-nav-part-content">
                            <a class="nav-link dropdown-toggle" href="/solutions" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions
                            </a>
                            <ul class="dropdown-menu " style={{ width: '100%', height: '520px', position: 'fixed', zIndex: '999999', top: '75px', marginLeft: '0px', left: '0px', padding: '40px', backgroundColor: 'black' }}>
                                <span style={{ fontSize: '35px', color: 'orange' }}>SOLUTIONS</span>
                                <p style={{ fontSize: '20px', marginBottom: '25px', color: 'white', marginTop: '25px' }}>
                                    Data is exploding. Individuals, corporates, websites, call centers, shopping malls, mobile and RFID devices etc. are generating data in various formats – Regular data, voice data, text data, video – and like never before.
                                </p>
                                <button class="btn btn-outline-danger" style={{ width: '150px', height: '50px', marginBottom: '50px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/bigdata" style={{ marginLeft: '-25px', color: 'white' }}>Big Data & Advanced Analytics</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '200px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/businessIntelligence" style={{ marginLeft: '-25px', color: 'white' }}>Business Intelligence Solutions</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '200px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/datamanagement" style={{ marginLeft: '-25px', color: 'white' }}>Data Management</a>
                                    </li>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/enterprisedatawarehouse" style={{ marginLeft: '-25px', color: 'white' }}>Enterprise Data Warehouse</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '225px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/applicationmiddleware" style={{ marginLeft: '-25px', color: 'white' }}>Application Middleware Management</a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item dropdown upper-come-nav-part-content">
                            <a class="nav-link dropdown-toggle" href="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu " style={{ width: '100%', height: '520px', position: 'fixed', zIndex: '999999', top: '75px', marginLeft: '0px', left: '0px', padding: '40px', backgroundColor: 'black' }}>
                                <span style={{ fontSize: '35px', color: 'orange' }}>Products</span>
                                <p style={{ fontSize: '20px', marginBottom: '25px', color: 'white', marginTop: '25px' }}>
                                    The service allows to perform a wide range of tasks in logistics and delivery – transportation arrangements, transport processes optimization and cost saving.
                                </p>
                                <button class="btn btn-outline-danger" style={{ width: '150px', height: '50px', marginBottom: '50px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/products/logmode" style={{ marginLeft: '-25px', color: 'white' }}>Log-MODE</a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item nav-link" href="/services/enterprisemobility">Enterprise Mobility Service</a>
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
                                <li><a class="dropdown-item nav-link" href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
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

                        <li class="nav-item dropdown upper-come-nav-part-content">
                            <a class="nav-link dropdown-toggle" href="/industries" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                            </a>
                            <ul class="dropdown-menu " style={{ width: '100%', height: '520px', position: 'fixed', zIndex: '999999', top: '75px', marginLeft: '0px', left: '0px', padding: '40px', backgroundColor: 'black' }}>
                                <span style={{ fontSize: '35px', color: 'orange' }}>INDUSTRIES</span>
                                <p style={{ fontSize: '20px', marginBottom: '25px', color: 'white', marginTop: '25px' }}>
                                    VENSYX Data Solutions Team Have High rich of Knowledge in Building Data management Solutions & Business
                                    Intelligence Systems from scratch and not limited to particular industry, How ever extreme R&D work and
                                    implementations was done in following Industries.
                                </p>
                                <button class="btn btn-outline-danger" style={{ width: '150px', height: '50px', marginBottom: '50px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/telecommunications" style={{ marginLeft: '-25px', color: 'white' }}>Telecommunications</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',marginLeft: '150px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/retail" style={{ marginLeft: '-25px', color: 'white' }}>Retail</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',marginLeft: '150px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/financialservices" style={{ marginLeft: '-25px', color: 'white' }}>Financial Services</a>
                                    </li></div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/manufacturing" style={{ marginLeft: '-25px', color: 'white' }}>Manufacturing</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',marginLeft: '190px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/utilities" style={{ marginLeft: '-25px', color: 'white' }}>Utilities</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',marginLeft: '135px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/government" style={{ marginLeft: '-25px', color: 'white' }}>Government</a></li>
                                </div>
                            </ul>
                        </li>

                        {/* <li class="nav-item dropdown">
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
                        </li> */}
                    </ul>
                    <a href="/">
                        <i class="bi bi-house-door" style={{ backgroundColor: 'transparent', fontSize: '20px' }}></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default NavBar