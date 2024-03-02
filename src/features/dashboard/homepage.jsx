import React from "react";
import { Outlet } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <div id='socialMedia'>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-whatsapp"></i>
            </div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/premium-photo/fantasy-illustration-beautiful-nature-environment_492154-5331.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://wallpaperaccess.com/full/1767101.jpg" class="d-block w-100" alt="..."/>
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
            <main>
                <div>

                </div>
            </main>
            <Outlet></Outlet>
        </div>
    )
}
export default HomePage