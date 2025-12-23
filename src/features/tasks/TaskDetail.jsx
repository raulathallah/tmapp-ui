import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskDetail, resetStatus } from "./taskSlice";
import { useLocation } from "react-router-dom";

export default function TaskDetail() {
  const dispatch = useDispatch();
  const { details, status } = useSelector((state) => state.tasks);

  const location = useLocation();
  const taskId = location.state?.taskId;

  useEffect(() => {
    if (status == "idle") dispatch(fetchTaskDetail(taskId));

    return () => {
      dispatch(resetStatus());
    };
  }, [dispatch, taskId]);

  if (status === "loading" && !details) return <div>Loading...</div>;

  return (
    details && (
      <div className="">
        <h1>Details</h1>
        <ul>
          <li>{details.tbl_task_id}</li>
          <li>{details.tbl_task_title}</li>
          <li>{details.tbl_task_desc}</li>
          <li>{details.tbl_task_dueDate}</li>
          <li>{details.tbl_task_completedAt}</li>
          <li>{details.tbl_task_projectId}</li>
          <li>{details.tbl_task_userId}</li>
          <li>{details.MSTR_STATUS?.mstr_status_desc}</li>
          <li>{details.MSTR_PRIO?.mstr_prio_desc}</li>
          <li>{details.tbl_task_actvId}</li>
          <li>{details.tbl_task_createdAt}</li>
          <li>{details.tbl_task_updatedAt}</li>
          <li>{details.tbl_task_priorityId}</li>
          <li>{details.tbl_task_priorityId}</li>
          <li>{details.tbl_task_priorityId}</li>
          <li>{details.tbl_task_priorityId}</li>
        </ul>
      </div>
    )
  );
}
