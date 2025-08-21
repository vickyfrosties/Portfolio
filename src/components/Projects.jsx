import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json");

        if (!response.ok) {
          throw new Error(
            `Erreur HTTP request GET projects ${response.status}`
          );
        }

        const data = await response.json();
        setProjects(data);

        return data;
      } catch (error) {
        console.error("Erreur survenue lors du fetch:", error);
      }
    };
    fetchProjects();
  }, []);

  const memocode = projects[0];
  const statmind = projects[1];
  const greenier = projects[2];

  return (
    <>
      <section className="w-full p-10 grid grid-cols-3 auto-rows-auto gap-x-8 gap-y-10">
        {memocode && (
          <div className="rounded-lg bg-blue-100  flex flex-col p-5">
            <h3 className="text-2xl text-white font-bold rounded-xl w-40 text-center bg-[#031a6b]">
              {memocode.name}
            </h3>
            <p className=" pt-3">{memocode.date}</p>
            <p className="text-lg pt-3">{memocode.description}</p>
            <div>
              <button className="bg-red-400">See demo</button>
            </div>
          </div>
        )}

        <div className="rounded-lg ">
          <img
            src="/assets/screenshots/memocode-home.jpg"
            alt=""
            className="rounded-lg border-1 border-solid border-[#031a6b]"
          />
        </div>

        {memocode && (
          <div className="bg-blue-100 rounded-lg p-5 flex flex-wrap h-40 justify-evenly items-center">
            <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 pl-3 pr-3 text-center bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%]">
              {memocode.technologies[0]}
            </p>
            <p className="bg-linear-[45deg,#F7DF1E_55%,#FEF9D8_100%] border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[1]}
            </p>
            <p className="bg-linear-[45deg,#CC6699_55%,#B83D7A_100%] border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[2]}
            </p>
            <p className="bg-linear-[45deg,#47A248_45%,#9CD39D_100%] border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[3]}
            </p>
            <p className="bg-linear-[45deg,#000000_25%,#666666_100%] text-white border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[4]}
            </p>
            <p className="bg-linear-[45deg,#416D36_55%,#5FA04E_100%] border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[5]}
            </p>
          </div>
        )}

        {statmind && (
          <div className="rounded-lg bg-blue-100 p-5  ">
            <h3 className="text-2xl text-white font-bold rounded-xl w-40 text-center bg-linear-65 from-purple-500 to-pink-500">
              {statmind.name}
            </h3>
            <p className="pt-3">{statmind.date}</p>
            <p className="text-lg pt-3">{statmind.description} </p>
          </div>
        )}

        <div className="rounded-lg  ">
          <img
            src="/assets/screenshots/memocode-home.jpg"
            alt=""
            className="rounded-lg border-1 border-solid border-[#031a6b]"
          />
        </div>

        {statmind && (
          <div className="bg-blue-100 rounded-lg p-5 flex flex-wrap h-40 justify-evenly items-center ">
            <p className="rounded-full bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%] from-purple-500 to-pink-500 pl-3 pr-3 text-center">
              {statmind.technologies[0]}
            </p>
            <p className="bg-linear-[45deg,#F7DF1E_55%,#FEF9D8_100%]  border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[1]}
            </p>
            <p className="bg-linear-[45deg,#8547C2_35%,#C2A3E0_100%] border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[2]}
            </p>
            <p className="bg-linear-[45deg,#47A248_45%,#9CD39D_100%] border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[3]}
            </p>
            <p className="bg-linear-[45deg,#B80000_25%,#FF5C5C_100%] text-white border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[4]}
            </p>
            <p className="bg-linear-[45deg,#000000_25%,#666666_100%] text-white border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[5]}
            </p>
          </div>
        )}

        {greenier && (
          <div className="rounded-lg bg-blue-100 p-5">
            <h3 className="text-2xl text-white font-bold rounded-xl w-50 text-center bg-linear-65 from-purple-500 to-pink-500">
              {greenier.name}
            </h3>
            <p className="pt-3">{greenier.date}</p>
            <p className="text-lg pt-3">{greenier.description} </p>
          </div>
        )}

        {greenier && (
          <div className="bg-blue-100 rounded-lg p-5 flex flex-wrap h-40 justify-evenly items-center">
            <p className="rounded-full bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%] from-purple-500 to-pink-500 pl-3 pr-3 text-center">
              {greenier.technologies[0]}
            </p>
            <p className=" bg-linear-[45deg,#F7DF1E_55%,#FEF9D8_100%] border-red-500 rounded-full pl-3 pr-3">
              {greenier.technologies[1]}
            </p>
            <p className="bg-linear-[45deg,#8547C2_35%,#C2A3E0_100%] border-red-500 rounded-full pl-3 pr-3">
              {greenier.technologies[2]}
            </p>
            <p className="bg-linear-[45deg,#FF8D85_35%,#FFE4E2_100%] border-red-500 rounded-full pl-3 pr-3">
              {greenier.technologies[3]}
            </p>
          </div>
        )}

        <div className="rounded-lg ">
          <img
            src="/assets/screenshots/memocode-home.jpg"
            alt=""
            className="rounded-lg border-1 border-solid border-[#031a6b]"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
