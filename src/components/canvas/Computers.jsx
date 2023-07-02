import React from 'react';
import { useState,useEffect,useRef } from 'react';
import  HALO  from 'vanta/dist/vanta.halo.min';
const Halomodel = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        backgroundalpha: 0,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
      <div ref={myRef} color='#eff666' className='w-full h-screen'>
      </div>
  )
}


export default Halomodel