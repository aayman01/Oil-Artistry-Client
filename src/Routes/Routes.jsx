import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddCraftIteam from "../Pages/AddCraftIteam";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyCraftList from "../Pages/MyCraftList";
import PrivateRoute from "./PrivateRoute";
import AllIteams from "../Pages/AllIteams";
import ViewDeatils from "../Pages/ViewDeatils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addcraftiteam",
        element: (
          <PrivateRoute>
            <AddCraftIteam />
          </PrivateRoute>
        ),
      },
      {
        path: "/mycraftlist",
        element: (
          <PrivateRoute>
            <MyCraftList />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewdeatils/:id",
        element: (
          <PrivateRoute>
            <ViewDeatils />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/artcraft"),
      },
      {
        path: "/alliteams",
        element: <AllIteams />,
        loader: () => fetch("http://localhost:5000/artcraft"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
