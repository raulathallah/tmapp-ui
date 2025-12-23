import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, resetStatus } from "./taskSlice";
import { CMP_TaskCard } from "./components/CMP_TaskCard";

export default function TaskList() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (status == "idle") dispatch(fetchTasks());

    return () => {
      dispatch(resetStatus());
    };
  }, [dispatch, items]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    items && (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {items.map((task) => (
            <CMP_TaskCard key={task.tbl_task_id} task={task} />
          ))}
        </div>
      </>
    )
  );
}
