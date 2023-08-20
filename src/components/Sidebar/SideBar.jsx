import { NavLink } from "react-router-dom";
import { FaAppStore, FaBars, FaBookReader, FaBox, FaFileArchive, FaHome, FaLock, FaMoneyBill, FaObjectUngroup, FaPlay, FaUser, FaUserCog } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/admin",
    name: "Administrator",
    icon: <FaUserCog />,
    subRoutes: [
      {
        path: "/ad/app",
        name: "Application ",
        icon: <FaAppStore />,
      },
      {
        path: "/ad/function",
        name: "Function",
        icon: <FaBox />,
      },
      {
        path: "/ex/learn",
        name: "Learn",
        icon: <FaBookReader />,
      },
    ],
  },
  {
    path: "/project",
    name: "Projects",
    icon: <BiAnalyse />,
  },
  {
    path: "/execute",
    name: "Execute",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/ex/teststep",
        name: "TestStep ",
        icon: <FaUser />,
      },
      {
        path: "/ex/Testcase",
        name: "Testcase",
        icon: <FaLock />,
      },
      {
        path: "/ex/TestSet",
        name: "TestSet",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/email",
        name: "Email Server ",
        icon: <FaUser />,
      },
      {
        path: "/settings/Jira",
        name: "Jira",
        icon: <FaLock />,
      },
      {
        path: "/settings/bugZilla",
        name: "BugZilla",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/report",
    name: "Report",
    icon: <FaFileArchive />,
    exact: true,
    subRoutes: [
      {
        path: "/report/userwise",
        name: "Userwise",
        icon: <FaUser />,
      },
      {
        path: "/report/testset",
        name: "TestSet",
        icon: <FaObjectUngroup />,
      },
      {
        path: "/report/run",
        name: "Run",
        icon: <FaPlay />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
    
      <div className="main-container">
      
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Oracle ARIOS
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main className="content-section">{children}</main>
      </div>
    </>
  );
};

export default SideBar;
