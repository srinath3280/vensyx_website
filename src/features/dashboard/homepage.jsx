import React from "react";
import { Outlet } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <div style={{ backgroundColor: 'rgb(158, 206, 206)' }}>
                <div id='socialMedia'>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-whatsapp"></i>
                </div>
                <div id="makeanenquiry">
                    <a href="/">
                        <span id="make" style={{ width: '40px', height: '100px', padding: '12px', backgroundColor: 'rgba(0,0,0,0.5', color: 'white' }}>Make An Enquiry</span>
                    </a>
                </div>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://img.freepik.com/premium-photo/fantasy-illustration-beautiful-nature-environment_492154-5331.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://wallpaperaccess.com/full/1767101.jpg" class="d-block w-100" alt="..." />
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
                    <h1>About Us</h1>
                    <div style={{width:'1256px',display:'flex',flexDirection:'row'}}>
                        <div style={{width:'35%',marginLeft:'50px'}}>
                            <p>Who We Are</p>
                            <h2>About VENSYX Data Solutions</h2>
                            <p>VENSYX Data Solutions is your Innovation to provide
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
                        </div>
                        <div style={{width:'75%'}}>

                        </div>
                    </div>
                </div>
            </main>
            <Outlet></Outlet>
        </div>
    )
}
export default HomePage