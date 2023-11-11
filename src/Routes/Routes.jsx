import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/SignUp',
                element:<SignUp></SignUp>
            }
        ]
    }
])
export default router;