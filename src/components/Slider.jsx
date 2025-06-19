import { useEffect, useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stack = [
    { name: "React", src: "/assets/svg/react.svg" },
    { name: "JavaScript", src: "/assets/svg/javascript.svg" },
    { name: "TypeScript", src: "/assets/svg/typescript.svg" },
    { name: "Tailwindcss", src: "/assets/svg/tailwindcss.svg" },
    { name: "SASS", src: "/assets/svg/sass.svg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < stack.length - 1) {
        setCurrentIndex((prev) => (prev < stack.length - 1 ? prev + 1 : 0));
      } else {
        setCurrentIndex(0);
      }
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col border-2">
        <img
          className="size-50"
          src={stack[currentIndex].src}
          alt={stack[currentIndex].name}
        />
        <h3 className="text-center">{stack[currentIndex].name} </h3>
      </div>
    </>
  );
};

export default Slider;
