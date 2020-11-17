import React from 'react';

const inputcount = ( props ) => {

    const inputStyle = {
        color: 'white',
        background: 'black',
        textAlign: 'center',
        padding: '8px',
        border: '0px solid white',
        borderRadius: '25px 0px 0px 25px',
        outline: 'none'
    }
    
    const buttonStyle = {
        color: 'white',
        background: 'blue',
        border: '0px solid white',
        borderRadius: '0px 25px 25px 0px',
        padding: '8px',
        height: "31",
        outline: 'none',
        cursor: "pointer"
    }

    const divStyle = {
        textAlign: 'center'
    }

    return (
        <div style={divStyle}>
            <input style={inputStyle} type="number" onChange={props.onchange} />
            <button style={buttonStyle} onClick={props.onclick}>Load</button>
        </div>
    );
};

export default inputcount;