import React, { useContext } from "react";
import "./styles.css";
import AddCard from "../AddCTA/AddCard";
import Card from "../Card";
import { Context } from "../../state/context";

const List = (props) => {
  const {
    listMeta: { title, id: categoryId, tasks = [] }
  } = props;

  const { dispatch } = useContext(Context);

  const handleAdd = ({ title, description, time }) => {
    dispatch({
      type: "ADD_TASK",
      categoryId,
      data: { title, time, description }
    });
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_LIST", categoryId });
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev) => {
    ev.preventDefault();
    const prevCategoryId = ev.dataTransfer.getData("categoryId");
    const taskId = ev.dataTransfer.getData("taskId");

    dispatch({
      type: "UPDATE_CATEGORY",
      prevCategoryId,
      taskId,
      newCategoryId: categoryId
    });
  };

  return (
    <div className="list-wrapper" onDrop={onDrop} onDragOver={onDragOver}>
      <button className="remove-cta" onClick={handleRemove}>
        X
      </button>
      <h3 className="list-title">{title}</h3>
      {tasks.map((info) => (
        <Card cardMeta={info} key={info.id} />
      ))}
      <AddCard onSubmit={handleAdd} />
    </div>
  );
};

export default List;
