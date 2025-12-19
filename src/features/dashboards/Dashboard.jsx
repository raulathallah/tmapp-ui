import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDashboard } from "./dashboardSlice";
import IconCostum from "../../components/common/iconCustom";
import {
  faCircleCheck,
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (status === "idle") dispatch(fetchDashboard());
  }, [status, dispatch]);

  console.log(items);

  if (status === "loading") return <div>Loading...</div>;
  return (
    <div className="grid gap-3">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex gap-3 w-full">
        {/* project card */}
        <div class="card w-1/3 bg-base-100 shadow-sm">
          <div class="card-body">
            <div class="flex justify-between">
              <h2 class="text-3xl font-bold">Projects</h2>
              <span class="text-3xl font-bold">{items?.total_project}</span>
            </div>
          </div>
        </div>
        {/* task card */}
        <div class="card w-1/3 bg-base-100 shadow-sm">
          <div class="card-body">
            <div class="flex justify-between">
              <h2 class="text-3xl font-bold">Tasks</h2>
              <span class="text-3xl font-bold">{items?.total_task}</span>
            </div>
            <ul class="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <span className="flex gap-2 align-middle items-center text-yellow-500">
                  <IconCostum.Small icon={faCirclePause} />
                  <p>Pending</p>
                  {items?.total_task_pending}
                </span>
              </li>
              <li>
                <span className="flex gap-2 align-middle items-center text-blue-500">
                  <IconCostum.Small icon={faCirclePlay} />
                  <p>On Work</p>
                  {items?.total_task_onWork}
                </span>
              </li>
              <li>
                <span className="flex gap-2 align-middle items-center text-green-500">
                  <IconCostum.Small icon={faCircleCheck} />
                  <p>Done</p>
                  {items?.total_task_done}
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* user card */}
        <div class="card w-1/3 bg-base-100 shadow-sm">
          <div class="card-body">
            <div class="flex justify-between">
              <h2 class="text-3xl font-bold">Users</h2>
              <span class="text-3xl font-bold">{items?.total_user}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
