import React from "react";
import { Outlet } from "react-router-dom";
import './myscriptfile/script1.js';
import './myscriptfile/scp1.js';
import './myscriptfile/scp2.js';
import './myscriptfile/scp3.js';
import './myscriptfile/scp4.js';
import './myscriptfile/scp5.js';

function HomePage() {
    return (
        <div>
            <div style={{ backgroundColor: 'rgb(158, 206, 206)', marginTop: '75px' }}>
                <div id='socialMedia'>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-whatsapp"></i>
                </div>
                <div id="makeanenquiry">
                    <a href="/">
                        <span id="make" style={{ width: '40px', height: '100px', padding: '12px', backgroundColor: 'rgb(230, 16, 165)', color: 'white' }}>Make An Enquiry</span>
                    </a>
                </div>
                <div id="marquee">
                    <marquee behavior="" direction="left">Welcome to VENSYX Data Solutions</marquee>
                </div>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="https://media.gettyimages.com/id/184837627/photo/dark-towering-buildings.jpg?s=612x612&w=gi&k=20&c=oDJSPEEhW4n3TFqvev0TF6hkF633sN_9a-I5X-e4giU=" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://media.istockphoto.com/id/1453843862/photo/business-meeting.webp?b=1&s=170667a&w=0&k=20&c=6R54FDDBB-mZHOxT_n1hDa9ow_ExC3gqbChGNKvRVhE=" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://www.referenceforbusiness.com/photos/corporate-image-630.jpg" class="d-block w-100" alt="..." />
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
                    <div style={{ width: '1256px', display: 'flex', flexDirection: 'column', padding: '50px' }}>
                        <h3>Who We Are</h3>
                        <h1>About VENSYX Data Solutions</h1>
                        <p style={{ textAlign: 'justify', fontSize: '25px' }}>
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
                    <div>
                        <h1>VENSYX  Vision & Mission</h1>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                            <div style={{ width: '50%', marginRight: '47px' }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqmTwAhF4AeZDCS6UxyCZu9tPcHjWRqCWraWDRuWxRB0DkoMwLEyUAW0NaTk0NUTqUKs&usqp=CAU" alt="" width="100%" height="400px" />
                            </div>
                        </div>
                    </div>
                    <h1>SOLUTIONS</h1>
                    <h2>Big Data & Advanced Analytics</h2>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{
                            textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px', padding: '15px'
                        }}></div>
                        <p>Data is exploding. Individuals, corporates, websites, call centers, shopping malls, mobile and RFID
                            devices etc. are generating data in various formats – Regular data, voice data, text data, video  and
                            like never before. It is estimated that by 2017 there will more bytes of data than the sand grains in
                            the world.</p>
                        <button class="btn btn-outline-primary" style={{ width: '80px', height: '40px', padding: '10px' }}>EXPLORE</button>

                    </div>
                    <h2>Business Intelligence Solutions</h2>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{
                            textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px', padding: '15px'
                        }}></div>
                        <p>VENSYX Data Solutions Business I that facilitate BIDW initiative of Many High Performing 'Fortune-1000' Companies across the Globe. We help Organizations across multiple verticals analyze the business problems and then propose innovative business intelligence and analytical solutions which link strategy with actions and create synergy between organizations Short-term, Medium term and long term priorities and Business Objectives.</p>
                    </div>
                    <h2>Data Management</h2>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{
                            textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px',
                            padding: '15px'
                        }}></div>
                        <p>VENSYX Data Solutions helps you to meet the data management goals to provide data assurance in terms
                            of security, quality and accessibility. VENSYX Data Solutions is focused on creation of accurate,
                            consistent and transparent data content for its customers. It emphasizes usability of data for its
                            intended purpose and audience.</p>
                        <button class="btn btn-outline-primary" style={{ width: '80px', height: '40px', padding: '10px' }}>EXPLORE</button></div>
                    <h2>Enterprise Data Warehouse</h2>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{
                            textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px', padding: '15px'
                        }}></div>
                        <p>The data warehouse is the key behind a competent Business Intelligence system. </p>
                        <h3>Key Capabilities</h3>
                        <p> Data Modelling
                            Data Mart Development
                            Data Integration
                            Information Delivery
                            Maintenance Operations, Support & Upgrades</p></div>
                    <h2>Application Middleware Management</h2>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{
                            textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px', padding: '15px'
                        }}></div>
                        <p>Middleware is the enabling technology of enterprise application integration. It describes a piece of software that connects two or more software application, allowing them to exchange data. Middleware solutions enable to align IT Infrastructure with an organization's business objectives and create value in the process.</p></div>
                    <div>
                        <div>
                            <h1>Our Services</h1>
                            <div></div>
                            <div></div>
                            <p>We re-design the way you do business with future -ready innovation, knowledge discovery & transitioning technologies.</p>
                            
                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'flex-end', backgroundColor: 'rgb(1, 1, 26)',paddingRight:'50px' }}>
                                <section>
                                    <div class='container reveal1'>
                                        <div class='cards1'>
                                            <div class='text-cards1'>
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
                                            <div className="text-cards2">
                                                <h3>Mobile Apps Development</h3>
                                                <p>
                                                    With the increasing use of Smart phones, there is a soaring demand for mobile applications in the market.
                                                </p>
                                                <button class='btn btn-outline-danger'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'flex-end', backgroundColor: 'rgb(1, 1, 26)',paddingRight:'50px' }}>
                                <section>
                                    <div class='container reveal3'>
                                        <div class='cards3'>
                                            <div class='text-cards3'>
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
                                            <div className="text-cards4">
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

                            <div style={{display:'flex',justifyContent:'flex-end',backgroundColor: 'rgb(1, 1, 26)',paddingRight:'50px' }}>
                                <section>
                                    <div class='container reveal5'>
                                        <div class='cards5'>
                                            <div class='text-cards5'>
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
                        <div>
                            <div>
                                <h1>Industries</h1>
                                <h2>Telecommunications</h2>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{
                                        textAlign: 'start', marginLeft: '50px', width: '50%',
                                        fontSize: '25px', padding: '15px'
                                    }}></div>
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
                                <h2>Financial Services</h2>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{
                                        textAlign: 'start', marginLeft: '50px', width: '50%',
                                        fontSize: '25px', padding: '15px'
                                    }}></div>
                                    <p>Banks are under more pressure now than ever before. Constantly evolving
                                        regulatory requirements, rising costs, economic pressures, and increased
                                        competition from non-traditional entrants in the banking industry have
                                        created a challenging business environment for banks of all sizes. In
                                        addition, businesses and consumers alike have come to expect a level of
                                        service unachievable using traditional product-centric systems that many
                                        banks still employ.</p>
                                </div>
                                <h2>Government</h2>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{
                                        textAlign: 'start', marginLeft: '50px', width: '50%',
                                        fontSize: '25px', padding: '15px'
                                    }}></div>
                                    <p>Stable societies have always been those best equipped to manage,
                                        safeguard and circulate information. Cornerstones of government such
                                        as technological development, legislation, justice, and yes,
                                        taxation all hinge on the development, maintenance, and access to
                                        effective channels of data management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'rgb(1, 1, 26)' }}>
                    <section style={{ padding: '25px' }}>
                        <div class='container reveal'>
                            <div class='cards'>
                                <div class='text-cards'>
                                    <h3>Enterprise Mobility Services</h3>
                                    <p>
                                        In today's world, the constantly changing economy, and the boom in the global market, often poses difficult challenges for your business.
                                    </p>
                                    <button class='btn btn-outline-warning'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                </div>
                                <div class='text-cards'>
                                    <h3>Mobile Apps Development</h3>
                                    <p>
                                        With the increasing use of Smart phones, there is a soaring demand for mobile applications in the market.
                                    </p>
                                    <button class='btn btn-outline-danger'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                </div>
                                <div class='text-cards'>
                                    <h3>Business Intelligence Services</h3>
                                    <p>
                                        Business Intelligence has transformed from being able to integrate data and create reports and dashboards.
                                    </p>
                                    <button class='btn btn-outline-primary'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                </div>
                                <div class='text-cards'>
                                    <h3>Web Application Development</h3>
                                    <p>
                                        Web portal service has gained popularity in the last few decades, since the internet has become accessible to the common people.
                                    </p>
                                    <button class='btn btn-outline-secondary'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                </div>
                                <div class='text-cards'>
                                    <h3>Testing and QA Services</h3>
                                    <p>
                                        VENSYX Data Solutions provides a holistic approach of testing and quality assurance to help you build a product or service.
                                    </p>
                                    <button class='btn btn-outline-success'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class='container reveal2'>
                            <div class='cards2'>
                                <div class='text-cards2'>
                                    <h3>Enterprise Mobility Services</h3>
                                    <p>
                                        In today's world, the constantly changing economy, and the boom in the global market, often poses difficult challenges for your business.
                                    </p>
                                    <button class='btn btn-outline-warning'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Read more</a></button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </main>
            <footer>
                <div style={{ backgroundColor: 'black', width: 'auto', height: '400px' }}>

                </div>
            </footer>
            <Outlet></Outlet>
        </div>
    )
}
export default HomePage