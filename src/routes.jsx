import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";   
import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BoardDetail from "./pages/BoardDetail";
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
                element: <BoardDetail/>
            },
            {
                path: "/signup",
                element: <Signup/>
            }
        ]
    }
])

export default router;