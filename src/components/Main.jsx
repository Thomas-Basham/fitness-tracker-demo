import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import WorkoutList from "./WorkoutList";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import LogoutButton from "./LogoutButton";
import { auth } from "../../firebase-config";

export default function Main({
  workoutData,
  handleAddEntry,
  handleUpdate,
  handleDelete,
}) {
  return (
    <main className="">
      {auth.currentUser ? (
        <>
          <LogoutButton />
          <br />
          <br />
          <Button onClick={handleAddEntry}>Log Workout</Button>
          <div className="border m-3 p-3" style={{ minHeight: "80vh" }}>
            <WorkoutList
              workoutData={workoutData}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </div>
        </>
      ) : (
        <>
          <RegisterForm />
          <LoginForm />
        </>
      )}
    </main>
  );
}

Main.propTypes = {
  workoutData: PropTypes.array.isRequired,
  handleAddEntry: PropTypes.func.isRequired,
};
