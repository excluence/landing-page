import './App.css'

// Page Sections
import HomeSection from './HomeSection';
import PajamaCollectionSection from './PajamaCollectionSection';
import SiteIntegrateSection from './SiteIntegrateSection';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';
import FeatureSection from './FeaturesSection';
import RequestAccessSection from './RequestAccessSection';

function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const appRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.onscroll = () => {
      setIsHeaderVisible(window.scrollY >= document.body.clientHeight * 0.8 &&
        window.scrollY <= document.body.clientHeight * 3.8
        )
    }
  })

  return (
    <>  
        <div ref={appRef}>
          <Header isVisible={isHeaderVisible} />
          <HomeSection />
          <PajamaCollectionSection />
          <SiteIntegrateSection />
          <FeatureSection />
          <RequestAccessSection />
          </div>
    </>
  )
}

export default App
