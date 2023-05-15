import './App.css'

// Page Sections
import HomeSection from './HomeSection';
import PajamaCollectionSection from './PajamaCollectionSection';
import SiteIntegrateSection from './SiteIntegrateSection';
import Header from './Header';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY >= document.body.clientHeight * 2) {
        console.log(`%c${window.scrollY}`, 'color:green;')
      }else if(window.scrollY >= document.body.clientHeight) {
        console.log(`%c${window.scrollY}`, 'color:red;')
      }
    }
  })

  return (
    <>
          <Header />
          <HomeSection />
          <PajamaCollectionSection />
          <SiteIntegrateSection />
    </>
  )
}

export default App
