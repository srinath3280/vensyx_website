import React from "react";
import { Outlet } from "react-router-dom";

function Services(){
    return(
        <>
            <h1>Services</h1>
            <Outlet></Outlet>
        </>
    )
}
export default Services