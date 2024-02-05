import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const isHomePage = location.pathname === "/BlogPostApp/";

    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/BlogPostApp" className="navbar-brand mb-0 h1">BLOGPOST</Link>
            { isHomePage ? (
                <Link to="/BlogPostApp/add" className="btn btn-dark navbar-brand mb-0 h1">Add Post</Link>
            ) : (
                <Link to="/BlogPostApp/" className="btn btn-dark navbar-brand mb-0 h1">Home</Link>
            )}
        </nav>
    );
}

export default Navbar