import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
    let searchBarStyle = {
        position: "absolute",
        width: "360px",
        height: "42px",
        left: "540px",
        top: "16px",
        background: "#F2F2F2",
        borderRadius: "21px"
    }
    let loginStyle = {
        position: "absolute",
        width: "183px",
        height: "21px",
        left: "1161px",
        top: "27px",
        fontFamily: "IBM Plex Sans",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "21px",
        /* identical to box height */
        textAlign: "right",
        color: "#2E2E2E"
    }
    let navBar = {
        zIndex: "2",
        display:"block",
        position: "fixed",
        width:"100%",
        height: "72px",
        left: "0px",
        top: "0px",
        background: "#FFFFFF",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.12)"
    }
return (
<div className='row '> 
    <nav className=" navbar navbar-expand-lg navbar-light bg-light d-none d-sm-block" style={navBar}>
        
        <div className="container-fluid ">
            <Link className="navbar-brand" to="/">ATGWORLD</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                    <input className="form-control nav-link" type="search" placeholder="Search" aria-label="Search" value={"Search your favourite group in ATG"} style={searchBarStyle} />
                    </li>
                    <li className='nav-item'>
                    <Link className=" nav-link" to="/" style={loginStyle} >Create Account. Its Free</Link>
                    </li>
                </ul>

                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={"Search your text"} style={searchBarStyle} />
                <Link className="navbar-brand  me-2" to="/" style={loginStyle} >Create Account. Its Free</Link> */}
            </div>
        </div>
        
    </nav>
    </div>
)
}
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}