import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode, setDarkMode } =
    useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <AppRoutes />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;