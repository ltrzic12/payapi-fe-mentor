import { Routes, Route } from "react-router";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 769) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className='wrapper'>
      <div className='app'>
        <NavBar isMobileView={isMobileView}></NavBar>
        <Routes>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
