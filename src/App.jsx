import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // need to hold data for workouts in state as an array of objects
  const [workoutData, setWorkoutData] = useState([]);

  const handleButtonClick = (event) => {
    event.preventDefault();
    const newDate = new Date();
    const obj = { date: newDate, type: "" };
    setWorkoutData([...workoutData, obj]);
  };

  // TODO: add event handler to delete an entry

  // TODO: add event handler to update an entry

  return (
    <>
      <Header />
      <Main workoutData={workoutData} handleButtonClick={handleButtonClick} />
      <Footer />
    </>
  );
}

export default App;
