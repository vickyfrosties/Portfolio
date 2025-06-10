import { useRef } from "react";
import { useEffect, useState } from "react";

const NavBar = () => {
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

  return (
    <>
      <nav
        className={`bg-blue-50 rounded-full w-2/5 m-auto flex justify-center mt-4 ${
          visible
            ? "opacity-100 transition-discrete  duration-700 ease-in-out"
            : "opacity-100 -translate-y-30 transition-discrete  duration-700 ease-in-out"
        }`}
      >
        <ul className="w-80 flex justify-between items-center pt-2 pb-2">
          <li className="pl-5 pr-5">Accueil</li>
          <li className="pl-5 pr-5">Projets</li>
          <li className="pl-5 pr-5">À propos</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
