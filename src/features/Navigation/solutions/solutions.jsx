import React from "react";
import { Outlet } from "react-router-dom";

function Solutions(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'rgb(4, 3, 48)',height:'auto'}}>
            <Outlet></Outlet>
        </div>
    )
}
export default Solutions