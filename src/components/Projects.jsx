const Projects = () => {
  return (
    <>
      <section className="w-full h-full p-10 border-2 border-yellow-300  grid grid-cols-6 grid-rows-3 gap-10">
        <div className="border-2 bg-slate-50 col-start-1 col-end-4 row-start-1 row-end-3 flex flex-col p-5">
          <h3>MemoCode</h3>
          <div className="border-2 flex flex-col justify-center items-center">
            <div className="flex justify-between w-80 items-center">
              <p className="bg-yellow-200 pl-2 pr-2 rounded-xl">React</p>
              <p className="bg-yellow-200 pl-2 pr-2 rounded-xl">React</p>
              <p className="bg-yellow-200 pl-2 pr-2 rounded-xl">React</p>
              <p className="bg-yellow-200 pl-2 pr-2 rounded-xl">React</p>
            </div>
          </div>
        </div>
        <div
          className="
          border-2 border-slate-50 text-slate-50 row-start-1 row-end-3 col-start-4 col-end-7 p-5
        "
        >
          <p>2</p>
        </div>
        <div className="border-2 border-slate-50 text-slate-50 col-start-1 col-end-4 p-5">
          <p>3</p>
        </div>
        <div
          className="
          border-2 bg-slate-50 col-start-4 col-end-7 row-end-4 p-5
        "
        >
          <p>4</p>
        </div>
      </section>
    </>
  );
};

export default Projects;
