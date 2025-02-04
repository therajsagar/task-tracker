import React, { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { Context } from "./context";

export default function FeedProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}
