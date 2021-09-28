import React from "react";

export default function CreateTask({task}) {
    return (
        <form onSubmit= {e => e.preventDefault() } >
            <div>Description: <b>{task}</b></div>
            <div>
                <input type="text" name="create-task" id="create-task" />
            </div>

            <textarea />
            <br/>
            <input type="submit" value="create" />
        </form>
    )
}