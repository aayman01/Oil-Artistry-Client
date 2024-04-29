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
import ErrorPage from "../Pages/ErrorPage";
import UpdateDeatils from "../Components/UpdateDeatils";
import Subcategorys from "../Pages/Subcategorys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        loader: () => fetch("https://oil-artistry-server.vercel.app/artcraft"),
      },
      {
        path: "/updatedeatils/:id",
        element: (
          <PrivateRoute>
            <UpdateDeatils />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://oil-artistry-server.vercel.app/artcraft/${params.id}`),
      },
      {
        path: "/alliteams",
        element: <AllIteams />,
        loader: () => fetch("https://oil-artistry-server.vercel.app/artcraft"),
      },
      {
        path: "/Painting/:name",
        element: <Subcategorys />,
        loader: ({ params }) =>
          fetch(`https://oil-artistry-server.vercel.app/data/${params.name}`),
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
