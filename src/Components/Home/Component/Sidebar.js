import React from "react";

const Sidebar = (props) => {
    return (
        <div className="container-big-box">
            <div className="big-box-1">
                <i className="material-icons" id={props.status}>{props.content}</i>
            </div>
            <div className="big-box-2">
                <span id={props.status}>{props.contentname}</span>
            </div>
        </div>
    )
}

export default Sidebar