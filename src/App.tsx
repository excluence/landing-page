import './App.css'

// Page Sections
import HomeSection from './HomeSection';
import PajamaCollectionSection from './PajamaCollectionSection';
import SiteIntegrateSection from './SiteIntegrateSection';
import Header from './Header';
import { useEffect, useState } from 'react';
import FeatureSection from './FeaturesSection';
import RequestAccessSection from './RequestAccessSection';

function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsHeaderVisible(window.scrollY >= document.body.clientHeight * 0.8)
    }
  })

  return (
    <>
          <Header isVisible={isHeaderVisible} />
          <HomeSection />
          <PajamaCollectionSection />
          <SiteIntegrateSection />
          <FeatureSection />
          <RequestAccessSection />
    </>
  )
}

export default App
