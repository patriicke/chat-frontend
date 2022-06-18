import ChatWindow from "./COMPONENTS/Chat/ChatWindow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeBoard from "./PAGES/H&D/HomeBoard";
import SettingsPage from "./PAGES/SETTINGS/SettingsPage";
import LoginPage from "./PAGES/LOGIN/Login";
import SignupPage from "./PAGES/SIGNUP/Signup";
import PageNotFound from "./PAGES/404/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeBoard />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
