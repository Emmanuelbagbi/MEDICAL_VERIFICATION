import Footer from './COMPONENTS/Footer/Footer'
import Homepage from './PAGES/Homepage/Homepage'
import Navbar from './COMPONENTS/Navbar/Navbar'
import ScrollTop from './components/ScrollTop'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './PAGES/Contact/Contact'
<<<<<<< HEAD
import VerifyDrugs from './PAGES/Verify_Drugs/VerifyDrugs'
import Signup from './PAGES/SignUp/Signup'
import Login from './PAGES/Login/Login'
=======
import About from './PAGES/About/about'
>>>>>>> 5f65401dd6d0068c2f325ff21e7091322d0bd886

function App() {

  return (
    <>
       {/* <Navbar/>
       <About/>
       <Footer/> */}
         <Router>
        <Navbar/>
        <ScrollTop/>
        <Routes>
<<<<<<< HEAD
        <Route path='/' index element={<Homepage/>}/> 
        <Route path='/Signup' index element={<Signup/>}/>
        <Route path='/Login' index element={<Login/>}/>
        <Route path='/Contact' index element={<Contact/>}/>
        <Route path='/VerifyDrugs' index element={<VerifyDrugs/>}/>  
=======
        <Route path='/' index element={<Homepage/>}/>  
        <Route path='/Contact' index element={<Contact/>}/> 
        <Route path='/About' index element={<About/>}/> 
>>>>>>> 5f65401dd6d0068c2f325ff21e7091322d0bd886
        </Routes>
        <Footer/>
      </Router>
    </>

  )
}

export default App
