import { Link } from "react-router-dom";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { getStatusStyles } from "../../../utils/taskHelpers";
import StatusBadgeCostum from "../../../components/common/CMP_StatusBadge";
import PrioBadgeCustom from "../../../components/common/CMP_PrioBadge";
import IconCostum from "../../../components/common/iconCustom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePriorityTask } from "../../priorities/prioritySlice";
import { fetchTasks } from "../taskSlice";

export const CMP_TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const statusName = task.MSTR_STATUS?.mstr_status_desc;
  const statusId = task.MSTR_STATUS?.mstr_status_id;

  const prioName = task.MSTR_PRIO?.mstr_prio_desc;
  const prioId = task.MSTR_PRIO?.mstr_prio_id;

  const statusStyle = getStatusStyles(statusId);

  const [isUpdating, setIsUpdating] = useState(false);

  const handlePrioUpdate = async (newPrioId) => {
    if (isUpdating || newPrioId === task.MSTR_PRIO?.mstr_prio_id) return;
    setIsUpdating(true);

    try {
      await dispatch(
        updatePriorityTask({
          id: task.tbl_task_id,
          data: { tbl_task_priorityId: newPrioId },
        })
      ).unwrap();

      dispatch(fetchTasks());
    } catch (error) {
      console.error("Failed to update priority:", error);
    } finally {
      setIsUpdating(true);
    }
  };

  return (
    <div
      className={`card w-full bg-base-100 shadow-sm border-l-4 ${statusStyle.border} hover:shadow-md transition-all duration-300`}
    >
      <div className="card-body p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
          <div className="flex-1">
            <h2 className="card-title text-base sm:text-lg font-bold leading-tight">
              {task.tbl_task_title}
            </h2>
            <p className="text-xs sm:text-sm text-base-content/70 line-clamp-2 mt-1">
              {task.tbl_task_desc || "No description provided."}
            </p>
          </div>

          <StatusBadgeCostum statusId={statusId} statusName={statusName} />
        </div>
        <div className="divider my-2 opacity-50"></div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            {isUpdating ? (
              <span className="loading loading-spinner loading-xs text-primary"></span>
            ) : (
              <PrioBadgeCustom
                prioId={prioId}
                prioName={prioName}
                onUpdate={handlePrioUpdate}
              />
            )}

            <span className="text-[10px] sm:text-xs flex items-center text-base-content/50 italic">
              <IconCostum.Small icon={faCalendarDays} />
              {new Date(task.tbl_task_dueDate).toLocaleDateString()}
            </span>
          </div>

          <Link
            to={`/task/detail`}
            state={{ taskId: task.tbl_task_id }}
            className="btn btn-sm btn-primary btn-soft w-full sm:w-auto"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
