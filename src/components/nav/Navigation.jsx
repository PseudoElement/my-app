import React from "react";
import { Link } from "react-router-dom";
export function Navigation(){
    return(
        <nav>
            <Link to='/'>Posts</Link>
            <Link to='/about'>About us</Link>
        </nav>
    )
}