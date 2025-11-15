import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  //Agregamos un useState para guardar los cambios del formulario
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  //agregamos el acceso a dispatch de redux
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Agregamos un hook useParams para acceder a los parámetros de la url
  const params = useParams();
  //Agregamos un hook useSelector para accecer al state
  const tasks = useSelector((state) => state.tasks);

  //Agregando un useEffect para cargar los datos de la tarea a modificar
  useEffect(() => {
    if (params.id) {
      //Pasamos la tarea encontrada al estado mediante setTask
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
