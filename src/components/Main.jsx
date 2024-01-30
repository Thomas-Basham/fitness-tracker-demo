import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Main({ workoutData, handleButtonClick }) {
  return (
    <main className="">
      <Button onClick={handleButtonClick}>Click Me</Button>
      <div className="border m-3 p-3" style={{ minHeight: "80vh" }}>
        {workoutData.map((obj, index) => {
          return <p key={index}> {obj.date.toUTCString()} </p>;
        })}
      </div>
    </main>
  );
}

Main.propTypes = {
  workoutData: PropTypes.array.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
