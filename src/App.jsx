import { useForm } from "react-hook-form";
import { CardWrapper } from "./components/card-wrapper";
import { TodoProviderWrapper } from "./providers/todo-provider/todo-provider";
import React from "react";
import { ADD_USER } from "./providers/todo-provider/todo-types";
import { nanoid } from "nanoid";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const { dispatch, data } = React.useContext(TodoProviderWrapper);


  const submit = (data) => {
    dispatch({ type: ADD_USER, value: { ...data, id: nanoid() } });
    reset();
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
        <h1 className="title">To Do List</h1>
        {/* <div className="clear">
          <button className="clear_btn">
            Clear List
          </button>
        </div> */}
        <form className="form" onSubmit={handleSubmit(submit)}>
          <input {...register("user_name")} type="text" placeholder="Add a todo"
        className="todo_input" />
          <button className="add_btn" type="submit">Add</button>
        </form>
        <CardWrapper />
        </div>
        
      </div>

    </>
  );
}

export default App;
