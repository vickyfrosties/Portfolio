const Slider = () => {
  const stack = [
    { name: "React", src: "/public/assets/react.svg" },
    { name: "JavaScript", src: "/assets/javascript.svg" },
  ];

  // ! TO DO : setInterval + animation

  return (
    <>
      {stack.length > 0 ? (
        stack.map((s) => (
          <img className="size-50" key={s.name} src={s.src} alt={s.name} />
        ))
      ) : (
        <p>Aucune image</p>
      )}
    </>
  );
};

export default Slider;
