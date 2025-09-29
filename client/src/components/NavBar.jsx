import { useRef } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

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
        className={`text-white border-1 border-slate-300 bg-slate-800 rounded-2xl w-2/4 m-auto flex justify-center mt-4 max-md:w-full max-md:mt-0 max-md:rounded-none max-md:border-0 max-md:h-20 max-md:transition-none max-md:translate-none
${
  visible
    ? "opacity-100 transition-discrete duration-700 ease-in-out"
    : "opacity-100 -translate-y-30 transition-discrete duration-700 ease-in-out"
}`}
      >
        <ul className="w-3/4 flex justify-between items-center pt-2 pb-2 max-sm:border-1 max-sm:w-full">
          <NavLink
            className="cursor-pointer text-xl font-medium text-white max-md:w-20 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-lg max-sm:border-1"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house-icon lucide-house md:hidden"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            Home
          </NavLink>

          <NavLink
            className="cursor-pointer text-xl font-medium text-white max-md:w-20 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-lg"
            to="/about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-info-icon lucide-info md:hidden"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            About
          </NavLink>

          <NavLink
            className="cursor-pointer text-xl font-medium text-white max-md:w-20 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-lg"
            to="/projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-folder-code-icon lucide-folder-code md:hidden"
            >
              <path d="M10 10.5 8 13l2 2.5" />
              <path d="m14 10.5 2 2.5-2 2.5" />
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
            </svg>
            Projects
          </NavLink>

          <NavLink
            className="cursor-pointer text-xl font-medium text-white max-md:w-20 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-lg"
            to="/contact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-share2-icon lucide-share-2 md:hidden"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
            </svg>
            Contact
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
