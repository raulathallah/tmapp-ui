import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import dashboardReducer from "../features/dashboards/dashboardSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    dashboard: dashboardReducer,
  },
});
