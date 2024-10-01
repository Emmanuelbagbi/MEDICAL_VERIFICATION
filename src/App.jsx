import Footer from "./COMPONENTS/Footer/Footer";
import Homepage from "./PAGES/Homepage/Homepage";
import ScrollTop from "./COMPONENTS/ScrollTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./PAGES/Contact/Contact";
import VerifyDrugs from "./PAGES/Verify_Drugs/VerifyDrugs";
import Signup from "./PAGES/SignUp/Signup";
import Login from "./PAGES/Login/Login";
import About from "./PAGES/About/about";
import Admin from '../src/PAGES/Admin/Admin'
import ToogleMode from "./Dashboard/Togglemode";
// import ManufacturerDashboard from './PAGES/Admin/Admin'


function App() {
  return (
    <>
      {/* <Navbar />
      <About />
      <Footer /> */}
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/Signup" index element={<Signup />} />
          <Route path="/Login" index element={<Login />} />
          <Route path="/Contact" index element={<Contact />} />
          <Route path="/VerifyDrugs" index element={<VerifyDrugs />} />
          <Route path="/" index element={<Homepage />} />
          <Route path="/Contact" index element={<Contact />} />
          <Route path="/About" index element={<About />} />
          <Route path="/dashboard" index element={<ToogleMode/>} />
          <Route path="/Admin" index element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
      {/* <ManufacturerDashboard/> */}
    </>
  );
}

export default App;
