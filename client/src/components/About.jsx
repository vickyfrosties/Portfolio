import { useNavigate } from "react-router";
import Footer from "./Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="max-md:h-auto h-full">
        <section className="h-full grid grid-cols-3 grid-rows-3 p-5 gap-5 max-md:flex max-md:flex-col max-md:h-auto">
          <div className="grid gap-y-4 max-lg:flex">
            <div className="bg-emerald-200 p-5 rounded-lg flex max-md:w-full max-md:justify-around">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-signpost-big-icon lucide-signpost-big max-lg:hidden max-md:block max-xs:size-10"
                >
                  <path d="M10 9H4L2 7l2-2h6" />
                  <path d="M14 5h6l2 2-2 2h-6" />
                  <path d="M10 22V4a2 2 0 1 1 4 0v18" />
                  <path d="M8 22h8" />
                </svg>
              </div>
              <div className="h-full flex flex-col justify-between max-md:w-3/4">
                <p className="flex flex-col items-center font-medium text-lg pl-4 h-full max-lg:pl-0 max-lg:text-base">
                  <span className="text-2xl font-bold w-full">Path</span>I
                  transitioned into front-end development after choosing a new
                  career path and finally found what drives me most: creating.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-200 p-5 rounded-lg flex max-lg:justify-around max-md:justify-around max-lg:overflow-scroll">
            <p className="flex flex-col items-center font-medium text-lg h-full max-md:w-3/4 max-lg:text-base max-xl:overflow-scroll lg:size-full">
              <span className="text-2xl font-bold w-full">Motivation</span>
              What excites me is being part of the entire process — from the
              initial idea to the final product. Seeing a project come to life
              step by step is what keeps me motivated and I truly believe that
              it is the perfect way to learn.
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-medal-icon lucide-medal max-lg:hidden max-md:block max-xs:size-10"
              >
                <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                <path d="M11 12 5.12 2.2" />
                <path d="m13 12 5.88-9.8" />
                <path d="M8 7h8" />
                <circle cx="12" cy="17" r="5" />
                <path d="M12 18v-2h-.5" />
              </svg>
            </div>
          </div>

          <div className="bg-emerald-200 p-5 rounded-lg flex flex-col row-span-2 max-lg:row-span-1 max-lg:justify-between">
            <h3 className="text-2xl font-bold">Technologies stack</h3>

            <section className="h-full flex flex-col justify-evenly bg-white rounded-lg max-lg:justify-center max-lg:size-full max-md:h-25 border-1 max-xs:p-3">
              <div className="lg:hidden max-lg:flex max-lg:flex-wrap max-lg:justify-evenly max-xs:w-auto max-xs:items-center max-xs:h-full max-xs:flex-wrap max-xs:gap-2">
                <img
                  src="/assets/svg/react.svg"
                  alt="React logo"
                  className="lg:hidden w-15 h-15 max-xs:size-10 max-lg:size-12"
                />
                <img
                  src="/assets/svg/javascript.svg"
                  alt="Javascript logo"
                  className="lg:hidden w-15 h-15 max-xs:size-10 max-lg:size-12"
                />
                <img
                  src="/assets/svg/sass.svg"
                  alt="SASS/SCSS logo"
                  className="lg:hidden w-15 h-15 max-xs:size-10 max-lg:size-12"
                />
                <img
                  src="/assets/svg/tailwindcss.svg"
                  alt="Tailwind CSS logo"
                  className="lg:hidden w-15 h-15  max-xs:size-10 max-lg:size-12"
                />
              </div>

              <div className="flex justify-between gap-3 rounded-lg">
                <p
                  className="pl-3 pr-3 text-center font-semibold text-lg self-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
 bg-clip-text text-transparent max-lg:hidden"
                >
                  React
                </p>

                <p className="w-70 max-lg:hidden">
                  Build modern interfaces with Hooks and Router.
                </p>
              </div>

              <div className="flex justify-between items-center gap-3 rounded-lg max-lg:hidden">
                <p
                  className="h-6 pl-3 pr-3 font-semibold text-lg 0 text-center bg-gradient-to-r from-sky-700 via-cyan-400 to-blue-600
border-red-500 bg-clip-text text-transparent"
                >
                  Tailwind
                </p>
                <p className="w-70">
                  Design responsive layouts with utility-first CSS.
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg max-lg:hidden">
                <p
                  className="pl-3 pr-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-600
border-red-500 text-center bg-clip-text text-transparent font-semibold text-lg"
                >
                  JavaScript
                </p>
                <p className=" w-70">
                  Implement interactive features and logic.
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg max-lg:hidden">
                <p
                  className="pl-3 pr-3 bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-600
 border-red-500 rounded-full text-center bg-clip-text text-transparent font-semibold"
                >
                  SASS/SCSS
                </p>

                <p className=" w-70 max-lg:hidden">
                  Write clean, reusable styles with nesting and variables.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-lg max-lg:hidden">
                <p
                  className="pl-3 pr-3 font-semibold bg-gradient-to-r
