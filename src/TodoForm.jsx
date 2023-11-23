import React, { useState } from "react";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const [month, setMonth] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Please enter some text.");
            return;
        }
        addTodo({
            text,
            month,
            date,
            completed: false,
        });
        setText("");
        setMonth("");
        setDate("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center align-items-center mb-4"
        >
            <input
                className="form-control me-2"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Task"
            />
            <input
                className="form-control me-2"
                type="number"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                min="1"
                max="12"
                placeholder="Month"
            />
            <input
                className="form-control me-2"
                type="number"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min="1"
                max="31"
                placeholder="Date"
            />
            <button className="btn btn-success" type="submit">
                Add into List
            </button>
        </form>
    );
}

export default TodoForm;
