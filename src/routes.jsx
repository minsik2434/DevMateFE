import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Test from "./pages/Test";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },

      //   {
      //     path: "/test",
      //     element: <Test />,
      //   },
    ],
  },
]);

export default router;
