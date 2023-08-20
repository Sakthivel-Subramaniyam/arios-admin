import "./App.scss";
import SideBar from "./components/Sidebar/SideBar";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Navbar from "./components/Topbar/Navbar";
import NewUser from "./pages/User/NewUser";
import Login from "./pages/Login";
import Application from "./components/Application/Application";
import NewApplication from "./components/Application/NewApplication";
function App() {

  const Layout = () => {
    return(
      <div>
        <SideBar>
          <Navbar/>
            <div>
            <Outlet/>
            </div>
            </SideBar>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        { path: "/", element: (<Dashboard />) },
        { path: "/users", element: (<Users />) },
        { path: "/messages", element: (<Dashboard />) },
        { path: "/analytics", element: (<Analytics />) },
        { path: "/file-manager", element: (<FileManager />) },
        { path: "/order", element: (<Order />) },
        { path: "/saved", element: (<Saved />) },
        { path: "/settings", element: (<Setting />) },
        { path: "/newuser", element: (<NewUser />) },
        { path: "/ad/app", element: (<Application />) },
        { path: "/ad/newapp", element: (<NewApplication />) },
        
      ]
    },
    {
      path:"/login",
      element:(<Login />)
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
