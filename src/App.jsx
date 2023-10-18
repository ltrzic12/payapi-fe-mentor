import { Routes, Route } from "react-router";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className='app'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
