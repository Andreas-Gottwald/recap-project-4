import { useState, useEffect } from "react";

export default function List() {
  const [activities, setActivities] = useState([]);

  // const dataFromLocalStorage = JSON.parse(localStorage.getItem("name"));
  // console.log("dataFromLocalStorage", dataFromLocalStorage);

  useEffect(() => {
    // This code will be executed after the component has mounted
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("activities"));
    console.log("dataFromLocalStorage", dataFromLocalStorage);

    // You can also update the state if needed
    if (dataFromLocalStorage) {
      setActivities(dataFromLocalStorage);
    }
  }, []); // The empty dependency array means this effect runs only once after the initial render

  // return <li> Fragment including mapped data

  return (
    <>
      {activities.map((activity, index) => (
        <li key={index}>{activity.name}</li>
      ))}
    </>
  );
}
