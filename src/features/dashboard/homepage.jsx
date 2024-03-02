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
                        <p style={{ textAlign: 'justify', fontSize: '25px' }}>VENSYX Data Solutions is your Innovation to provide
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
                            <div style={{ width: '50%' }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqmTwAhF4AeZDCS6UxyCZu9tPcHjWRqCWraWDRuWxRB0DkoMwLEyUAW0NaTk0NUTqUKs&usqp=CAU" alt="" width="100%" height="400px" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div style={{backgroundColor:'black',width:'auto',height:'400px'}}>
                    
                </div>
            </footer>
            <Outlet></Outlet>
        </div>
    )
}
export default HomePage