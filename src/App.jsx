// import './App.css'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import router from "./routes.jsx";
function App() {
  return (
    <div className="font-pre">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
