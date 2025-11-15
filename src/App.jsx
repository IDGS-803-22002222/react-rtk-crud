import React from "react";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  //Accedemos al estado  mediante useSelector

  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <BrowserRouter>
      <div>
        <h1>React Redux Toolkit</h1>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
