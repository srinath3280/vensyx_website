import React from "react";
import { Outlet } from "react-router-dom";

function Industries(){
    return(
        <>
            <h1>Industries</h1>
            <Outlet></Outlet>
        </>
    )
}
export default Industries