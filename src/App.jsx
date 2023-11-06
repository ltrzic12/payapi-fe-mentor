import { Routes, Route, useNavigate } from "react-router";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import PricingPage from "./pages/Pricing/PricingPage";
import AboutPage from "./pages/About/AboutPage";

const App = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 769) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className='wrapper'>
      <div className='app'>
        <NavBar isMobileView={isMobileView}></NavBar>
        <Routes>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path='/pricing' element={<PricingPage></PricingPage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
