import React from "react";
import { Outlet } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <div style={{ backgroundColor: 'rgb(158, 206, 206)', marginTop: '100px' }}>
                <div id='socialMedia'>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-whatsapp"></i>
                </div>
                <div id="makeanenquiry">
                    <a href="/">
                        <span id="make" style={{
                            width: '40px', height: '100px', padding: '12px',
                            backgroundColor: 'rgb(230, 16, 165)', color: 'white'
                        }}>Make An Enquiry</span>
                    </a>
                </div>
                <div id="marquee">
                    <marquee behavior="" direction="left">Welcome to VENSYX Data Solutions</marquee>
                </div>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="https://media.gettyimages.com/id/184837627/photo/dark-towering-buildings.jpg?s=612x612&w=gi&k=20&c=oDJSPEEhW4n3TFqvev0TF6hkF633sN_9a-I5X-e4giU="
                                class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://media.istockphoto.com/id/1453843862/photo/business-meeting.webp?b=1&s=170667a&w=0&k=20&c=6R54FDDBB-mZHOxT_n1hDa9ow_ExC3gqbChGNKvRVhE="
                                class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://www.referenceforbusiness.com/photos/corporate-image-630.jpg" class="d-block w-100"
                                alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
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
                        <p style={{ textAlign: 'justify', fontSize: '25px' }}>VENSYX Data Solutions is your Innovation to
                            provide
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
                        <h1>VENSYX Vision & Mission</h1>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{
                                textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px',
                                padding: '15px'
                            }}>
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
                            <div style={{ width: '50%' }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqmTwAhF4AeZDCS6UxyCZu9tPcHjWRqCWraWDRuWxRB0DkoMwLEyUAW0NaTk0NUTqUKs&usqp=CAU"
                                    alt="" width="100%" height="400px" />
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Big Data & Advanced Analytics</h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{
                        textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px', padding: '15px'
                    }}></div>
                    <p>Data is exploding. Individuals, corporates, websites, call centers, shopping malls, mobile and RFID
                        devices etc. are generating data in various formats – Regular data, voice data, text data, video – and
                        like never before. It is estimated that by 2017 there will more bytes of data than the sand grains in
                        the world. Unstructured data is growing faster than structured data. Big data is the buzz everywhere.
                        Big data refers to huge data sets characterized by larger volumes, greater variety and complexity,
                        generated at a higher velocity than any organization has faced before. Information, insights and
                        foresights have tremendous implication in every aspect of business. Organizations which are leveraging
                        analytics to differentiate themselves at the front with standardization at the core are able to create
                        sustainable competitive advantage. Analytics is enabling organizations to predict customer behaviour,
                        meet their needs and cement long-term customer relationships.</p>
                </div>
                <div>
                    <h1>Data Management</h1>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{
                            textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px',
                            padding: '15px'
                        }}></div>
                        <p>VENSYX Data Solutions helps you to meet the data management goals to provide data assurance in terms
                            of security, quality and accessibility. VENSYX Data Solutions is focused on creation of accurate,
                            consistent and transparent data content for its customers. It emphasizes usability of data for its
                            intended purpose and audience. VENSYX Data Solutions provides processes, tools, and metrics to help
                            organizations use information effectively and efficiently in order to achieve their business
                            objectives.</p>
                    </div>
                    <div>
                        <h1>services</h1>
                        <h2>Enterprise Mobility Services</h2>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px',padding: '15px'}}></div>
                            <p>In today's world, the constantly changing economy, and the boom in the global market, often poses
                                difficult challenges for your business. Therefore, if you want to keep your business moving
                                forward and, be ahead of the game, you have to keep up with the latest technology. Mobility has
                                been acknowledged as the most troublesome technology that modernization has faced today.
                            </p>
                        </div>
                        <h2>Mobile Apps Development</h2>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px',padding: '15px'}}></div>
                            <p>With the increasing use of Smart phones, there is a soaring demand for mobile applications in
                                the market. Development of mobile apps to suit the endless needs and purposes of the clients
                                is the latest trend today. Any business that wishes to survive in the market today has to
                                build up an application that suits the requirements of its customers.
                            </p>
                        </div>
                        <h2>Business Intelligence Services</h2>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px',padding: '15px'}}></div>
                            <p>Business Intelligence has transformed from being able to integrate data and create
                                reports and dashboards. With the changing market dynamics where we see multiple mergers
                                and Acquisitions, addition of new tools, Open source BI stabilizing, majority of the
                                workforce is on the move so mobility become critical etc. it is important that
                                Organizations be innovative, forward looking and nimble enough to adapt to changing
                                business imperatives. Quality of data is vital as the risk is high for decisions based
                                on inaccurate, incomplete or untimely information. Well-structured and comprehensive
                                Business Intelligence Solutions mitigate these risks, creating seamless information
                                access and provide a competitive advantage in the marketplace. We partner with our
                                customers to advice, build and co-manage an effective BI implementation strategy coupled
                                with a sustainable cost effective execution model.
                            </p>
                        </div>
                        <h2>Web Application Development</h2>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{
                                textAlign: 'start', marginLeft: '50px', width: '50%', fontSize: '25px'
                                , padding: '15px'
                            }}></div>
                            <p>Web portal service has gained popularity in the last few decades, since the internet
                                has become accessible to the common people. It plays an essential role in every
                                business objectives, and aims to reach a target audience worldwide for generating
                                leads. A web design company providing web design services that not only concentrates
                                in building a remarkable and inspiring user-friendly website, but also undertakes
                                the mission of endorsing it on the World Wide Web successfully.</p>
                        </div>
                        <h2>Testing and QA Services</h2>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{
                                textAlign: 'start', marginLeft: '50px', width: '50%',
                                fontSize: '25px', padding: '15px'
                            }}></div>
                            <p>VENSYX Data Solutions provides a holistic approach of testing and quality
                                assurance to help you build a product or service through accelerated testing
                                methods in order to reduce errors and defects in software that can affect your
                                operations. In a high edge competitive atmosphere, it is very important to bring
                                about a product or service with assured quality. Testing helps to assess,
                                validate and verify the features of the given software that keeps an eye on the
                                input and output functionality. In many companies the creditability, revenue
                                generation and growth of the business is driven by the software testing process
                                with incorporated quality assurance. Quality assurance is a systematic approach
                                to check if the product designed, meets the specific requirements of the
                                customer or not. Using independent leading testing and QA techniques to test the
                                functionality, performance and security of the service or product can eliminate
                                defects in the early stage of the development. Quality assurance and testing are
                                designed to provide better functionality of a service or product to increase
                                customer confidence and company creditability.</p>
                        </div>
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