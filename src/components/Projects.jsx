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

  return (
    <>
      <section className="w-full h-full p-10 grid grid-cols-4 grid-rows-4 gap-x-8 gap-y-10">
        {memocode && (
          <div className="rounded-lg bg-blue-100 col-span-2 row-span-2 flex flex-col p-5">
            <h3 className="text-2xl text-white font-bold rounded-xl w-40 text-center bg-[#031a6b]">
              {memocode.name}
            </h3>
            <p className="text-lg pt-3">{memocode.description} </p>
          </div>
        )}

        <div className="rounded-lg col-span-2 row-span-2">
          <p>screenshot</p>
        </div>

        {memocode && (
          <div className="bg-blue-100 rounded-lg p-5 col-span-2 flex justify-evenly items-center">
            <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 pl-3 pr-3 text-center">
              {memocode.technologies[0]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[1]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[2]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[3]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[4]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {memocode.technologies[5]}
            </p>
          </div>
        )}

        {statmind && (
          <div className="rounded-lg bg-blue-100 p-5 col-span-2  row-start-4 row-span-3">
            <h3 className="text-2xl text-white font-bold rounded-xl w-40 text-center bg-linear-65 from-purple-500 to-pink-500">
              {statmind.name}
            </h3>
            <p className="text-lg pt-3">{statmind.description} </p>
          </div>
        )}

        {statmind && (
          <div className="bg-blue-100 rounded-lg p-5 col-span-2 flex justify-evenly items-center row-start-4">
            <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 pl-3 pr-3 text-center">
              {statmind.technologies[0]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[1]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[2]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[3]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[4]}
            </p>
            <p className="bg-linear-65 from-purple-500 to-pink-500 border-red-500 rounded-full pl-3 pr-3">
              {statmind.technologies[5]}
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
