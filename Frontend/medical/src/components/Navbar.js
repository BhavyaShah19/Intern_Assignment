import React from 'react'
import { Link, useLocation,useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem('token');
        navigate('/login')
    }
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${location.pathname === '/' ? "active" : ""
                                }`}
                            aria-current="page"
                            to="/dashboard"
                        >
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""
                                }`}
                            aria-current="page"
                            to="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>
                </ul>
                {!localStorage.getItem('token') ? <form className="d-flex" style={{
          "position": "absolute",
          "right": "0"
        }}>
          <Link
            className="btn btn-primary mx-2"
            to="/login"
            role="button"
          >
            Login
          </Link>
          <Link className="btn btn-primary mx-2" to="/signup" role="button">
            Sign Up
          </Link>
        </form> : <button onClick={logout} style={{ 'position': 'absolute', 'right': '0' }} className="btn btn-primary">Logout</button>}
            </nav>
        </nav>
    )
}

export default Navbar
