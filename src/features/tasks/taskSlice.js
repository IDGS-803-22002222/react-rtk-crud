import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Task 1", description: "prueba", completed: false },

  { id: 2, title: "Task 2", description: "Acciones casa", completed: false },
];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //Reducer para manipular las tareas
    //Agregar Tarea
    addTask: (state, action) => {
      state.push(action.payload);
    },
    //Eliminar Tarea
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    //Actualizar Tarea
    editTask: (state, action) => {
      //Recuperamos los datos de la tarea desde el payload
      const { id, title, description } = action.payload;
      //Buscamos la tarea en el state con base al id.
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
