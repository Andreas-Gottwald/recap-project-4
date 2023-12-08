import { useState } from "react";

export default function Form() {
  /*  console.log("formData in Form:", formData);
    console.log("formData.name in Form:", formData.name); */
  const [formData, setFormData] = useState({
    name: "",
    isForGoodWeather: false,
  });

  const onAddActivity = (event) => {
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
  };
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

/* const [formData, setFormData] = useLocalStorageState({
    defaultValue: [],
  });  */ // wrong declaration default
