import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context/AuthProvider";
import EnrollForm from "./components/EnrollForm";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/enroll" element={<EnrollForm />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default App;
