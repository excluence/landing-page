import './App.css'
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

// Page Sections
import HomeSection from './HomeSection'

function App() {

  return (
    <>
      <Parallax pages={1} >
          <ParallaxLayer offset={0}>
              <HomeSection />
          </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App
