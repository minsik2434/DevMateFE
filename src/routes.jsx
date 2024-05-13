import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Test from "./pages/Test";
import Landing from "./pages/Landing";
<<<<<<< HEAD
import Home from "./pages/Home";
import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
=======
>>>>>>> 5428fa00303f9df19086d6ce39114da81324fc61

import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Board from "./pages/Board";
// import Home from "./pages/Home";
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
<<<<<<< HEAD
      {
        path: "/signin",
        element: <Login />,
      },

      {
        path: "/test",
        element: <Test />,
=======

      {
        path: "/board",
        element: <Board />,
>>>>>>> 5428fa00303f9df19086d6ce39114da81324fc61
      },
    ],
  },
]);

export default router;
