import Footer from './COMPONENTS/Footer/Footer'
import Homepage from './PAGES/Homepage/Homepage'
import Navbar from './COMPONENTS/Navbar/Navbar'
import ScrollTop from './components/ScrollTop'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './PAGES/Contact/Contact'
import VerifyDrugs from './PAGES/Verify_Drugs/VerifyDrugs'
import Signup from './PAGES/SignUp/Signup'
import Login from './PAGES/Login/Login'

function App() {

  return (
    <>
         <Router>
        <Navbar/>
        <ScrollTop/>
        <Routes>
        <Route path='/' index element={<Homepage/>}/> 
        <Route path='/Signup' index element={<Signup/>}/>
        <Route path='/Login' index element={<Login/>}/>
        <Route path='/Contact' index element={<Contact/>}/>
        <Route path='/VerifyDrugs' index element={<VerifyDrugs/>}/>  
        </Routes>
        <Footer/>
      </Router>
    </>

  )
}

export default App
