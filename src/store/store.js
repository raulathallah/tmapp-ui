import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import dashboardReducer from "../features/dashboards/dashboardSlice";
import prioReducer from "../features/priorities/prioritySlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    dashboard: dashboardReducer,
    prio: prioReducer,
  },
});
