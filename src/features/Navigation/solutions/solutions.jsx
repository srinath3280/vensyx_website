import React from "react";
import { Outlet } from "react-router-dom";

function Solutions(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'gray',height:'700px'}}>
            <h1>Solutions</h1>
            <Outlet></Outlet>
        </div>
    )
}
export default Solutions