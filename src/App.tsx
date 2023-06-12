import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.tsx";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About/About.tsx";
import Chat from "./pages/Chat/Chat.tsx";
import VideoConferance from "./pages/VideoConferance/VideoConferance.tsx";
import Privacy from "./pages/Privacy/Privacy.tsx";

const App = () => {
  return (
    <>
      <Navbar />
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
