import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  // Accedemos al estado de las tareas
  const tasks = useSelector((state) => state.tasks);

  //agregamos el acceso a dispatch de redux
  const dispatch = useDispatch();

  //Metodo para manejar el evvento
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <header>
        <h1>Tasks list</h1>
        <Link to="/create-task">Create Task</Link>
      </header>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
