import { Link, Outlet, useLocation } from "react-router-dom";
import IconCostum from "../common/iconCustom";
import {
  faDiagramProject,
  faHouse,
  faListCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function MainLayout() {
  const location = useLocation();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">Task Management App</div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            <li>
              <Link
                to="/dashboard"
                className={`
                            ${
                              location.pathname === "/dashboard" ? "active" : ""
                            } 
                            is-drawer-close:tooltip is-drawer-close:tooltip-right
                          `}
                data-tip="Homepage"
              >
                <IconCostum.Small icon={faHouse} />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className={`
                            ${location.pathname === "/project" ? "active" : ""} 
                            is-drawer-close:tooltip is-drawer-close:tooltip-right
                          `}
                data-tip="Project"
              >
                <IconCostum.Small icon={faDiagramProject} />
                <span className="is-drawer-close:hidden">Project</span>
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className={`
                            ${location.pathname === "/project" ? "active" : ""} 
                            is-drawer-close:tooltip is-drawer-close:tooltip-right
                          `}
                data-tip="Task"
              >
                <IconCostum.Small icon={faListCheck} />
                <span className="is-drawer-close:hidden">Task</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user"
                className={`
                            ${location.pathname === "/user" ? "active" : ""} 
                            is-drawer-close:tooltip is-drawer-close:tooltip-right
                          `}
                data-tip="User"
              >
                <IconCostum.Small icon={faUsers} />
                <span className="is-drawer-close:hidden">User</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
