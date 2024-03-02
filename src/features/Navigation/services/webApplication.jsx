import React from "react";
import { Outlet } from "react-router-dom";

function WebApplication(){
    return(
        <>
            <div id='socialMedia'>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-whatsapp"></i>
            </div>
            <h1>Web Application Development</h1>
            <Outlet></Outlet>
        </>
    )
}
export default WebApplication