import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function headimage() {
    let imageBox = {
        height: "400px",
        left: "0px",
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)"
    };
    let textStyle = {
        boxStyle:"border-box",
        position: "relative",
        width: "378px",
        height: "47px",
        paddingRight: "10px",
        paddingLeft:"30px",
        marginBottom:"40px",
        top: "358px",
        fontFamily: "IBM Plex Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "0px",
    /* identical to box height */
        color: "#FFFFFF"
}
return (
    <>    <div className='row'>
        <div className='container col-12' style={imageBox}>
            <h1 style={textStyle}>Computer Science</h1>
        </div>
    </div>
   
    </>

);
}