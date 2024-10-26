import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Model3D() {
  // Replace with your 3D model path
  const gltf = useLoader(GLTFLoader, '/path/to/your/model.gltf')
  
  return <primitive object={gltf.scene} scale={2} />
}