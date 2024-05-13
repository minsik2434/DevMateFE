import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Test from "./pages/Test";
import Landing from "./pages/Landing";

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

      {
        path: "/board",
        element: <Board />,
      },
    ],
  },
]);

export default router;
