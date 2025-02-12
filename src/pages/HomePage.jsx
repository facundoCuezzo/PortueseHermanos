import React from 'react';
import Foto from '../components/box';
import Scroll from '../components/scroll';
import GalleryServices from '../components/GalleryServices';
import GoogleMaps from '../components/googleMaps'
import WpFloat from '../components/WpFloat';
import Advantages from '../components/Advantages';

const HomePage = () => {
  return (
    <>
    
      <Foto />
      <Scroll />
      {/*<SpecializeBody /> */}
      <GalleryServices />
      <GoogleMaps />
      <WpFloat />
      <Advantages />

    </>
  );
}

export default HomePage;
