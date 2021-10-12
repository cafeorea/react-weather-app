import "./App.css";
import Weather from "./Weather";
import "./Weather.css";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}
