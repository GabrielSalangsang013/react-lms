import React from "react";

const Onlinebar = (props) => {
    return (
        <div className="online-bar">
            <div className="bar-1 bar-float">
                <div className="bar-1-dot" id={props.status}></div>
            </div>
            <div className="bar-2 bar-float"><img className="online-img" alt="Hello" src={props.source} /></div>
            <div className="bar-3 bar-float">{props.fullname}</div>
            <div className="bar-4 bar-float"><i className="material-icons">videocam</i></div>
            <div className="bar-5 bar-float"><i className="material-icons">phone</i></div>
        </div>
    )
}

export default Onlinebar