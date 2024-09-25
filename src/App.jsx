import Footer from './COMPONENTS/Footer/Footer'
import Homepage from './PAGES/Homepage/Homepage'
import Navbar from './COMPONENTS/Navbar/Navbar'
import ScrollTop from './components/ScrollTop'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './PAGES/Contact/Contact'

function App() {

  return (
    <>
         <Router>
        <Navbar/>
        <ScrollTop/>
        <Routes>
        <Route path='/' index element={<Homepage/>}/>  
        <Route path='/Contact' index element={<Contact/>}/>  
        </Routes>
        <Footer/>
      </Router>
    </>

  )
}

export default App
