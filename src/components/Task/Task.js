import React from "react";
import './Task.css';

const Task = ({ name, title, description, id, remove }) => {

    return (
        <>
            <div className="task-box">
                <h3>{id}</h3>
                <h1>task</h1>
                <div>{name}</div>
                <div>{title}</div>
                <div>{description}</div>
                <button
                onClick={() => {remove() }}
                >
                    🛒</button>
            </div>
        </>
    )
}
export default Task