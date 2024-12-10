import { Routes,Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutUs from "../pages/AboutUs"
import CustomNavbar from "../components/Navbar"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import PageRVE from "../pages/PageRVE"
import PageAlineadoBalanceo from "../pages/PageAlineadoBalanceo"
import PageSuspensionNeumatico from "../pages/PageSuspensionNeumatico"
import PageAmortiguadores from "../pages/PageAmortiguadores"
import PageFrenos from "../pages/PageFrenos"
import PageFabricacion from "../pages/PageFabricacion"
import VentaRepuestos from "../components/VentaRepuestos"
import PageTrenDel from "../pages/PageTrenDel"




const RoutesViews = () => {
  return (
    <>
    <CustomNavbar />

   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='SobreNosotros' element= {<AboutUs/>} />
    <Route path='reparacion-venta-elasticos' element= {<PageRVE/>} />
    <Route path='Alineado-Balanceo' element= {<PageAlineadoBalanceo />} />
    <Route path='Amortiguadores' element= {<PageAmortiguadores />} />
    <Route path='suspension-neumaticos' element= {<PageSuspensionNeumatico />} />
    <Route path='Fabricacion-elasticos' element= {<PageFabricacion />} />
    <Route path='Frenos' element= {<PageFrenos />} />
    <Route path='ventas-repuestos' element= {<VentaRepuestos />} />
    <Route path='reparacion-tren-delantero' element= {<PageTrenDel />} />
    
   </Routes>
   
   <Contacto />
   <Footer />
 
   </>
  )
}

export default RoutesViews