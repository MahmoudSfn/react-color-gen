import React from 'react';

const inputcount = ( props ) => {

    const divStyle = {
        display: 'inline-block',
        color: 'black',
        padding: "5px"
    };
    const svgStyle = {
        width: "70",
        height: "70",
        color: "black"
    };

    return (
        <div style={divStyle} >
            <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg">
                <rect x= "0" y= "0" style={props.style} />
                <text dominant-baseline="middle" text-anchor="middle" x= "50%" y= "50%" >{props.val}</text>    
            </svg>
        </div>
    );
};

export default inputcount;