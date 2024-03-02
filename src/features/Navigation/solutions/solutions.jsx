import React from "react";
import { Outlet } from "react-router-dom";

function Solutions(){
    return(
        <>
            <h1>Solutions</h1>
            <Outlet></Outlet>
        </>
    )
}
export default Solutions