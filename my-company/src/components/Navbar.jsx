import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "#f8f9fa", display: "flex", justifyContent: "space-around", padding: "1rem" }}>
            <nav>
                <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0, padding: 0 }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
