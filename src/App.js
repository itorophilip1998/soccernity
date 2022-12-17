/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "./pages/Blog";
import { useDispatch } from "react-redux";
import WebFont from 'webfontloader';
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import AuthLayout from "./layouts/AuthLayout";
import BlogLayout from "./layouts/BlogLayout";
import Terms from "./pages/TermsAndPolicy/Terms";
import Policy from "./pages/TermsAndPolicy/Policy";
import LiveScore from "./pages/liveScore";
import { getFixturesDay1, getFixturesDay2, getFixturesDay3, getFixturesLive, getFixturesToday, getLegues } from "./store/LiveScores/Fixtures";
import MatchDetails from "./pages/liveScore/components/MatchDetails/index";
import { getCountry } from "./store/LiveScores/Matches";
import Community from "./pages/Community";
import Layout from "./layouts/Layout";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Auth/Verify";
import Layout2 from "./layouts/Layout/authLayout2";
import ProtectedRoutes from "./Middleware/ProtectedRoutes";
import { setAuth } from "./store/General";
import ShowProfile from "./pages/Community/components/Profile/ShowProfile";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    dispatch(getLegues())
    dispatch(getFixturesLive())
    dispatch(getFixturesToday())
    dispatch(getFixturesDay1())
    dispatch(getCountry())
    dispatch(setAuth())
    // dispatch(getFixturesDay3())
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
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/sport" element={<LiveScore />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
        </Route>

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/community" element={<Community />} />
          <Route path="/leaderboard" element={<Community />} />
          <Route path="/banter" element={<Community />} />
          <Route path="/profile" element={<ShowProfile />} />
        </Route>


        <Route path="/match-details" element={<MatchDetails />} />
        {/* Public Route end*/}

        {/* Auth Start */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify" element={<Verify />} />
        </Route>
        <Route path="verified" element={<ResetPassword />} />

        {/* Auth end */}
      </Routes>


      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
