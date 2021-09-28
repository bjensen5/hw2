import React from "react";
import Task from "./Task";

export default function Tasklist({tasks =[]}) {
    return (
        <div>
            {tasks.map((p, i) => <Task {...p} key={'task-' + i} />)}
        </div>
    )
}