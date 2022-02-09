import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location=useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                        <Link
                            className={`nav-link ${location.pathname==='/' ? "active" : ""
                                }`}
                            aria-current="page"
                            to="/dashboard"
                        >
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${location.pathname === "/dashboard"|| location.pathname==='/' ? "active" : ""
                                }`}
                            aria-current="page"
                            to="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link  ${location.pathname === "/login" ? "active" : ""
                                }`}
                            to="/login"
                        >
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link  ${location.pathname === "/signup" ? "active" : ""
                                }`}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar
