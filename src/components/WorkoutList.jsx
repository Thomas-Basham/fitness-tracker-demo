import WorkoutLog from "./workoutLog";
export default function WorkoutList({ workoutData }) {
  return (
    <>
      {workoutData.map((obj, index) => {
        return <WorkoutLog key={index} obj={obj} />;
      })}
    </>
  );
}
