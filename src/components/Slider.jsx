import { useEffect, useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stack = [
    { name: "React", src: "/assets/svg/react.svg" },
    { name: "JavaScript", src: "/public/assets/svg/javascript.svg" },
    { name: "TypeScript", src: "/assets/svg/typescript.svg" },
    { name: "Tailwindcss", src: "/assets/svg/tailwindcss.svg" },
    { name: "Sass", src: "/assets/svg/sass.svg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < stack.length - 1) {
        setCurrentIndex((prev) => (prev < stack.length - 1 ? prev + 1 : 0));
      } else {
        setCurrentIndex(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="flex transition-transform duration-800 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {stack.map((s, i) => (
          <div
            key={i}
            className="flex-none w-full flex items-center justify-center"
          >
            <img
              src={s.src}
              alt={`icon-${i}`}
              className="size-40 drop-shadow-xl/25 max-2xl:size-20 "
            />
            <h3 className="font-bold text-2xl ml-3 text-shadow-lg/15">
              {s.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
