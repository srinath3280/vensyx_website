import React from "react";
import { Outlet } from "react-router-dom";
import './myscriptfile/script1.js';
import './myscriptfile/scp1.js';
import './myscriptfile/scp2.js';
import './myscriptfile/scp3.js';
import './myscriptfile/scp4.js';
import './myscriptfile/scp5.js';
import './myscriptfile/scp7.js';

function HomePage() {
    return (
        <div>
            <div className="container1" style={{ width: 'auto', backgroundImage: "linear-gradient(to right, #2b2b4d, #364a68, #6a8496, #adc0c6, #fafdfd)", marginTop: '75px' }}>
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
                <div id="marquee">
                    <marquee behavior="" direction="left"><b>Welcome to VENSYX Data Solutions</b></marquee>
                </div>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="/images/building2.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption">
                                <p style={{ fontSize: '35px', marginTop: '-100px', backgroundColor: 'rgba(0,0,0,0.1)',textTransform:'uppercase' }}>
                                    We bring you powerfull advantages to navigate your digital transformtion
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/working5.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption">
                                <p style={{ marginLeft: '550px', fontSize: '40px', backgroundColor: 'rgba(0,0,0,0.3)', marginTop: '-50px',textTransform:'uppercase' }}>
                                    PASSION TO INNOVATE
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/group1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption">
                                <p style={{ fontSize: '40px', backgroundColor: 'rgba(0,0,0,0.4)', marginTop: '-400px',textTransform:'uppercase' }}>
                                    Teamwork Makes The Dreamwork
                                </p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <main>
                <div id="content1">
                    <section>
                        <div style={{ width: '1256px', display: 'flex', flexDirection: 'column', padding: '50px' }}>
                            <h3 class='reveal1'>Who We Are</h3>
                            <h1 class='reveal1'>About VENSYX Data Solutions</h1>
                            <p class='reveal1' style={{ textAlign: 'justify', fontSize: '25px' }}>
                                VENSYX Data Solutions is your Innovation to provide
                                world-class Big Data, Business Intelligence, Data
                                Integration, Data Quality, Data Warehousing, Data
                                Governance, and Master Data Management services
                                and solutions to companies around the globe and
                                across industries. VENSYX Data Solutions has been
                                helping business and technology work together to
                                protect existing data investments and unlock their
                                business value using the most advanced tools,
                                technologies, methodologies available and Intelligent
                                solutions for superior performance., we put emphasis
                                on long-term commitment and combine global reach
                                and local intimacy to provide premier professional
                                services from consulting, system development to
                                business IT outsourcing.
                            </p>
                            <button class="btn btn-outline-primary" style={{ width: '150px', padding: '10px' }}>EXPLORE</button>
                        </div>
                    </section>
                    <div>
                        <section>
                            <h1 class='reveal1'>VENSYX  Vision & Mission</h1>
                            <div class='reveal1' style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px', padding: '15px' }}>
                                    <h2>Vision:</h2>
                                    <p>
                                        To be a world class organization admired for
                                        consistently delivering superior Business value
                                    </p>
                                    <h2>Mission:</h2>
                                    <p>
                                        We will win by excelling in execution and by
                                        ensuring total customer satisfaction
                                    </p>
                                </div>
                                <div id="bigdata" class='container reveal1' style={{ width: '50%', }}>
                                    <img src="images/vission2.jpg" alt="" width="500px" height="350px" style={{ boxShadow: '4px 4px 10px white,-4px -4px 10px white' }} />
                                </div>
                            </div>
                        </section>
                    </div>

                    <h1 class='reveal1' style={{ marginTop: '25px' }}>SOLUTIONS</h1>
                    <section>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px' }}>
                            <div id="bigdata" class='container reveal1' style={{ width: '50%' }}>
                                <img src="images/bigdata2.jpg" alt="" width='500px' height='350px' style={{ borderRadius: '10px' }} />
                            </div>
                            <div class='reveal1' style={{ display: 'flex', flexDirection: 'column', width: '50%', marginRight: '50px' }}>
                                <h2>Big Data & Advanced Analytics</h2>
                                <div style={{ textAlign: 'justify', width: '100%', fontSize: '25px', padding: '10px' }}>
                                    <p>Data is exploding. Individuals, corporates, websites, call centers, shopping malls, mobile and RFID
                                        devices etc. are generating data in various formats – Regular data, voice data, text data, video  and
                                        like never before. It is estimated that by 2017 there will more bytes of data than the sand grains in
                                        the world.</p>
                                </div>
                                <button class="btn btn-outline-primary" style={{ width: '150px', padding: '10px' }}>EXPLORE</button>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '70%', marginLeft: '50px' }}>
                                <h2 class='reveal1'>Business Intelligence Solutions</h2>
                                <div style={{ textAlign: 'justify', width: '100%', fontSize: '25px', padding: '10px' }}>
                                    <p class='reveal1'>VENSYX Data Solutions Business I that facilitate BIDW initiative of Many High Performing 'Fortune-1000' Companies across the Globe. We help Organizations across multiple verticals analyze the business problems and then propose innovative business intelligence and analytical solutions which link strategy with actions and create synergy between organizations Short-term, Medium term and long term priorities and Business Objectives.</p>
                                </div>
                                <button class="btn btn-outline-primary" style={{ width: '150px', padding: '10px' }}>EXPLORE</button>
                            </div>
                            <div id="bigdata" class='container reveal1' style={{ width: '30%', marginRight: '50px' }}>
                                <img src="images/businessintelligence.jpg" alt="" width='300px' height='300px' style={{ borderRadius: '50%' }} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px' }}>
                            <div id="bigdata" class='container reveal1' style={{ width: '50%', marginLeft: '0px' }}>
                                <img src="images/datamanagement.jpg" alt="" width='80%' height='350px' style={{ borderRadius: '10px' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginRight: '50px' }}>
                                <h2 class='reveal1'>Data Management</h2>
                                <div style={{ textAlign: 'justify', width: '100%', fontSize: '25px', padding: '10px' }}>
                                    <p class='reveal1'>VENSYX Data Solutions helps you to meet the data management goals to provide data assurance in terms of security, quality and accessibility. VENSYX Data Solutions is focused on creation of accurate,consistent and transparent data content for its customers. It emphasizes usability of data for its intended purpose and audience.</p>
                                </div>
                                <button class="btn btn-outline-primary" style={{ width: '150px', padding: '10px' }}>EXPLORE</button>
                            </div>
                        </div>
                    </section>

                    <h1 class='reveal1' style={{ marginTop: '25px' }}>Our Services</h1>
                    <div class='reveal1' style={{ width: '50px', border: '1px solid white', marginLeft: 'auto', marginRight: 'auto' }}></div>
                    <div class='reveal1' style={{ width: '75px', border: '1px solid white', marginLeft: 'auto', marginRight: 'auto', marginTop: '5px' }}></div>
                    <p class='reveal1' style={{ fontSize: '25px', fontFamily: 'cursive' }}>We re-design the way you do business with future -ready innovation, knowledge discovery & transitioning technologies.</p>

                    <div id="ourservice">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: '50px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                            <section>
                                <div class='container reveal1'>
                                    <div class='cards1'>
                                        <div class='text-cards1 bg-primary'>
                                            <h3>Enterprise Mobility Services</h3>
                                            <p>
                                                In today's world, the constantly changing economy, and the boom in the global market, often poses difficult challenges for your business.
                                            </p>
                                            <button class='btn btn-outline-warning'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div class='container reveal2'>
                                    <div className="cards2">
                                        <div className="text-cards2 bg-danger">
                                            <h3>Mobile Apps Development</h3>
                                            <p>
                                                With the increasing use of Smart phones, there is a soaring demand for mobile applications in the market.
                                            </p>
                                            <button class='btn btn-outline-success'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: '50px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                            <section>
                                <div class='container reveal3'>
                                    <div class='cards3'>
                                        <div class='text-cards3 bs-danger-bg-subtle'>
                                            <h3>Business Intelligence Services</h3>
                                            <p>
                                                Business Intelligence has transformed from being able to integrate data and create reports and dashboards.
                                            </p>
                                            <button class='btn btn-outline-primary'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div class='container reveal4'>
                                    <div className="cards4">
                                        <div className="text-cards4 bg-info">
                                            <h3>Web Application Development</h3>
                                            <p>
                                                Web portal service has gained popularity in the last few decades, since the internet has become accessible to the common people.
                                            </p>
                                            <button class='btn btn-outline-secondary'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '50px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                            <section>
                                <div class='container reveal5'>
                                    <div class='cards5'>
                                        <div class='text-cards5 bg-warning'>
                                            <h3>Business Intelligence Services</h3>
                                            <p>
                                                Business Intelligence has transformed from being able to integrate data and create reports and dashboards.
                                            </p>
                                            <button class='btn btn-outline-primary'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <h1 class='reveal1' style={{ marginTop: '25px' }}>Industries</h1>
                    <section>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '25px' }}>
                            <div class='reveal1' style={{ display: 'flex', flexDirection: 'column', width: '50%', marginLeft: '50px' }}>
                                <h2>Telecommunications</h2>
                                <div style={{ textAlign: 'justify', width: '100%', fontSize: '25px', padding: '10px' }}>
                                    <p>The telecommunications industry has arguably evolved more than any other
                                        market sector in the last ten years. This evolution has brought not only a
                                        lot of benefits for telecommunication operators and their customers, but
                                        also a lot of issues to resolve. As the telco industry has moved from a
                                        product-centric to a customer-centric approach, the need for high-quality
                                        customer information is now greater than ever. The biggest challenge for
                                        telcos is how to unite fragmented pieces of information about customers
                                        (i.e. their characteristic, products, behaviour, etc.) to create a complete,
                                        360-degree customer view.</p>
                                </div>
                                <button class="btn btn-outline-primary" style={{ width: '150px', padding: '10px' }}>EXPLORE</button>
                            </div>
                            <div id="bigdata" class='container reveal1' style={{ width: '50%', marginLeft: '0px' }}>
                                <img src="images/telecommunication.jpg" alt="" width='80%' height='350px' style={{ borderRadius: '10px' }} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div id="bigdata" class='container reveal1' style={{ width: '50%', marginLeft: '0px' }}>
                                <img src="images/financial2.jpg" alt="" width='80%' height='350px' style={{ borderRadius: '10px' }} />
                            </div>
                            <div class='reveal1' style={{ display: 'flex', flexDirection: 'column', width: '50%', marginRight: '50px' }}>
                                <h2>Financial Services</h2>
                                <div style={{ textAlign: 'justify', width: '100%', fontSize: '25px', padding: '10px' }}>
                                    <p>Banks are under more pressure now than ever before. Constantly evolving
                                        regulatory requirements, rising costs, economic pressures, and increased
                                        competition from non-traditional entrants in the banking industry have
                                        created a challenging business environment for banks of all sizes. In
                                        addition, businesses and consumers alike have come to expect a level of
                                        service unachievable using traditional product-centric systems that many
                                        banks still employ.</p>
                                </div>
                                <button class="btn btn-outline-primary" style={{ width: '150px', padding: '10px' }}>EXPLORE</button>
                            </div>
                        </div>
                    </section>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px', marginRight: '50px', marginBottom: '25px', marginTop: '25px' }}>
                            <h2 class='reveal1'>Government</h2>
                            <div style={{ textAlign: 'justify', width: '100%', fontSize: '25px', padding: '10px' }}>
                                <p class='reveal1'>Stable societies have always been those best equipped to manage,
                                    safeguard and circulate information. Cornerstones of government such
                                    as technological development, legislation, justice, and yes,
                                    taxation all hinge on the development, maintenance, and access to
                                    effective channels of data management.</p>
                            </div>
                            <button class="btn btn-outline-primary" style={{ width: '150px', padding: '10px' }}>EXPLORE</button>
                        </div>
                    </div>
                </div>
            </main >

            <footer>
                <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: 'black', width: 'auto', height: 'auto', display: 'flex', flexDirection: 'row', padding: '20px', textAlign: 'start' }}>
                        <div style={{ width: '25%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
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
                        <div style={{ width: '1px', height: '200px', border: '1px solid grey' }}></div>
                        <div style={{ width: '25%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <h3 style={{ color: 'white',marginLeft: '35px' }}>Services</h3>
                            <div class='links'>
                                <ul>
                                    <li><a href="/services/enterprisemobility">Enterprise Mobility Service</a></li>
                                    <li><a href="/services/mobileapps">Mobile Apps Development</a></li>
                                    <li><a href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
                                    <li><a href="/services/webapplication">Web Application Development</a></li>
                                    <li><a href="/services/testing">Testing and QA Services</a></li>
                                </ul>
                            </div>
                            {/* <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'start' }}> */}
                            {/* <div style={{ width: '100%', height: 'auto', }}> */}
                            {/* <div class='links' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <h5 style={{ color: 'orange' }}>Enterprise Mobility Service</h5>
                                        <ul style={{ marginLeft: '-25px' }}>
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
                                        <ul style={{ marginLeft: '-25px' }}>
                                            <li><a href="/services/andriodapp">Android App Development</a></li>
                                            <li><a href="/services/window8">Windows8 App Development</a></li>
                                            <li><a href="/services/blackberry">Blackberry App Development</a></li>
                                            <li><a href="/services/iphoneapp">Iphone App Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Business Intelligence Services</h5>
                                        <ul style={{ marginLeft: '-25px' }}>
                                            <li><a href="/services/businessintelligenceservices">Business Intelligence Services</a></li>
                                        </ul>
                                    </div> */}
                            {/* </div> */}
                            {/* <div style={{ width: '50%', height: 'auto', }}>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Web Application Development</h5>
                                        <ul style={{ marginLeft: '-25px' }}>
                                            <li><a href="/services/crmapplication">CRM Application Development</a></li>
                                            <li><a href="/services/inventory">Inventory Management</a></li>
                                            <li><a href="/services/contentmanagement">Content Management System</a></li>
                                            <li><a href="/services/customwebapp">Custom Web App Development</a></li>
                                            <li><a href="/services/opensourcedevelopment">OpenSource Development</a></li>
                                        </ul>
                                    </div>
                                    <div class='links'>
                                        <h5 style={{ color: 'orange' }}>Test & QA Services</h5>
                                        <ul style={{ marginLeft: '-25px' }}>
                                            <li><a href="/services/automatedtesting">Automated Testing</a></li>
                                            <li><a href="/services/selenium">Selenium</a></li>
                                            <li><a href="/services/qtp">QTP</a></li>
                                            <li><a href="/services/manualtesting">Manual Testing</a></li>
                                            <li><a href="/services/testcomplete">Test Complete</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                            {/* </div> */}
                        </div>
                        <div style={{ width: '1px', height: '200px', border: '1px solid grey', }}></div>
                        <div class='links' style={{ width: '25%', height: 'auto' }}>
                            <h3 style={{ color: 'white', marginLeft: '30px' }}>Industries</h3>
                            <ul>
                                <li><a href="/industries/telecommunications">Telecommunications</a></li>
                                <li><a href="/industries/retail">Retail</a></li>
                                <li><a href="/industries/financialservices">Financial Services</a></li>
                                <li><a href="/industries/manufacturing">Manufacturing</a></li>
                                <li><a href="/industries/utilities">Utilities</a></li>
                                <li><a href="/industries/government">Government</a></li>
                            </ul>
                        </div>
                        <div style={{ width: '1px', height: '200px', border: '1px solid grey' }}></div>
                        <div class='links' style={{ width: '25%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <h3 style={{ color: 'white', marginLeft: '30px' }}>Company</h3>
                            <div>
                                <ul>
                                    <li><a href="/corporate/aboutus">About Us</a></li>
                                    <li><a href="/corporate/vissionmission">Vission & Mission</a></li>
                                    <li><a href="/corporate/corevalue">Core Value</a></li>
                                    <li><a href="/corporate/socialresponsibility">Social Responsibility</a></li>
                                    <li><a href="/corporate/location">Loaction</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '20px', color: 'white' }}>This website may store or retrive your browser information for personalizing, digital experience.To access more about our privacy policy. <a href="">click here</a></p>
                        <p style={{ color: 'white' }}>Copyright © 2014 - VENSYX Data Solutions</p>
                    </div>
                </div>
            </footer>
            <Outlet></Outlet>
        </div >
    )
}
export default HomePage