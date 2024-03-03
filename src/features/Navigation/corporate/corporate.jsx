import React from "react";
import { Outlet } from "react-router-dom";

function Corporate(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'gray',height:'700px'}}>
            <h1>Corporate</h1>
            
            <Outlet></Outlet>
        </div>
    )
}
export default Corporate