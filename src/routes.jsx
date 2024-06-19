import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Board from "./pages/board/Board";
import Post from "./pages/Post";
import BoardDetail from "./pages/BoardDetail";
import Signin from "./pages/Signin";
import StudyPost from "./pages/StudyPost";
import StudyDetail from "./pages/StudyDetail";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import CategoryBoard from "./pages/board/CategoryBoard";
import Mentoring from "./pages/board/mentoring/Mentoring";
import Study from "./pages/board/Study";
import MentoringDetail from "./pages/board/mentoring/MentoringDetail";
import MentoringRegister from "./pages/board/mentoring/MentoringRegister";
import CategoryBoardCheck from "./pages/board/CategoryBoardCheck";
import Error404 from "./pages/Error404";
import PostCheck from "./pages/PostCheck";

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
        path: "/:category/:id",
        element: <BoardDetail />,
      },
      {
        path: "post/:category/new",
        element: <PostCheck />,
      },
      {
        path: "post/:category/edit",
        element: <PostCheck />,
      },
      {
        path: "post/study/new",
        element: <StudyPost />,
      },
      {
        path: "post/study/edit",
        element: <StudyPost />,
      },
      {
        path: "/study/:id",
        element: <StudyDetail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "/board/:category",
        element: <CategoryBoardCheck />,
      },
      {
        path: "/board/mentoring",
        element: <Mentoring />,
      },
      {
        path: "/board/study",
        element: <Study />,
      },
      {
        path: "/board/mentoring/:id",
        element: <MentoringDetail />,
      },
      {
        path: "/board/mentoring/register",
        element: <MentoringRegister />,
      },
      {
        path: "/board/mentoring/edit",
        element: <MentoringRegister />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

export default router;
