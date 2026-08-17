"use client";

import DriftWall from "./DriftWall";
import GradientWaves from "./GradientWaves";

const GlobalBackground = () => {
  const items = [
    {
      image: "./images/bg1.webp",
      title: "bg1",
      href: "#",
    },
    {
      image: "./images/bg2.webp",
      title: "bg2",
      href: "#",
    },
    {
      image: "./images/bg3.webp",
      title: "bg3",
      href: "#",
    },
  ];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <DriftWall
        items={items}
        columns={8}
        tileHeight={210}
        tileWidth={300}
        gap={18}
        tilt={0}
        turn={0}
        perspective={1200}
        depth={120}
        speed={10}
        direction="down"
        variance={0.45}
        parallax={0.6}
        lift={64}
        fade={0.5}
        dim={1}
        overlayColor="#060010"
        radius={0}
        roll={0}
        pauseOnHover={false}
        grayscale={false}
      />
    </div>
  );
};

export default GlobalBackground;
