import React from "react";
import { Outlet } from "react-router-dom";

function EnterpriseMobility(){
    return(
        <>
            <div id='socialMedia'>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-whatsapp"></i>
            </div>
            <h1>Enterprise Mobility</h1>
            <Outlet></Outlet>
        </>
    )
}
export default EnterpriseMobility