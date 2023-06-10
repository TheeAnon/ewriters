import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Activate from "./pages/Activate";
import Chat from "./pages/Chat";
import Chats from "./pages/Chats";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route exact path="/activate" element={<Activate />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/chats" element={<Chats />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
