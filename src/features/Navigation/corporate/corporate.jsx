import React from "react";
import { Outlet } from "react-router-dom";

function Corporate(){
    return(
        <>
            <h1>Corporate</h1>
            <Outlet></Outlet>
        </>
    )
}
export default Corporate