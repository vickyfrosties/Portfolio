import { useState } from "react";
import '../../App.css';
import "../../variables.css";
import { useEffect } from "react";

const ToTop = () => {
  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => {
    const position = window.scrollY;
    if (position > 250) {
      window.scrollTo();
      setVisibility(true);
    }
    else if (position < 50) {
      window.scrollTo();
      setVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    return () => (
      window.removeEventListener("scroll", handleVisibility)
    );
  }, []);


  return (
    <>
      {visibility && (
        <button className="top" onClick={() => window.scrollTo(
          {
            top: 0,
          }
        )}>
          <img src="/Icons/chevron-up.svg" alt="" />
        </button>
      )}
    </>
  );
};

export default ToTop;