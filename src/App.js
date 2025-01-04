
import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/core/common/Navbar";
import OpenRoute from "./components/Auth/OpenRoute"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Forgotpassword from "./pages/Forgotpassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";

function App() {
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
          <Route
          path="forgot-password"
          element={
            <OpenRoute>
             <Forgotpassword/>
            </OpenRoute>
          }
        />
          <Route
          path="update-password/:id"
          element={
            <OpenRoute>
             <UpdatePassword/>
            </OpenRoute>
          }
        />
          <Route
          path="verify-email/"
          element={
            <OpenRoute>
            <VerifyEmail/>
            </OpenRoute>
          }
        />

<Route
          path="about/"
          element={
            <OpenRoute>
            <About/>
            </OpenRoute>
          }
        />

    </Routes>

   </div>
  );
}

export default App;
