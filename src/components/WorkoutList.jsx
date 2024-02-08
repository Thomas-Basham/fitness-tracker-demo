import WorkoutLog from "./WorkoutLog";
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
          return (
            <WorkoutLog
              key={index}
              obj={obj}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          );
        })}
    </>
  );
}
