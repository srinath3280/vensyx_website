import React from "react";
import { Outlet } from "react-router-dom";

function Industries(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'rgb(5, 5, 39)',height:'auto'}}>
            <Outlet></Outlet>
        </div>
    )
}
export default Industries