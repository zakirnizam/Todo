import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync, removeTodo } from "./features/todos/todoActions";
import './index.css'

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.todos);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodoAsync(text));
      setText("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          📝 To-Do App
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            disabled={loading}
            className={`px-4 py-2 rounded-lg text-white font-medium ${loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 transition"
              }`}
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>

        <ul className="space-y-2">
          {items.length === 0 && (
            <li className="text-gray-500 text-center">No tasks yet</li>
          )}
          {items.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 hover:shadow-sm"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
