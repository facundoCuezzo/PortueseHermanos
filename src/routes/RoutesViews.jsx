import { Routes,Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutUs from "../pages/AboutUs"
import CustomNavbar from "../components/Navbar"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import PageRVE from "../pages/PageRVE"
import PageAlineadoBalanceo from "../pages/PageAlineadoBalanceo"



const RoutesViews = () => {
  return (
    <>
    <CustomNavbar />

   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='SobreNosotros' element= {<AboutUs/>} />
    <Route path='ReparacionElasticos' element= {<PageRVE/>} />
    <Route path='Alineado-Balanceo' element= {<PageAlineadoBalanceo />} />
    
   </Routes>
   
   <Contacto />
   <Footer />
 
   </>
  )
}

export default RoutesViews