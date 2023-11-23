import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, toggleComplete }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </div>
    );
}

export default TodoList;
