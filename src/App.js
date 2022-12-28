/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import AuthLayout from "./layouts/AuthLayout";
import Terms from "./pages/TermsAndPolicy/Terms";
import Policy from "./pages/TermsAndPolicy/Policy";
import LiveScore from "./pages/liveScore";
import MatchDetails from "./pages/liveScore/components/MatchDetails/index";
import Community from "./pages/Community";
import Layout from "./layouts/Layout";
import Verify from "./pages/Auth/Verify";
import ProtectedRoutes from "./Middleware/ProtectedRoutes";
import ShowProfile from "./pages/Community/components/Profile/ShowProfile";
import AppLoader from "./AppLoader";
import CompleteProfile from "./pages/Auth/CompleteProfile"; 

function App() {
  AppLoader()
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
          <Route path="complete-profile" element={<CompleteProfile />} />
        </Route>
        <Route path="verified" element={<ResetPassword />} />

        {/* Auth end */}
      </Routes>
    
    </Router>
  );
}

export default App;
