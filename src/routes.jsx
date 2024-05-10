import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
// import Test from "./pages/Test";
import Landing from "./pages/Landing";

import Test from "./pages/Test";
import Signup from "./pages/Signup";
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

      //   {
      //     path: "/test",
      //     element: <Test />,
      //   },
    ],
  },
]);
//         element: <RootLayout/>,
//         children : [
//             {
//                 path: "/",
//                 element: <Home />
//             },

//         ]
//     }
// ])

export default router;
