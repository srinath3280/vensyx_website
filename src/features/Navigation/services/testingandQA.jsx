import React from "react";
import { Outlet } from "react-router-dom";

function TestingandQAservices(){
    return(
        <>
            <div id='socialMedia'>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-whatsapp"></i>
            </div>
            <h1>Testing and QA Services</h1>
            <Outlet></Outlet>
        </>
    )
}
export default TestingandQAservices