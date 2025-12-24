/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, resetStatus } from "./taskSlice";
import { CMP_TaskCard } from "./components/CMP_TaskCard";

export default function TaskList() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.tasks);
  const { status: statusPrio, isUpdated } = useSelector((state) => state.prio);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchTasks());
    }

    return () => {
      dispatch(resetStatus());
    };
  }, [dispatch, items]);

  const [showToast, setShowToast] = useState(false);

  console.log({ isUpdated });
  useEffect(() => {
    if (statusPrio === "succeeded" && isUpdated) {
      setShowToast(true);
    }

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      dispatch(resetStatus());
    };
  }, [statusPrio]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    items && (
      <>
        {showToast && (
          <div className="toast toast-top toast-end mt-14">
            <div className="alert alert-success">
              <span className="text-white">Priority updated successfully!</span>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {items.map((task) => (
            <CMP_TaskCard key={task.tbl_task_id} task={task} />
          ))}
        </div>
      </>
    )
  );
}
