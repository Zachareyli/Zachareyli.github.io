import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
// import InfoSectionB from '../components/Sign Up';
import MoreInfo from '../components/MoreInfo';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/MoreInfo/MoreData';
import Services from '../components/Services';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] =  useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <MoreInfo {...homeObjTwo}/>
    {/* <InfoSectionB {...homeObjOne}/> */}
    <Services/>
    <Footer />
    </>
  )
}

export default Home