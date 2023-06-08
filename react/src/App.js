import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Chats from "./pages/Chats";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/chats" element={<Chats />} />
      </Routes>
    </Router>
  );
}

export default App;
