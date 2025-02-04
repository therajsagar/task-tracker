import React, { useState } from "react";
import "./styles.css";

const DEFAULT_STATE = {
  inEditMode: false,
  title: ""
};

const AddList = (props) => {
  const [{ inEditMode, title }, setState] = useState({ ...DEFAULT_STATE });

  const handleInputChange = ({ target }) => {
    setState((s) => ({ ...s, title: target.value.trim() }));
  };

  const handleClick = () => {
    if (title) {
      const payload = {
        title,
        time: Date.now()
      };
      props.onSubmit(payload);
      setState({ ...DEFAULT_STATE });
      return;
    }

    setState((s) => ({ ...s, inEditMode: !s.inEditMode }));
  };

  const ctaDisabled = inEditMode && !title;

  return (
    <div className="add-new-cta">
      {inEditMode ? (
        <input
          type="text"
          onInput={handleInputChange}
          placeholder="Enter list title"
          className="title"
        />
      ) : null}
      <button disabled={ctaDisabled} onClick={handleClick} className="cta-btn">
        ADD LIST
      </button>
    </div>
  );
};

export default AddList;
