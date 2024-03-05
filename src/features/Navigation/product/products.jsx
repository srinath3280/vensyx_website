import React from "react";
import { Outlet } from "react-router-dom";

function Products(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'rgb(1, 1, 49)',height:'auto'}}>
            <Outlet></Outlet>
        </div>
    )
}
export default Products