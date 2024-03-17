import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Sidenav from './shared/Sidenav'
import MainSection from './core/MainSection/MainSection'
import SurpriseSection from './core/Surprise Page/SurpriseSection'
import ParallaxSection from './core/ParallaxSection/ParallaxSection'
import SurpriseInner from './core/Surprise Page/SurpriseInner'

function App() {
  
  const location = useLocation();

  return (
    <>
      <div>
        {/* <Sidenav /> */}
        <MainSection />
        <ParallaxSection/>
        
        <AnimatePresence mode='await'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<SurpriseSection />} />
            <Route path='/surprise' element={<SurpriseInner/>} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
