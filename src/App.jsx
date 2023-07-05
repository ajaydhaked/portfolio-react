import { BrowserRouter } from 'react-router-dom'
import {About,Academic,Contact,Experience,Hero,Navbar,Tech,Works} from './components'

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
        {/* <Academic className="-z-10"/> */}
        <Experience className="-z-10"/>
        <Works className="-z-10"/>
        <div className="relative z-0">
          <Contact/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
