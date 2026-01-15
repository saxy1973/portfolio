import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

export default function OrbitItem({
  img,
  title,
  path,
  radius = 6,
  size = 1,
  offset = 0,
  speed = 0.3,
  paused,
  setPaused,
}) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, img);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useFrame(({ clock }) => {
    if (!paused) {
      const t = clock.getElapsedTime() * speed;
      ref.current.position.x = radius * Math.cos(t + offset);
      ref.current.position.y = radius * Math.sin(t + offset);
    }
  });

  return (
    <group
      ref={ref}
      onPointerOver={() => {
        setHovered(true);
        setPaused(true);
      }}
      onPointerOut={() => {
        setHovered(false);
        setPaused(false);
      }}
      onClick={() => navigate(path)}
    >
      {/* ICON */}
      <sprite scale={[size, size, 1]}>
        <spriteMaterial
          map={texture}
          transparent
          depthWrite={false}
        />
      </sprite>

      {/* TITLE */}
      {hovered && (
        <Html distanceFactor={10}>
          <div
            style={{
              padding: "10px 20px",
              background: "rgba(0,0,0,0.8)",
              borderRadius: "16px",
              color: "white",
              fontSize: "25px",           // BIG FONT
              fontWeight: "bold",
              whiteSpace: "nowrap",
              textAlign: "center",
              boxShadow: "0 0 20px white, 0 0 40px white", // GLOW
             
            }}
          >
            {title}
          </div>
        </Html>
      )}
    </group>
  );
}
