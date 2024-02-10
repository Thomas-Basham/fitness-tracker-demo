import { GoTrash } from "react-icons/go";
import { GiPencil } from "react-icons/gi";
export default function WorkoutLog({ obj, handleUpdate, handleDelete }) {
  return (
    obj && (
      <div className="border w-25 mx-auto mb-3 p-2">
        <p>
          {obj.date instanceof Date
            ? obj.date.toLocaleDateString()
            : obj.date.toDate().toLocaleDateString()}
        </p>
        <p>
          {obj.date instanceof Date
            ? obj.date.toLocaleTimeString()
            : obj.date.toDate().toLocaleTimeString()}
        </p>

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
