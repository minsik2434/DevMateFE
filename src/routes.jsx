import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Test from "./pages/Test";
import Landing from "./pages/Landing";

import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Board from "./pages/Board";
// import Home from "./pages/Home";
import Post from "./pages/Post";
import Home from "./pages/Home";
import BoardDetail from "./pages/BoardDetail";
import Signin from "./pages/Signin";
import StudyPost from "./pages/StudyPost";
import StudyDetail from "./pages/StudyDetail";
import Profile from "./pages/Profile";
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
        path: "/qna/:id",
        element: <BoardDetail />,
      },
      {
        path: "post/qna/new",
        element : <Post/>
      },
      {
        path: "post/study/new",
        element : <StudyPost />
      },
      {
        path: "/study/:id",
        element: <StudyDetail/>
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ],
  },
]);

export default router;
