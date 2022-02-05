import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function sidebar() {
    let lineStyle={
        "position": "absolute",
        width: "243px",
    height: "0px",
    left: "997px",
    top: "550px",
    border: "4px solid #B8B8B8"
    }
    let textStyle={
        position: "absolute",
width: "77px",
height: "18px",
left: "1019px",
top: "530px",
fontFamily: "IBM Plex Sans",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "14px",
lineHeight: "18px",

color: "#000000"
    };
    return (<>
    <h1 style={textStyle}>Noida, India</h1>
    <hr style={lineStyle}></hr>
    </>);
    }