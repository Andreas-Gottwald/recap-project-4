/* import logo from "./logo.svg"; */
import "./App.css";
import { useState } from "react";
//import { useEffect } from "react";
//import useLocalStorageState from "use-local-storage-state";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    isForGoodWeather: false,
  });
  /* const [formData, setFormData] = useLocalStorageState({
    defaultValue: {
      name: "",
      isForGoodWeather: false,
    },
  }); */ // wrong declaration default

  function onAddActivity(event) {
    event.preventDefault();

    const newFormData = {
      name: "",
      isForGoodWeather: false,
    };

    console.log("Before Set:", formData);

    // Set the form data with the new data
    setFormData(newFormData);

    console.log("After Set:", newFormData);

    document.getElementById("addNewActivity").reset();
    document.getElementById("name").focus();
  }

  return (
    <>
      <Form
        formData={formData}
        setFormData={setFormData}
        onAddActivity={onAddActivity}
      />
    </>
  );
}

export function Form({ formData, setFormData, onAddActivity }) {
  /*  console.log("formData in Form:", formData);
  console.log("formData.name in Form:", formData.name); */
  return (
    <form id="addNewActivity">
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

      <label htmlFor="isForGoodWeather">Good-weather activity: </label>

      <input
        type="checkbox"
        id="isForGoodWeather"
        name="isForGoodWeather"
        checked={formData.isForGoodWeather}
        onChange={(event) =>
          setFormData({ ...formData, isForGoodWeather: event.target.checked })
        }
      ></input>
      <br />
      <br />
      <button onClick={onAddActivity}>submit</button>
    </form>
  );
}

export default App;
