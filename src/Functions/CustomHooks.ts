import { useRef, useEffect, useState } from "react";

export function UseAnimateBlob() {
  const blob = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = (event: PointerEvent) => {
      let { clientX, clientY } = event;
      blob.current?.animate(
        { top: `${clientY + 40}px`, left: `${clientX + 40}px` },
        { duration: 2000, fill: "forwards" }
      );
    };
    document.body.addEventListener("pointermove", track);
    return () => {
      removeEventListener("pointermove", track);
    };
  }, []);
  return blob;
}

export function UseResize() {
  const [width, setWidth] = useState(560);

  useEffect(() => {
    const changeWidth = (e) => {
      if (e.matches) {
        setWidth(400);
      } else {
        setWidth(560);
      }
    };
    const viewMedia = window.matchMedia("(width<630px)");
    changeWidth(viewMedia);
    viewMedia.addEventListener("change", changeWidth);
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
    }, 2000);
    return () => {
      clearInterval(Timer);
    };
  }, []);
  return morph;
}
