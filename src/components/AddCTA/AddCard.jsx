import React, { useState } from "react";
import "./styles.css";

const DEFAULT_STATE = {
  inEditMode: false,
  title: "",
  description: ""
};

const AddCard = (props) => {
  const [{ inEditMode, title, description }, setState] = useState({
    ...DEFAULT_STATE
  });

  const handleInputChange = (key, { target }) => {
    setState((s) => ({ ...s, [key]: target.value.trim() }));
  };

  const handleClick = () => {
    if (title && description) {
      const payload = {
        title,
        description,
        time: Date.now()
      };

      props.onSubmit(payload);
      setState({ ...DEFAULT_STATE });
      return;
    }

    setState((s) => ({ ...s, inEditMode: !s.inEditMode }));
  };

  const ctaDisabled = inEditMode && !(title && description);

  return (
    <div className="add-new-cta">
      {inEditMode ? (
        <>
          <input
            type="text"
            onInput={(e) => handleInputChange("title", e)}
            placeholder="Enter title"
            className="title"
          />
          <input
            type="text"
            onInput={(e) => handleInputChange("description", e)}
            placeholder="Enter text for this card"
            className="content"
          />
        </>
      ) : null}
      <button disabled={ctaDisabled} onClick={handleClick} className="cta-btn">
        ADD CARD
      </button>
    </div>
  );
};

export default AddCard;
