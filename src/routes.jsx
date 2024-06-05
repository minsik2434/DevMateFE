import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Test from "./pages/Test";
import Landing from "./pages/Landing";

import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Board from "./pages/board/Board";
// import Home from "./pages/Home";
import Post from "./pages/Post";
import Home from "./pages/Home";
import BoardDetail from "./pages/BoardDetail";
import Signin from "./pages/Signin";
import StudyPost from "./pages/StudyPost";
import StudyDetail from "./pages/StudyDetail";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Community from "./pages/board/Community";
import QnA from "./pages/board/QnA";
import JobReview from "./pages/board/JobReview";
import Mentoring from "./pages/board/mentoring/Mentoring";
import Study from "./pages/board/Study";
import JobOpening from "./pages/board/JobOpening";
import MentoringDetail from "./pages/board/mentoring/MentoringDetail";
import MentoringRegister from "./pages/board/mentoring/MentoringRegister";

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
        element: <Post />,
      },
      {
        path: "post/study/new",
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
        path: "/board/community",
        element: <Community />,
      },
      {
        path: "/board/qna",
        element: <QnA />,
      },
      {
        path: "/board/review",
        element: <JobReview />,
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
        path: "/board/job",
        element: <JobOpening />,
      },
      {
        path: "/borad/mentoring/detail",
        element: <MentoringDetail />,
      },
      {
        path: "/borad/mentoring/register",
        element: <MentoringRegister />,
      },
    ],
  },
]);

export default router;
