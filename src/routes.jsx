import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import { Suspense } from "react";
const Landing = React.lazy(() => import("./pages/Landing"));
const Signup = lazy(() => import("./pages/Signup"));
const Board = lazy(() => import("./pages/board/Board"));
// import Board from "./pages/board/Board";
const BoardDetail = lazy(() => import("./pages/BoardDetail"));
// import BoardDetail from "./pages/BoardDetail";
const Signin = lazy(() => import("./pages/Signin"));
// import Signin from "./pages/Signin";
const StudyPost = lazy(() => import("./pages/StudyPost"));
// import StudyPost from "./pages/StudyPost";
const StudyDetail = lazy(() => import("./pages/StudyDetail"));
// import StudyDetail from "./pages/StudyDetail";
const Profile = lazy(() => import("./pages/Profile"));
// import Profile from "./pages/Profile";
const ProfileEdit = lazy(() => import("./pages/ProfileEdit"));
// import ProfileEdit from "./pages/ProfileEdit";
const Mentoring = lazy(() => import("./pages/board/mentoring/Mentoring"));
// import Mentoring from "./pages/board/mentoring/Mentoring";
const Study = lazy(() => import("./pages/board/Study"));
// import Study from "./pages/board/Study";
const MentoringDetail = lazy(() =>
  import("./pages/board/mentoring/MentoringDetail")
);
// import MentoringDetail from "./pages/board/mentoring/MentoringDetail";
const MentoringRegister = lazy(() =>
  import("./pages/board/mentoring/MentoringRegister")
);
// import MentoringRegister from "./pages/board/mentoring/MentoringRegister";
const CategoryBoardCheck = lazy(() =>
  import("./pages/board/CategoryBoardCheck")
);
// import CategoryBoardCheck from "./pages/board/CategoryBoardCheck";
const Error404 = lazy(() => import("./pages/Error404"));
// import Error404 from "./pages/Error404";
const PostCheck = lazy(() => import("./pages/PostCheck"));
// import PostCheck from "./pages/PostCheck";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense>
            <Signin />
          </Suspense>
        ),
      },

      {
        path: "/board",
        element: (
          <Suspense>
            <Board />
          </Suspense>
        ),
      },
      {
        path: "/:category/:id",
        element: (
          <Suspense>
            <BoardDetail />
          </Suspense>
        ),
      },
      {
        path: "post/:category/new",
        element: (
          <Suspense>
            <PostCheck />
          </Suspense>
        ),
      },
      {
        path: "post/:category/edit",
        element: (
          <Suspense>
            <PostCheck />
          </Suspense>
        ),
      },
      {
        path: "post/study/new",
        element: (
          <Suspense>
            <StudyPost />
          </Suspense>
        ),
      },
      {
        path: "post/study/edit",
        element: (
          <Suspense>
            <StudyPost />
          </Suspense>
        ),
      },
      {
        path: "/study/:id",
        element: (
          <Suspense>
            <StudyDetail />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/profile/edit",
        element: (
          <Suspense>
            <ProfileEdit />
          </Suspense>
        ),
      },
      {
        path: "/board/:category",
        element: (
          <Suspense>
            <CategoryBoardCheck />
          </Suspense>
        ),
      },
      {
        path: "/board/mentoring",
        element: (
          <Suspense>
            <Mentoring />
          </Suspense>
        ),
      },
      {
        path: "/board/study",
        element: (
          <Suspense>
            <Study />
          </Suspense>
        ),
      },
      {
        path: "/mentoring/:id",
        element: (
          <Suspense>
            <MentoringDetail />
          </Suspense>
        ),
      },
      {
        path: "/board/mentoring/register",
        element: (
          <Suspense>
            <MentoringRegister />
          </Suspense>
        ),
      },
      {
        path: "/board/mentoring/edit",
        element: (
          <Suspense>
            <MentoringRegister />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <Error404 />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
