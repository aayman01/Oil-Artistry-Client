import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddCraftIteam from "../Pages/AddCraftIteam";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/addcraftiteam',
                element : <AddCraftIteam/>
            }
        ] 
    }
])

export default router;
