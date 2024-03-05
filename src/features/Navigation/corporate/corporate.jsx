import React from "react";
import { Outlet } from "react-router-dom";

function Corporate(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'white',height:'auto'}}>
            <Outlet></Outlet>
        </div>
    )
}
export default Corporate