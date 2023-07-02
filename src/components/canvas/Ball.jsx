import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, OrbitControls,Float,Preload,useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <ambientLight intensity={0.25} />
      <directionalLight  position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          />
        <Decal 
            position={[0,0,1]}
            rotation={[2*Math.PI,0,6.25]}
            flatShading
            map={decal}
          />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) =>{
  return (
    <Canvas
      frameloop='always'
      gl={{preserveDrawingBuffer:true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableZoom={false}
          />
        </Suspense>
        <Ball imgUrl={icon}/>
    </Canvas>
  )
}

export default BallCanvas