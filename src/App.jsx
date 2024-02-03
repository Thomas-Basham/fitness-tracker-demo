import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // need to hold data for workouts in state as an array of objects
  const [workoutData, setWorkoutData] = useState([]);

  const handleAddEntry = () => {
    const newDate = new Date();
    const obj = { date: newDate, type: "" };
    setWorkoutData([...workoutData, obj]);
  };

  // event handler to delete an entry
  const handleUpdate = () => {
    console.log("Updated entry");
  };

  // event handler to update an entry
  const handleDelete = (entry) => {
    const newWorkoutData = workoutData.map((elm) => {
      if (elm?.date !== entry.date) {
        return elm;
      }
    });

    setWorkoutData(newWorkoutData);
    console.log("Deleted Entry");
  };

  return (
    <>
      <Header />
      <Main
        workoutData={workoutData}
        handleAddEntry={handleAddEntry}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <Footer />
    </>
  );
}

export default App;
