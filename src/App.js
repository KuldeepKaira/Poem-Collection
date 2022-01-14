import "./App.css";
import AppBar from "./components/appBar/AppBar";
import SideBar from "./components/sideBar/SideBar";
import HomePage from "./pages/HomePage.jsx";
import PoemsPage from "./pages/PoemsPage.jsx";
import Footer from "./components/Footer/Footer";
import { Switch, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/scrollToTop/ScrollToTop.jsx";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sideBarClickHandler = () => {
    setSideBarOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <AppBar onsideBarClick={sideBarClickHandler} />
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={sideBarClickHandler} />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/poem/:poemId" element={<PoemsPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
