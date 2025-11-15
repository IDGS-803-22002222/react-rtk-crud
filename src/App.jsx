import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  //Accedemos al estado  mediante useSelector

  const taskState = useSelector((state) => state.task);
  console.log(taskState);

  return (
    <div>
      <h1>React Redux Toolkit</h1>
    </div>
  );
};

export default App;
