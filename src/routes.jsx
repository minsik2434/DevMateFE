import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Test from "./pages/Test";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Login />,
      },

      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
