import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Test from "./pages/Test";
import Landing from "./pages/Landing";

import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Board from "./pages/Board";
// import Home from "./pages/Home";
import Home from "./pages/Home";
import BoardDetail from "./pages/BoardDetail";
import Signin from "./pages/Signin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      // {
      //   path: "/test",
      //   element: <Test />,
      // },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },

      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/test",
        element: <BoardDetail />,
      },
    ],
  },
]);

export default router;
