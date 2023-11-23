import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todo, toggleComplete, removeTodo }) {
    return (
        <div className="d-flex justify-content-between align-items-center bg-light p-2 my-1">
            <p
                className={`m-0 ${
                    todo.completed ? "text-decoration-line-through" : ""
                }`}
            >
                {todo.text} - {todo.month}/{todo.date}
            </p>
            <div>
                <button
                    className="btn btn-success me-2"
                    onClick={() => toggleComplete(todo.text)}
                >
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => removeTodo(todo.text)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
