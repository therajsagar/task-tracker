import React, { useContext } from "react";
import "./styles.css";
import AddList from "../AddCTA/AddList";
import List from "../List";
import { Context } from "../../state/context";

const Dashboard = (props) => {
  const {
    state: { list: categories = [] },
    dispatch
  } = useContext(Context);

  const handleAdd = ({ title, time }) => {
    dispatch({ type: "ADD_LIST", data: { title, time } });
  };

  return (
    <div className="dashboard-wrapper">
      <h2 className="top-bar">Dashboard</h2>
      <section className="content-section">
        {categories.map((info) => (
          <List listMeta={info} key={info.id} />
        ))}
        <AddList onSubmit={handleAdd} />
      </section>
    </div>
  );
};

export default Dashboard;
