import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Earth from "./Earth";
import OrbitItem from "./OrbitItem";

export default function Scene() {
  const [paused, setPaused] = useState(false);

  const items = [
    { img: "/icons/about.png", title: "About", path: "/about", offset: 0 },
    { img: "/icons/contact.png", title: "Contact", path: "/contact", offset: (2*Math.PI)/5 },
    { img: "/icons/education.png", title: "Education", path: "/education", offset: (2*Math.PI*2)/5 },
    { img: "/icons/project.png", title: "Projects", path: "/projects", offset: (2*Math.PI*3)/5 },
    { img: "/icons/skills.png", title: "Skills", path: "/skills", offset: (2*Math.PI*4)/5 },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 12] }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Earth />

      {items.map((item, i) => (
        <OrbitItem
          key={i}
          {...item}
          radius={6.5}
          size={4}
          speed={0.3}
          paused={paused}
          setPaused={setPaused}
        />
      ))}
    </Canvas>
  );
}
