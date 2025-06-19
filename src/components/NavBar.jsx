import { useRef } from "react";
import { useEffect, useState } from "react";

const NavBar = ({ setMode }) => {
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
        className={`bg-blue-50 rounded-full w-2/5 m-auto flex justify-center mt-4 max-md:w-full max-md:mt-0 max-md:rounded-none max-md:h-20 max-md:transition-none
${
  visible
    ? "opacity-100 transition-discrete duration-700 ease-in-out"
    : "opacity-100 -translate-y-30 transition-discrete duration-700 ease-in-out"
}`}
      >
        <ul className="min-w-40 flex justify-between items-center pt-2 pb-2">
          <li
            className="pl-5 pr-5 cursor-pointer text-xl font-medium
"
            onClick={handleClick}
          >
            Home
          </li>
          <li
            className="pl-5 pr-5 cursor-pointer text-xl font-medium
"
            onClick={handleClick}
          >
            Projects
          </li>
          <li
            className="pl-5 pr-5 cursor-pointer text-xl font-medium
"
            onClick={handleClick}
          >
            About
          </li>
          <li
            className="pl-5 pr-5 cursor-pointer text-xl font-medium
"
            onClick={handleClick}
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
