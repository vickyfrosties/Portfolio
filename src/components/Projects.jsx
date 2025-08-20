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
      <section className="w-full h-full p-10 grid grid-cols-4 grid-rows-4 gap-x-4 gap-y-8">
        {memocode && (
          <div className="border-2 rounded-lg bg-blue-100 col-span-3 row-span-2 flex flex-col p-5">
            <h3 className="text-xl">{memocode.name}</h3>
          </div>
        )}

        {memocode && (
          <div className="bg-blue-100 rounded-lg row-span-2 p-5 flex flex-wrap">
            <p>{memocode.technologies[0]}</p>
            <p>{memocode.technologies[1]}</p>
            <p>{memocode.technologies[2]}</p>
            <p>{memocode.technologies[3]}</p>
            <p>{memocode.technologies[4]}</p>
            <p>{memocode.technologies[5]}</p>
          </div>
        )}
        {statmind && (
          <div className="border-2 rounded-lg bg-blue-100 col-span-3 col-end-5 row-start-3 row-span-3 p-5">
            <h3 className="text-xl">{statmind.name} </h3>
          </div>
        )}

        {statmind && (
          <div className="bg-blue-100 rounded-lg row-start-3 row-span-3 p-5 flex flex-wrap">
            <p>{statmind.technologies[1]}</p>
            <p>{statmind.technologies[2]}</p>
            <p>{statmind.technologies[3]}</p>
            <p>{statmind.technologies[0]}</p>
            <p>{statmind.technologies[4]}</p>
            <p>{statmind.technologies[5]}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
