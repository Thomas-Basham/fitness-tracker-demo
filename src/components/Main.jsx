import React from "react";
import { Button } from "react-bootstrap";

export default function Main({ workoutData, handleButtonClick }) {
  return (
    <main>
      <Button onClick={handleButtonClick}>Click Me</Button>

      {workoutData.map((obj, index) => {
        return <p key={index}> {obj.date.toUTCString()} </p>;
      })}
    </main>
  );
}
