import React from "react";
import { Outlet } from "react-router-dom";

function Services(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'rgb(1, 0, 39)',height:'auto'}}>
            <Outlet></Outlet>
        </div>
    )
}
export default Services