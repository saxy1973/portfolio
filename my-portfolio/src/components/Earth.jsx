import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Earth() {
  const earthRef = useRef();
  const texture = useLoader(
    THREE.TextureLoader,
    "earth.png"
  );

  useFrame(() => {
    earthRef.current.rotation.y += 0.009;
  });

  return (
    <mesh ref={earthRef} scale={[3, 3, 3]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
