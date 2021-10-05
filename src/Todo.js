import React from "react";

export default function Todo({ title, description, dateCreated, complete, dateCompleted}) {
    
    
    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            <div>{dateCreated} <br/> <b>{complete}</b> </div>
            <i> <div><b>{dateCompleted}</b></div> </i>
            <input type="checkbox" className="completed-checkbox" onClick={ e => { e.preventDefault();  }}/>
            <br/><br/>
        </div>
    )
}