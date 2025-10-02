import { useEffect, useState } from "react";
import Footer from "./Footer";

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
      <section className="w-full p-10 grid grid-cols-3 auto-rows-auto gap-x-8 gap-y-10 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col min-h-lvh">
        {memocode && (
          <div className="rounded-lg bg-[#C0D1FF] flex flex-col p-5">
            <h3 className="text-2xl text-white font-bold rounded-xl w-40 text-center bg-indigo-500">
              {memocode.name}
            </h3>
            <p className="pt-3 font-semibold">{memocode.date}</p>
            <p className="text-base pt-3">{memocode.description}</p>
          </div>
        )}

        <div className="rounded-lg flex justify-center items-center max-lg:hidden">
          <img
            src="/assets/screenshots/memocode-home.jpg"
            alt="MemoCode Homepage"
            className="rounded-lg size-full object-cover"
          />
        </div>

        {memocode && (
          <div className="rounded-lg p-5 flex flex-col h-70 justify-between items-center self-center max-xs:w-full bg-[#C0D1FF] max-xs:h-auto max-xl:size-full 2xl:size-full">
            <div className="rounded-lg p-5 w-full h-50 flex flex-wrap justify-between items-center max-xs:h-auto max-xs:gap-2">
              <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 pl-3 pr-3 text-center bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%]">
                {memocode.technologies[0]}
              </p>
              <p className="bg-linear-[45deg,#F7DF1E_55%,#FEF9D8_100%] border-red-500 rounded-full pl-3 pr-3">
                {memocode.technologies[1]}
              </p>
              <p className="bg-linear-[45deg,#CC6699_55%,#B83D7A_100%] border-red-500 rounded-full pl-3 pr-3">
                {memocode.technologies[2]}
              </p>
              <p
                className="bg-gradient-to-r from-green-500 via-emerald-600 to-slate-700
 border-red-500 rounded-full pl-3 pr-3"
              >
                {memocode.technologies[3]}
              </p>
              <p className="bg-linear-[45deg,#000000_25%,#666666_100%] text-white border-red-500 rounded-full pl-3 pr-3">
                {memocode.technologies[4]}
              </p>
              <p
                className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600
border-red-500 rounded-full pl-3 pr-3"
              >
                {memocode.technologies[5]}
              </p>
            </div>

            <div className="rounded-lg p-5 w-full text-white font-medium max-xs:p-0">
              <a
                href={memocode.link}
                target="_blank"
                className="rounded-lg p-5 w-full border-1 flex justify-between items-center cursor-pointer bg-slate-800 hover:bg-slate-600 max-xs:p-2"
              >
                Check demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  fill="white"
                  viewBox="0 0 256 256"
                >
                  <path d="M168,96v48a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48A8,8,0,0,1,168,96Zm64,32A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </a>
            </div>
          </div>
        )}

        {statmind && (
          <div className="rounded-lg p-5 bg-slate-200">
            <h3 className="text-2xl text-white font-bold rounded-xl w-40 text-center bg-[#1d2c32]">
              {statmind.name}
            </h3>
            <p className="pt-3 font-semibold">{statmind.date}</p>
            <p className="text-base pt-3">{statmind.description} </p>
          </div>
        )}

        <div className="rounded-lg flex justify-center items-center max-lg:hidden">
          <img
            src="/assets/screenshots/statmind-home.jpeg"
            alt="StatMind Homepage"
            className="rounded-lg size-full object-cover"
          />
        </div>

        {statmind && (
          <div className="bg-slate-200 rounded-lg p-5 flex flex-col h-70 justify-between items-center self-center max-xs:w-full max-xs:h-auto max-xl:size-full 2xl:size-full">
            <div className="rounded-lg p-5 w-full h-50 flex flex-wrap justify-between items-center max-xs:h-auto max-xs:gap-2">
              <p className="rounded-full bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%] from-purple-500 to-pink-500 pl-3 pr-3 text-center">
                {statmind.technologies[0]}
              </p>
              <p className="bg-linear-[45deg,#F7DF1E_55%,#FEF9D8_100%]  border-red-500 rounded-full pl-3 pr-3">
                {statmind.technologies[1]}
              </p>
              <p className="bg-linear-[45deg,#8547C2_35%,#C2A3E0_100%] border-red-500 rounded-full pl-3 pr-3">
                {statmind.technologies[2]}
              </p>
              <p
                className="bg-gradient-to-r from-green-500 via-emerald-600 to-slate-700
 border-red-500 rounded-full pl-3 pr-3"
              >
                {statmind.technologies[3]}
              </p>
              <p className="bg-linear-[45deg,#B80000_25%,#FF5C5C_100%] text-white border-red-500 rounded-full pl-3 pr-3">
                {statmind.technologies[4]}
              </p>
              <p className="bg-linear-[45deg,#000000_25%,#666666_100%] text-white border-red-500 rounded-full pl-3 pr-3">
                {statmind.technologies[5]}
              </p>
            </div>

            <div className="rounded-lg p-5 w-full text-white font-medium max-xs:h-auto">
              <a
                href={statmind.link}
                target="_blank"
                className="rounded-lg p-5 w-full flex justify-between items-center cursor-pointer bg-slate-800 max-xs:p-2 bg-slate-800 hover:bg-slate-600 "
              >
                Check GitHub repository
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  fill="white"
                  viewBox="0 0 256 256"
                >
                  <path d="M168,96v48a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48A8,8,0,0,1,168,96Zm64,32A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </a>
            </div>
          </div>
        )}

        {greenier && (
          <div className="rounded-lg bg-[#f8fcd7] p-5">
            <h3 className="text-2xl text-white font-bold rounded-xl w-50 text-center bg-[#193b2c]">
              {greenier.name}
            </h3>
            <p className="pt-3 font-semibold">{greenier.date}</p>
            <p className="text-base pt-3">{greenier.description} </p>
          </div>
        )}

        <div className="rounded-lg flex justify-center items-center max-lg:hidden">
          <img
            src="/assets/screenshots/greenier-home.jpg"
            alt="Greenier please Homepage"
            className="rounded-lg size-full object-cover"
          />
        </div>

        {greenier && (
          <div className="rounded-lg p-5 flex flex-col h-70 justify-evenly items-center self-center max-xs:w-full bg-[#f8fcd7] max-xs:h-auto  max-xl:size-full 2xl:size-full">
            <div className="rounded-lg p-5 w-full h-50 flex flex-wrap justify-between items-center max-xs:h-auto max-xs:gap-2">
              <p className="rounded-full bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%] from-purple-500 to-pink-500 pl-3 pr-3 text-center">
                {greenier.technologies[0]}
              </p>
              <p className="bg-linear-[45deg,#F7DF1E_55%,#FEF9D8_100%] border-red-500 rounded-full pl-3 pr-3">
                {greenier.technologies[1]}
              </p>
              <p className="bg-linear-[45deg,#8547C2_35%,#C2A3E0_100%] border-red-500 rounded-full pl-3 pr-3">
                {greenier.technologies[2]}
              </p>
              <p className="bg-linear-[45deg,#FF8D85_35%,#FFE4E2_100%] border-red-500 rounded-full pl-3 pr-3">
                {greenier.technologies[3]}
              </p>
            </div>

            <div className="rounded-lg p-5 w-full text-white font-medium max-xs:h-auto">
              <a
                href={greenier.link}
                target="_blank"
                className="rounded-lg p-5 w-full flex justify-between items-center cursor-pointer bg-slate-800 hover:bg-slate-600 max-xs:p-2"
              >
                Check GitHub repository
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  fill="white"
                  viewBox="0 0 256 256"
                >
                  <path d="M168,96v48a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48A8,8,0,0,1,168,96Zm64,32A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </a>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Projects;
