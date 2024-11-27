import { Routes,Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutUs from "../pages/AboutUs"
import CustomNavbar from "../components/Navbar"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import ErrorPage from "../pages/ErrorPage"


const RoutesViews = () => {
  return (
    <>
    <CustomNavbar />

   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='SobreNosotros' element= {<AboutUs/>} />
    
   </Routes>
   
   <Contacto />
   <Footer />
 
   </>
  )
}

export default RoutesViews