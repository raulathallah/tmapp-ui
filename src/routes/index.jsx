import { useRoutes } from "react-router-dom";
import taskRoutes from "./taskRoutes.jsx";
import Dashboard from "../features/dashboards/Dashboard.jsx";
import MainLayout from "../components/layout/MainLayout.jsx";

export default function AppRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        ...taskRoutes,
      ],
    },
  ]);

  return element;
}
