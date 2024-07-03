// import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "./pages/RootLayout";
// import Landing from "./pages/Landing";
// import Signup from "./pages/Signup";
// import Board from "./pages/board/Board";
// import Post from "./pages/Post";
// import BoardDetail from "./pages/BoardDetail";
// import Signin from "./pages/Signin";
// import StudyPost from "./pages/StudyPost";
// import StudyDetail from "./pages/StudyDetail";
// import Profile from "./pages/Profile";
// import ProfileEdit from "./pages/ProfileEdit";
// import CategoryBoard from "./pages/board/CategoryBoard";
// import Mentoring from "./pages/board/mentoring/Mentoring";
// import Study from "./pages/board/Study";
// import MentoringDetail from "./pages/board/mentoring/MentoringDetail";
// import MentoringRegister from "./pages/board/mentoring/MentoringRegister";
// import CategoryBoardCheck from "./pages/board/CategoryBoardCheck";
// import Error404 from "./pages/Error404";
// import PostCheck from "./pages/PostCheck";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Landing />,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//       {
//         path: "/signin",
//         element: <Signin />,
//       },

//       {
//         path: "/board",
//         element: <Board />,
//       },
//       {
//         path: "/:category/:id",
//         element: <BoardDetail />,
//       },
//       {
//         path: "post/:category/new",
//         element: <PostCheck />,
//       },
//       {
//         path: "post/:category/edit",
//         element: <PostCheck />,
//       },
//       {
//         path: "post/study/new",
//         element: <StudyPost />,
//       },
//       {
//         path: "post/study/edit",
//         element: <StudyPost />,
//       },
//       {
//         path: "/study/:id",
//         element: <StudyDetail />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//       {
//         path: "/profile/edit",
//         element: <ProfileEdit />,
//       },
//       {
//         path: "/board/:category",
//         element: <CategoryBoardCheck />,
//       },
//       {
//         path: "/board/mentoring",
//         element: <Mentoring />,
//       },
//       {
//         path: "/board/study",
//         element: <Study />,
//       },
//       {
//         path: "/mentoring/:id",
//         element: <MentoringDetail />,
//       },
//       {
//         path: "/board/mentoring/register",
//         element: <MentoringRegister />,
//       },
//       {
//         path: "/board/mentoring/edit",
//         element: <MentoringRegister />,
//       },
//       {
//         path: "*",
//         element: <Error404 />,
//       },
//     ],
//   },
// ]);

// export default router;

import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Spinner from "./components/Spinner";

const Landing = lazy(() => import("./pages/Landing"));
const Signup = lazy(() => import("./pages/Signup"));
const Board = lazy(() => import("./pages/board/Board"));
const BoardDetail = lazy(() => import("./pages/BoardDetail"));
const Signin = lazy(() => import("./pages/Signin"));
const StudyPost = lazy(() => import("./pages/StudyPost"));
const StudyDetail = lazy(() => import("./pages/StudyDetail"));
const Profile = lazy(() => import("./pages/Profile"));
const ProfileEdit = lazy(() => import("./pages/ProfileEdit"));
const Mentoring = lazy(() => import("./pages/board/mentoring/Mentoring"));
const Study = lazy(() => import("./pages/board/Study"));
const MentoringDetail = lazy(() =>
  import("./pages/board/mentoring/MentoringDetail")
);
const MentoringRegister = lazy(() =>
  import("./pages/board/mentoring/MentoringRegister")
);
const CategoryBoardCheck = lazy(() =>
  import("./pages/board/CategoryBoardCheck")
);
const Error404 = lazy(() => import("./pages/Error404"));
const PostCheck = lazy(() => import("./pages/PostCheck"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Landing />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Signin />
          </Suspense>
        ),
      },
      {
        path: "/board",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Board />
          </Suspense>
        ),
      },
      {
        path: "/:category/:id",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <BoardDetail />
          </Suspense>
        ),
      },
      {
        path: "post/:category/new",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <PostCheck />
          </Suspense>
        ),
      },
      {
        path: "post/:category/edit",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <PostCheck />
          </Suspense>
        ),
      },
      {
        path: "post/study/new",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <StudyPost />
          </Suspense>
        ),
      },
      {
        path: "post/study/edit",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <StudyPost />
          </Suspense>
        ),
      },
      {
        path: "/study/:id",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <StudyDetail />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/profile/edit",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <ProfileEdit />
          </Suspense>
        ),
      },
      {
        path: "/board/:category",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <CategoryBoardCheck />
          </Suspense>
        ),
      },
      {
        path: "/board/mentoring",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Mentoring />
          </Suspense>
        ),
      },
      {
        path: "/board/study",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Study />
          </Suspense>
        ),
      },
      {
        path: "/mentoring/:id",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <MentoringDetail />
          </Suspense>
        ),
      },
      {
        path: "/board/mentoring/register",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <MentoringRegister />
          </Suspense>
        ),
      },
      {
        path: "/board/mentoring/edit",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <MentoringRegister />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center pt-20">
                <Spinner />
              </div>
            }
          >
            <Error404 />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
