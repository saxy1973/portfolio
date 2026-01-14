import { Canvas } from "@react-three/fiber";
import Sun from "./Earth";
import OrbitItem from "./OrbitItem";
import Earth from "./Earth";

export default function Scene() {
  const items = [
    { img: "/icons/about.png", offset: 0, glowColor: "#2196f3" },
    { img: "/icons/contact.png", offset: (2 * Math.PI) / 5, glowColor: "#00ff00" },
    { img: "/icons/education.png", offset: (2 * Math.PI * 2) / 5, glowColor: "#ff9800" },
    { img: "/icons/project.png", offset: (2 * Math.PI * 3) / 5, glowColor: "#9e9e9e" },
    { img: "/icons/skills.png", offset: (2 * Math.PI * 4) / 5, glowColor: "#ffffff" },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 12] }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      {/* Earth */}
      <Earth />

      {/* Orbiting images */}
      {items.map((item, i) => (
  <OrbitItem
    key={i}
    img={item.img}
    offset={item.offset}
    radius={6.5}
    size={3.6}
  />
))}

    </Canvas>
  );
}
