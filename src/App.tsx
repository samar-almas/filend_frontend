import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About.tsx";
import Chat from "./pages/Chat.tsx";
import VideoConferance from "./pages/VideoConferance.tsx";
import Privacy from "./pages/Privacy.tsx";

const App = () => {
  const location = useLocation();

  const excludedPaths = ["/login", "/register", "/password-reset"];

  const showNavbar = !excludedPaths.includes(location.pathname);
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/video-conferance" element={<VideoConferance />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};
export default App;
