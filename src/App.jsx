import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas,VantaBack} from './components'

const App=()=>{
  return (
    <>
      <BrowserRouter>
        <div  className="relative z-10 bg-primary bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About className="-z-10" />
        <Tech className="-z-10" />
        <Experience className="-z-10"/>
        <Works className="-z-10"/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
