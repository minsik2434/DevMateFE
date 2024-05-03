import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";    
import Test from "./pages/Test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children : [
            {
                path: "/",
                element: <Home/>
            },

            {
                path: "/test",
                element: <Test/>
            }
        ]
    }
])

export default router;