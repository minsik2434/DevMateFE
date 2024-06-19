// import './App.css'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import router from "./routes.jsx";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="font-pre">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
