/* import logo from "./logo.svg"; */
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    goodWeather: false,
  });

  /* function GetName() {

  } */

  /*   function GetGoodWeather() {}
   */

  function onAddActivity(event) {
    event.preventDefault();
    console.log("Activity added:", formData);
  }

  return (
    <form>
      <h2>Add new activity</h2>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      ></input>
      <br />
      <br />

      <label htmlFor="goodWeather">Good-weather activity: </label>

      <input
        type="checkbox"
        id="goodWeather"
        name="goodWeather"
        checked={formData.goodWeather}
        onChange={(event) =>
          setFormData({ ...formData, goodWeather: event.target.checked })
        }
      ></input>
      <br />
      <br />
      <button onClick={onAddActivity}>submit</button>
    </form>
  );
}

export default App;