from-blue-800
via-purple-500
to-slate-800
bg-clip-text
text-transparent text-lg"
                >
                  Work Organization
                </p>

                <p>
                  Prioritize tasks, structure projects, and manage deadlines.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-lg max-lg:hidden">
                <p className="pl-3 font-semibold bg-gradient-to-r from-green-700 via-teal-700 to-emerald-400 bg-clip-text text-transparent text-lg">
                  Collaborative spirit
                </p>

                <p>Contribute actively within a team environment.</p>
              </div>
            </section>
          </div>

          <div className="bg-amber-200 p-5 rounded-lg flex max-md:justify-around">
            <p className="font-medium text-lg flex flex-col items-center max-lg:text-base max-xs:overflow-auto max-xl:overflow-scroll">
              <span className="text-2xl font-bold w-full">Goal</span>
              My goal is to contribute to meaningful projects that are
              functional and useful for real users. I know I’m still at a junior
              level, but I’m committed to giving my best and growing until this
              becomes a true career.
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-target-icon lucide-target max-lg:hidden max-md:block max-xs:size-10"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
          </div>

          <div className="bg-slate-700 col-start-2 row-span-2 p-5 rounded-lg grid grid-rows-3 grid-cols-2 gap-3 max-lg:row-start-3 max-lg:col-span-3 max-lg:flex max-md:flex max-md:flex-col">
            <p className="font-medium text-lg col-span-3 text-white max-lg:hidden max-md:block ">
              Here's a glimpse of what I do when I'm not glued to the screen.
              Stepping away from coding helps me recharge, stay creative, and
              keep a balanced mindset.
            </p>

            <div className="bg-slate-100 rounded-lg col-start-1 flex flex-col justify-center items-center max-md:h-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-gamepad2-icon lucide-gamepad-2 max-xs:size-10"
              >
                <line x1="6" x2="10" y1="11" y2="11" />
                <line x1="8" x2="8" y1="9" y2="13" />
                <line x1="15" x2="15.01" y1="12" y2="12" />
                <line x1="18" x2="18.01" y1="10" y2="10" />
                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
              </svg>
              <p className="text-center text-sm max-md:text-base">
                Playing video games keeps me challenged and entertained.
              </p>
            </div>
            <div className="bg-slate-100 rounded-lg col-start-2 flex flex-col justify-center items-center max-md:h-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-footprints-icon lucide-footprints max-xs:size-10"
              >
                <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
                <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
                <path d="M16 17h4" />
                <path d="M4 13h4" />
              </svg>
              <p className="text-center text-sm max-md:text-base">
                Going for a walk helps me disconnect and recharge.
              </p>
            </div>

            <div className="bg-slate-100 rounded-lg col-start-1 flex flex-col justify-center items-center max-md:h-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-library-big-icon lucide-library-big max-xs:size-10"
              >
                <rect width="8" height="18" x="3" y="3" rx="1" />
                <path d="M7 3v18" />
                <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
              </svg>
              <p className="text-center text-sm max-md:text-base">
                I love discovering new topics or trying new skills.
              </p>
            </div>

            <div className="bg-slate-100 rounded-lg col-start-2 flex flex-col justify-center items-center max-md:h-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pen-line-icon lucide-pen-line max-xs:size-10"
              >
                <path d="M13 21h8" />
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
              </svg>
              <p className="text-center text-sm max-md:text-base">
                Writing helps me sharpen my expression and creativity.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 rounded-lg p-5 flex flex-col max-lg:justify-between">
            <div className="flex">
              <h3 className="text-2xl text-black font-bold">Current status</h3>
              <div className="animate-pulse w-2 h-2 rounded-lg bg-lime-600"></div>
            </div>

            <p className="text-black text-lg font-medium max-lg:text-base max-md:h-auto max-lg:h-40">
              I’m currently looking for a junior front-end developer role where
              I can grow, contribute to real projects, and build user-friendly
              solutions with a team.
            </p>

            <div className="flex self-end max-xs:w-full">
              <button
                className="rounded-lg w-30 pt-2 pb-2 mt-2 bg-slate-800 text-white cursor-pointer hover:bg-slate-500 font-semibold max-xs:w-full"
                onClick={() => navigate("/contact")}
              >
                Let's connect
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-red-100 rounded-lg p-5">
            <p className="flex flex-col font-medium text-lg font-medium max-lg:text-base">
              <span className="text-2xl font-bold w-full">Projects</span>I
              strive to stay consistent by updating and improving my personal
              projects. My latest work: MemoCode - a web application to store
              personal notes.
            </p>
            <div className="flex justify-end max-xs:w-full">
              <button
                onClick={() => navigate("/projects")}
                className="rounded-lg w-30 pt-2 pb-2 mt-2 bg-slate-800 text-white cursor-pointer hover:bg-slate-500 font-semibold max-xs:w-full"
              >
                See projects
              </button>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default About;
