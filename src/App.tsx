import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GeneralLayout from "./pages/GeneralLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthLayout from "./pages/AuthLayout";
import Protected from "./pages/Protected";
import Requests from "./pages/Requests";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ClientProfile from "./pages/ClientProfile";
import Settings from "./pages/Settings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <GeneralLayout />
              </Protected>
            }
          >
            <Route index element={<Home />} />
            <Route path="requests" element={<Requests />} />
            <Route path="client-profile" element={<ClientProfile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgetPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
