import React from "react";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* NAVBAR */}
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">React Redux Toolkit</h1>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-gray-200 transition">
                Tasks
              </Link>
              <Link
                to="/create-task"
                className="hover:text-gray-200 transition"
              >
                Create Task
              </Link>
            </div>
          </div>
        </nav>

        {/* CONTENIDO PRINCIPAL */}
        <main className="max-w-6xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
