import { useRef } from "react";
import { useEffect, useState } from "react";

const NavBar = ({ mode, setMode }) => {
  const [visible, setVisible] = useState(true);
  const prevPositionScroll = useRef(window.scrollY);

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > prevPositionScroll.current) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    prevPositionScroll.current = currentPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const selected = e.target.textContent;
    setMode(selected);
  };

  return (
    <>
      <nav
        className={`text-white border-1 border-slate-300 bg-slate-800 rounded-2xl w-1/3 m-auto flex justify-center mt-4 max-md:w-full max-md:mt-0 max-md:rounded-none max-md:h-20 max-md:transition-none max-md:bg-blue-50 max-md:text-black
${
  visible
    ? "opacity-100 transition-discrete duration-700 ease-in-out"
    : "opacity-100 -translate-y-30 transition-discrete duration-700 ease-in-out"
}`}
      >
        <ul className="w-3/4 flex justify-between items-center pt-2 pb-2">
          {["Home", "Projects", "About", "Contact"].map((section, i) => (
            <li
              key={i}
              onClick={handleClick}
              className={`cursor-pointer text-xl font-medium text-white ${
                mode === section
                  ? "border-b-1 border-slate-200 max-md:bg-green-400 max-md:border-b-0"
                  : "border-b-0"
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
