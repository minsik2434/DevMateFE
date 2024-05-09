// import './App.css'
import "./index.css";

import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import router from "./routes.jsx";
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
