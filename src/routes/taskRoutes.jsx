import TaskDetail from "../features/tasks/TaskDetail";
import TaskList from "../features/tasks/TaskList";

const taskRoutes = [
  { path: "/task", element: <TaskList /> },
  { path: "/task/detail", element: <TaskDetail /> },
];

export default taskRoutes;
