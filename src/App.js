import "./styles.css";
import Dashboard from "./components/Dashboard";
import Provider from "./state/Provider";

export default function App() {
  return (
    <div className="App">
      <Provider>
        <Dashboard />
      </Provider>
    </div>
  );
}
