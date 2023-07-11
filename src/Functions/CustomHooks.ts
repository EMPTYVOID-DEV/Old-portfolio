import { useEffect, useState } from "react";

export function UseResize() {
  const [width, setWidth] = useState(560);

  useEffect(() => {
    const tabletChange = (e) => {
      if (e.matches) {
        setWidth(400);
      } else {
        setWidth(560);
      }
    };
    const mobileChange = (e) => {
      if (e.matches) {
        setWidth(320);
      } else {
        setWidth(560);
      }
    };
    const tabletMedia = window.matchMedia("(width<680px)");
    const mobileMedia = window.matchMedia("(width<440px)");
    tabletChange(tabletMedia);
    mobileChange(mobileMedia);
    tabletMedia.addEventListener("change", tabletChange);
    mobileMedia.addEventListener("change", mobileChange);
  }, []);
  return width;
}
export function changeMorph() {
  const Morphs: { roundness: number; configuration: number }[] = [
    { roundness: 0, configuration: 1 },
    { roundness: 1, configuration: 1 },
    { roundness: 2, configuration: 1 },
    { roundness: 4, configuration: 3 },
    { roundness: 3, configuration: 2 },
    { roundness: 0, configuration: 2 },
  ];
  const [morph, setMorph] = useState<{
    roundness: number;
    configuration: number;
  }>({ roundness: 0, configuration: 1 });

  useEffect(() => {
    const Timer = setInterval(() => {
      let index = Math.floor(Math.random() * 6);
      setMorph(Morphs[index]);
    }, 1000);
    return () => {
      clearInterval(Timer);
    };
  }, []);
  return morph;
}
