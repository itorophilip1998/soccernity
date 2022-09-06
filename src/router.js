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

function App() {
  const dispatch = useDispatch();
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
    <div className="w-100">
      <Router>
        <Header />
        <Routes>
          {/* Private Route start*/}

          {/* Private Route end*/}

          {/* Public Route start*/}
          <Route path="/" element={<Blog />} />
          {/* Public Route end*/}
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
