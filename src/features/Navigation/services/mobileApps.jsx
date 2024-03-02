import React from "react";
import { Outlet } from "react-router-dom";

function MobileApps(){
    return(
        <>
            <div id='socialMedia'>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-whatsapp"></i>
            </div>
            <h1>Mobile Apps Development</h1>
            <Outlet></Outlet>
        </>
    )
}
export default MobileApps