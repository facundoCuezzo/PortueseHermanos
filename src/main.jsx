import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import Scroll from './components/scroll';
import Foto from './components/box';
import SpecializeBody from './components/SpecializeBody';
import GalleryServices from './components/GalleryServices';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomNavbar />
    <Foto />
    <Scroll />
    <SpecializeBody />
    <GalleryServices />
    <Contacto />
    <Footer />


  </React.StrictMode>,
);
