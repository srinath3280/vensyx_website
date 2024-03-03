import React from "react";
import { Outlet } from "react-router-dom";

function Products(){
    return(
        <div style={{marginTop:'75px',backgroundColor:'gray',height:'700px'}}>
            <h1>Products</h1>
            <Outlet></Outlet>
        </div>
    )
}
export default Products