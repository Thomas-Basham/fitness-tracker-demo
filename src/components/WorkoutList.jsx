import WorkoutLog from "./WorkoutLog";
import { auth } from "../../firebase-config";

export default function WorkoutList({
  workoutData,
  handleUpdate,
  handleDelete,
}) {
  return (
    <>
      <h3>Recorded Workouts</h3>
      {workoutData &&
        workoutData.map((obj, index) => {
          if (obj.createdBy === auth.currentUser.uid) {
            return (
              <WorkoutLog
                key={index}
                obj={obj}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            );
          }
        })}
    </>
  );
}
