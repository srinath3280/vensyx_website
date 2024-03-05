import React from "react";
import { Outlet } from "react-router-dom";

function Corporate(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'rgb(8, 8, 71)',height:'auto'}}>
            <Outlet></Outlet>
        </div>
    )
}
export default Corporate