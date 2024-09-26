import Footer from './COMPONENTS/Footer/Footer'
import Homepage from './PAGES/Homepage/Homepage'
import Navbar from './COMPONENTS/Navbar/Navbar'
import ScrollTop from './components/ScrollTop'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './PAGES/Contact/Contact'
import About from './PAGES/About/about'

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
        <Route path='/' index element={<Homepage/>}/>  
        <Route path='/Contact' index element={<Contact/>}/> 
        <Route path='/About' index element={<About/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </>

  )
}

export default App
