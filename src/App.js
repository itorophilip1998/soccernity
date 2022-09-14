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
    <Router>
      <Header className="container" />
      <main >
        <Routes>
          {/* Private Route start*/}

          {/* Private Route end*/}

          {/* Public Route start*/}
          <Route path="/" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Public Route end*/}
        </Routes>
      </main>
      <Footer className="container" />
    </Router>
  );
}

export default App;
