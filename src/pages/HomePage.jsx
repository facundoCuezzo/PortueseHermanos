import React from 'react';
import CustomNavbar from '../components/Navbar';
import Foto from '../components/box';
import Scroll from '../components/scroll';
import SpecializeBody from '../components/SpecializeBody';
import GalleryServices from '../components/GalleryServices';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
    
      <Foto />
      <Scroll />
      <SpecializeBody />
      <GalleryServices />
     
    </>
  );
}

export default HomePage;
