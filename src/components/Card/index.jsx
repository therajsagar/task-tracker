import React, { useContext } from "react";
import "./styles.css";
import { Context } from "../../state/context";

const List = (props) => {
  const {
    cardMeta: { id: taskId, title, description, categoryId }
  } = props;
  const { dispatch } = useContext(Context);

  const handleRemove = () => {
    dispatch({ type: "REMOVE_TASK", taskId, categoryId });
  };

  const handleDragStart = (ev) => {
    ev.dataTransfer.setData("categoryId", categoryId);
    ev.dataTransfer.setData("taskId", taskId);
  };

  return (
    <div className="card-wrapper" draggable onDragStart={handleDragStart}>
      <button className="remove-cta" onClick={handleRemove}>
        X
      </button>
      <p className="content-title">{title}</p>
      <p className="content-desc">{description}</p>
    </div>
  );
};

export default List;
