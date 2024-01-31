import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import WorkoutList from "./workoutList";

export default function Main({ workoutData, handleButtonClick }) {
  return (
    <main className="">
      <Button onClick={handleButtonClick}>Click Me</Button>
      <div className="border m-3 p-3" style={{ minHeight: "80vh" }}>
        <WorkoutList workoutData={workoutData} />
      </div>
    </main>
  );
}

Main.propTypes = {
  workoutData: PropTypes.array.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
