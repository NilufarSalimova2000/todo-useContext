import React, { useContext } from "react";
import { TodoProviderWrapper } from "../providers/todo-provider/todo-provider";
import { DELETE_USER, EDIT_USER } from "../providers/todo-provider/todo-types";
import { DeleteIcon } from "../assets/delete-icon";

export const CardWrapper = () => {
  const { data, dispatch } = useContext(TodoProviderWrapper);

  const deleteItem = (id) => {
    dispatch({ type: DELETE_USER, id });
  };

  const editItem = (id) => {
    const newName = prompt("Enter new name");
    if (newName) {
      dispatch({ type: EDIT_USER, id, newName });
    }
  };

  return (
    <div className="content">
      {data?.users?.map((item) => (
        <div className="list" key={item.id}>
          <h2 className="todo_title">{item.user_name}</h2>
          <div className="btns">
            <button className="delete_btn" onClick={() => deleteItem(item.id)}><DeleteIcon /></button>
            <button className="edit_btn" onClick={() => editItem(item.id)}>+</button>
          </div>

        </div>
      ))}
    </div>
  );
};
