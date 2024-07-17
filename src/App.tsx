import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GeneralLayout from "./pages/GeneralLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthLayout from "./pages/AuthLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GeneralLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
