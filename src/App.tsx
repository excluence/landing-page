import './App.css'

// Page Sections
import HomeSection from './HomeSection';
import PajamaCollectionSection from './PajamaCollectionSection';
import SiteIntegrateSection from './SiteIntegrateSection';
import Header from './Header';
import { useEffect, useState } from 'react';

function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    window.onscroll = (e) => {
      setIsHeaderVisible(window.scrollY >= document.body.clientHeight * 0.8)
    }
  })

  return (
    <>
          <Header isVisible={isHeaderVisible} />
          <HomeSection />
          <PajamaCollectionSection />
          <SiteIntegrateSection />
    </>
  )
}

export default App
