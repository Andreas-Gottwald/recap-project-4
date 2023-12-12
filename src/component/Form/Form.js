import { useState } from "react";
import { uid } from "uid";
// import { AddActivityToLocalStorage } from "../LocalStorage/LocalStorage.js";
import useLocalStorageState from "use-local-storage-state";

export default function Form({ setListData }) {
  // ===============================
  const [formData, setFormData] = useState({
    name: "",
    isForGoodWeather: false,
  });
  const [storedActivities, setStoredActivities] = useLocalStorageState(
    "activities",
    []
  );
  // ===============================
  const onAddActivity = (event) => {
    event.preventDefault();
    const formDataDefault = {
      name: "",
      isForGoodWeather: false,
    };
    const newActivity = handleAddActivity(formData);
    setListData((prevActivities) => [newActivity, ...(prevActivities || [])]);
    setFormData(formDataDefault);
    document.getElementById("addNewActivity").reset();
    document.getElementById("name").focus();
  };
  // ===============================

  function handleAddActivity(formData) {
    if (formData.name === "") {
      return;
    }
    const key = uid();
    const newActivity = { id: key, ...formData };
    // console.log("newActivity is:", newActivity);
    // setStoredActivities([]); // hard reset only for testing
    const currentStoredActivities = storedActivities || [];
    setStoredActivities([newActivity, ...currentStoredActivities]);
    // console.log("Stored activities: ", storedActivities);
  }

  // ===============================
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
        }></input>
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
        }></input>
      <br />
      <br />
      <button onClick={onAddActivity}>submit</button>
    </form>
  );
}

/* const [formData, setFormData] = useLocalStorageState({
    defaultValue: [],
  });  */ // wrong declaration default
