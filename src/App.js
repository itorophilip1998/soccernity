/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "./pages/Blog";
import { useDispatch } from "react-redux";
import WebFont from 'webfontloader';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer/Footer";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import AuthLayout from "./layouts/AuthLayout";
import BlogLayout from "./layouts/BlogLayout";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
  }, []);

  return (
    <Router>

      <Routes>
        {/* Private Route start*/}

        {/* Private Route end*/}



        {/* Public Route start*/}
        <Route path="/" element={<BlogLayout/>}>
          <Route path="/" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* Public Route end*/}

        {/* Auth Start */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        {/* Auth end */}
      </Routes>
    </Router>
  );
}

export default App;
