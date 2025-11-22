import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    if (params.id) {
      const foundTask = tasks.find((t) => String(t.id) === String(params.id));
      if (foundTask) setTask(foundTask);
    }
  }, [params.id, tasks]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid(), completed: false }));
    }

    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {params.id ? "Edit Task" : "Create Task"}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Task Description"
          rows="4"
          value={task.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Save
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
