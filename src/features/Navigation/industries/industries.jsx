import React from "react";
import { Outlet } from "react-router-dom";

function Industries(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'gray',height:'700px'}}>
            <h1>Industries</h1>
            <Outlet></Outlet>
        </div>
    )
}
export default Industries