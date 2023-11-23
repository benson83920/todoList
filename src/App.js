import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Load todos from localStorage
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        // Update localStorage
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };

    const removeTodo = (todoText) => {
        const updatedTodos = todos.filter((todo) => todo.text !== todoText);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const toggleComplete = (todoText) => {
        const updatedTodos = todos.map((todo) =>
            todo.text === todoText
                ? { ...todo, completed: !todo.completed }
                : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const sortTodos = () => {
        const sortedTodos = [...todos].sort((a, b) => {
            return a.month - b.month || a.date - b.date;
        });
        setTodos(sortedTodos);
        localStorage.setItem("todos", JSON.stringify(sortedTodos));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Benson's Todo List</h1>
            <div className="todo-container">
                <TodoForm addTodo={addTodo} />
                <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary btn-3d"
                        onClick={sortTodos}
                    >
                        Sort By Time
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
