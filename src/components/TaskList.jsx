import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Tasks List</h1>

        <Link
          to="/create-task"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-md rounded-lg p-5 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {task.title}
            </h2>
            <p className="text-gray-600 mt-2">{task.description}</p>

            <span
              className={`inline-block text-sm px-3 py-1 rounded-full mb-5 ${
                task.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {task.completed ? "Completed" : "Incomplete"}
            </span>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>

              <Link
                to={`/edit-task/${task.id}`}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No tasks yet. Create one!
        </p>
      )}
    </div>
  );
};

export default TaskList;
