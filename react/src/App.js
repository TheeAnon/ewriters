import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verify from "./pages/VerifyEmail";
import Chat from "./pages/Chat";
import Chats from "./pages/Chats";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./hocs/Layout";
import About from "./pages/About";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route exact path="/verify" element={<Verify />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/chats" element={<Chats />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>
);

export default App;
