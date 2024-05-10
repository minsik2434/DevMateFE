import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";   
import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children : [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/test",
                element: <Test/>
            },
            {
                path: "/signup",
                element: <Signup/>
            }
        ]
    }
])

export default router;