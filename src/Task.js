import React from "react";

export default function Task({ title, description, dateCreated, complete, dateCompleted}) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            <div>{dateCreated} <br/> <b>{complete}</b> </div>
            <i> <div><b>{dateCompleted}</b></div> </i>
            <button type="button" className="btn btn-outline-primary mr-2" onClick="completed">Complete</button>
            <br/><br/>
        </div>
    )
}