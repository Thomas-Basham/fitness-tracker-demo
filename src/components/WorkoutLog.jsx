import { GoTrash } from "react-icons/go";
import { GiPencil } from "react-icons/gi";
export default function WorkoutLog({ obj, handleUpdate, handleDelete }) {
  return (
    obj && (
      <div className="border w-25 mx-auto mb-3 p-2">
        <p>{obj.date.toLocaleDateString()}</p>
        <p>{obj.date.toLocaleTimeString()}</p>

        <div className="d-flex  justify-content-between mx-2">
          <GoTrash
            role="button"
            className="text-danger cursor-pointer"
            onClick={() => handleDelete(obj)}
          />
          <GiPencil
            role="button"
            className="text-black"
            onClick={handleUpdate}
          />
        </div>
      </div>
    )
  );
}
