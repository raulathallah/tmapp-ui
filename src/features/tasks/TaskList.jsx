import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "./taskSlice";
import StatusCostum from "../../components/common/statusCostum";

export default function TaskList() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (status === "idle") dispatch(fetchTasks());
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="grid gap-4">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((task) => (
              <tr key={task.tbl_task_id}>
                <th>{task.tbl_task_title}</th>
                <th>
                  <StatusCostum
                    statusName={task.MSTR_STATUS?.mstr_status_desc}
                    statusId={task.MSTR_STATUS?.mstr_status_id}
                  />
                </th>
                <th>
                  <button class="btn btn-sm btn-soft btn-primary">
                    Detail
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
