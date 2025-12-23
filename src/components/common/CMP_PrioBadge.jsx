import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getPriorityStyles, PRIORITY_MAP } from "../../utils/taskHelpers";
import IconCostum from "./iconCustom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPrio } from "../../features/priorities/prioritySlice";
import { resetStatus } from "../../features/tasks/taskSlice";

const PrioBadgeCustom = ({ prioId, prioName, onUpdate, isUpdating }) => {
  const prio = getPriorityStyles(prioId || prioName);
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.prio);
  useEffect(() => {
    if (status == "idle") dispatch(fetchPrio());

    return () => {
      dispatch(resetStatus());
    };
  }, [dispatch, items]);

  console.log(items);
  return (
    <div className="dropdown dropdown-top sm:dropdown-right">
      {/* Trigger: The actual badge */}
      <div
        tabIndex={0}
        role="button"
        className={`
          badge badge-outline gap-1.5 cursor-pointer transition-all
          hover:bg-base-200 text-[10px] sm:text-xs py-3
          ${prio.badge} 
          ${isUpdating ? "opacity-50 pointer-events-none" : ""}
        `}
      >
        {prio.label}
        <IconCostum.Small icon={faChevronDown} className="size-2 opacity-50" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-1 menu p-2 shadow-lg bg-base-100 rounded-box w-32 border border-base-200 mb-2 sm:mb-0 sm:ml-2"
      >
        <li className="menu-title text-[10px] uppercase opacity-50">
          Priority
        </li>
        {items.map((item) => (
          <li key={item.mstr_prio_id}>
            <button
              onClick={() => onUpdate(item.mstr_prio_id)}
              className={`text-xs py-2 ${
                prioName === item.mstr_prio_desc ? "active" : ""
              }`}
            >
              {item.mstr_prio_desc}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrioBadgeCustom;
