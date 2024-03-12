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
                        <li class="nav-item dropdown upper-come-nav-part-content">
                            <a class="nav-link dropdown-toggle" href="/corporate" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Corporate
                            </a>
                            <ul class="dropdown-menu " style={{ width: '100%', height: '520px', position: 'fixed', zIndex: '999999', top: '75px', marginLeft: '0px', left: '0px', padding: '40px', backgroundColor: 'black' }}>
                                <span style={{ fontSize: '35px', color: 'orange' }}>CORPORATE</span>
                                <p style={{ fontSize: '20px', marginBottom: '25px', color: 'white', marginTop: '25px' }}>
                                    VENSYX Data Solutions is your Innovation to provide world-class Big Data, Business Intelligence, Data Integration, Data Quality, Data Warehousing, Data Governance, and Master Data Management services and solutions to companies around the globe and across industries.
                                </p>
                                <button class="btn btn-outline-warning" style={{ width: '150px', height: '50px', marginBottom: '50px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/aboutus" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>About Us</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '200px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/vissionmission" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Vision & Mission</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '200px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/corevalue" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Core Value</a>
                                    </li>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/socialresponsibility" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Social Responsibility</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '120px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/corporate/location" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Location</a>
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
                                <button class="btn btn-outline-warning" style={{ width: '150px', height: '50px', marginBottom: '50px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/bigdata" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Big Data & Advanced Analytics</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '200px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/businessIntelligence" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Business Intelligence Solutions</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '200px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/datamanagement" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Data Management</a>
                                    </li>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/enterprisedatawarehouse" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Enterprise Data Warehouse</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '225px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/solutions/applicationmiddleware" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Application Middleware Management</a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item dropdown upper-come-nav-part-content">
                            <a class="nav-link dropdown-toggle" href="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu " style={{ width: '100%', height: '520px', position: 'fixed', zIndex: '999999', top: '75px', marginLeft: '0px', left: '0px', padding: '40px', backgroundColor: 'black' }}>
                                <span style={{ fontSize: '35px', color: 'orange' }}>PRODUCTS</span>
                                <p style={{ fontSize: '20px', marginBottom: '25px', color: 'white', marginTop: '25px' }}>
                                    The service allows to perform a wide range of tasks in logistics and delivery – transportation arrangements, transport processes optimization and cost saving.
                                </p>
                                <button class="btn btn-outline-warning" style={{ width: '150px', height: '50px', marginBottom: '50px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/products/logmode" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Log-MODE</a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item dropdown upper-come-nav-part-content">
                            <a class="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul class="dropdown-menu " style={{ width: '100%', height: '520px', position: 'fixed', zIndex: '999999', top: '75px', marginLeft: '0px', left: '0px', padding: '40px', backgroundColor: 'black' }}>
                                <span style={{ fontSize: '35px', color: 'orange' }}>SERVICES</span>
                                <p style={{ fontSize: '20px', marginBottom: '25px', color: 'white', marginTop: '25px' }}>
                                    Many Industries today are facing with an explosion of data across the enterprise, while at the same time increasing government regulations require them to store their data for long time periods.
                                </p>
                                <button class="btn btn-outline-warning" style={{ width: '150px', height: '50px', marginBottom: '25px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <div>
                                        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                            <a class="dropdown-item" href="/services/enterprisemobility" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Enterprise Mobility Service</a>
                                        </li>
                                        <ul>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/businessProcess" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Business Process Mobilization</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/b2bmobileapps" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>B2B Mobile Apps Development</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/enterpriseandroidapp" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Enterprise Android App Development</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/enterpriseapp" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Enterprise App Distribution</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/enterpriseiosapp" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Enterprise IOS App Development</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/mobilebusiness" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Mobile Business Intelligence</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                            <a class="dropdown-item" href="/services/mobileapps" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Mobile Apps Development</a>
                                        </li>
                                        <ul>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/andriodapp" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Android App Development</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/window8" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Windows8 App Development</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/blackberry" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Balackberry App Development</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/iphoneapp" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Iphone App Development</a>
                                            </li>
                                        </ul>
                                        {/* <div style={{width:'300px',border:'1px solid grey',marginLeft:'auto',marginRight:'auto'}}></div> */}
                                        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                            <a class="dropdown-item" href="/services/businessintelligenceservices" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Business Intelligence Services</a>
                                        </li>
                                    </div>

                                    <div>
                                        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                            <a class="dropdown-item" href="/services/webapplication" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Web Application Development</a>
                                        </li>
                                        <ul>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/crmapplication" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>CRM Application Development</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/inventory" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Inventory Management</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/contentmanagement" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Content Management System</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/customwebapp" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Custom Webapp Development</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/opensourcedevelopment" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Open-source Development</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                            <a class="dropdown-item" href="/services/testing" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Testing & QA Services</a>
                                        </li>
                                        <ul>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/automatedtesting" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Automated Testing</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/selenium" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Selenium</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/qtp" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>QTP</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/manualtesting" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Manual Testing</a>
                                            </li>
                                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                                <a class="dropdown-item" href="/services/testcomplete" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Test Complete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
                                <button class="btn btn-outline-warning" style={{ width: '150px', height: '50px', marginBottom: '50px' }}>Explore</button>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '25px' }}>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/telecommunications" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Telecommunications</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '150px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/retail" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Retail</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '150px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/financialservices" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Financial Services</a>
                                    </li></div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/manufacturing" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Manufacturing</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '190px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/utilities" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Utilities</a>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '135px' }}>
                                        <i class="bi bi-chevron-right" style={{ backgroundColor: 'transparent', fontSize: '20px', color: 'white' }}></i>
                                        <a class="dropdown-item" href="/industries/government" style={{ marginLeft: '-25px', color: 'white', backgroundColor: 'transparent' }}>Government</a></li>
                                </div>
                            </ul>
                        </li>
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