import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function OrbitItem({
  img,
  radius = 6.5,
  size = 1.6,
  offset = 0,
  speed = 0.3,
}) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, img);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = radius * Math.cos(t + offset);
    ref.current.position.y = radius * Math.sin(t + offset);
  });

  return (
    <sprite ref={ref} scale={[size, size, 1]}>
      <spriteMaterial
        map={texture}
        transparent
        depthWrite={false}
      />
    </sprite>
  );
}
