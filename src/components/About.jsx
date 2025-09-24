const About = ({ setMode }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setMode("Contact");
  };
  return (
    <>
      <section className="h-full grid grid-cols-3 grid-rows-3 p-5 gap-5">
        <div className=" grid gap-y-4">
          <div className="bg-emerald-200 p-5 rounded-lg flex">
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
                class="lucide lucide-signpost-big-icon lucide-signpost-big"
              >
                <path d="M10 9H4L2 7l2-2h6" />
                <path d="M14 5h6l2 2-2 2h-6" />
                <path d="M10 22V4a2 2 0 1 1 4 0v18" />
                <path d="M8 22h8" />
              </svg>
            </div>
            <p className="flex flex-col items-center font-medium text-slate-700 text-lg pl-4">
              <span className="text-2xl font-bold w-full">Path</span>I
              transitioned into front-end development after choosing a new
              career path and finally found what drives me most: creating
            </p>
          </div>
        </div>

        <div className="bg-amber-200 p-5 rounded-lg h-full flex">
          <p className="font-medium text-slate-800 text-lg flex flex-col pr-4 justify-between">
            <span className="text-2xl font-bold">Motivation</span>
            What excites me is being part of the entire process — from the
            initial idea to the final product. Seeing a project come to life
            step by step is what keeps me motivated and I truly believe that it
            is the perfect way to learn.
          </p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-medal-icon lucide-medal"
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

        <div className="border-1 p-5 rounded-lg flex flex-col row-span-2">
          <h3 className="text-2xl font-bold">Technologies stack</h3>

          <section className="h-full flex flex-col justify-evenly">
            <div className="flex justify-between gap-3">
              <p
                className="pl-3 pr-3 rounded-full text-center font-semibold text-lg self-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
 bg-clip-text text-transparent"
              >
                React
              </p>

              <p className=" w-70">
                Build modern interfaces with Hooks and Router.
              </p>
            </div>

            <div className="flex justify-between gap-3">
              <p className="h-6 pl-3 pr-3 rounded-full font-semibold text-lg bg-linear-65 from-purple-500 to-pink-500 text-center bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%] bg-clip-text text-transparent">
                Tailwind
              </p>
              <p className="w-70">
                Design responsive layouts with utility-first CSS.
              </p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p
                className="pl-3 pr-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-600
border-red-500 rounded-full text-center bg-clip-text text-transparent font-semibold text-lg"
              >
                JavaScript
              </p>
              <p className=" w-70">Implement interactive features and logic.</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p
                className="pl-3 pr-3 bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-600
 border-red-500 rounded-full text-center bg-clip-text text-transparent font-semibold"
              >
                SASS/SCSS
              </p>

              <p className=" w-70">
                Write clean, reusable styles with nesting and variables.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p
                className="pl-3 pr-3 rounded-full text-center font-semibold bg-gradient-to-tl
from-blue-800
via-lime-300
to-slate-300
bg-clip-text
text-transparent text-lg"
              >
                Work Organization
              </p>

              <p className=" w-70">
                Prioritize tasks, structure projects, and manage deadlines.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="pl-3 pr-3 rounded-full text-center font-semibold bg-gradient-to-tl from-rose-500 via-amber-500 to-yellow-800 bg-clip-text text-transparent text-lg">
                Collaborative spirit
              </p>

              <p className=" w-70">
                Contribute actively within a team environment.
              </p>
            </div>
          </section>
        </div>

        <div className="bg-blue-300 p-5 rounded-lg flex">
          <p className="font-medium text-slate-800 text-lg flex flex-col justify-between">
            <span className="text-2xl font-bold">Goal</span>
            My goal is to contribute to meaningful projects that are functional
            and useful for real users. I know I’m still at a junior level, but
            I’m committed to giving my best and growing until this becomes a
            true career.
          </p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-target-icon lucide-target"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
        </div>

        <div className="bg-blue-300 col-start-2 row-span-2 p-5 rounded-lg grid grid-rows-3 grid-cols-2 gap-3">
          <p className="font-medium text-lg col-span-3">
            Here's a glimpse of what I do when I'm not glued to the screen.
            Stepping away from coding helps me recharge, stay creative, and keep
            a balanced mindset.
          </p>
          <div className="bg-slate-100 rounded-lg col-start-1 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-gamepad2-icon lucide-gamepad-2"
            >
              <line x1="6" x2="10" y1="11" y2="11" />
              <line x1="8" x2="8" y1="9" y2="13" />
              <line x1="15" x2="15.01" y1="12" y2="12" />
              <line x1="18" x2="18.01" y1="10" y2="10" />
              <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
            </svg>
            <p>Play a game.</p>
          </div>
          <div className="bg-slate-100 rounded-lg col-start-2 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-footprints-icon lucide-footprints"
            >
              <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
              <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
              <path d="M16 17h4" />
              <path d="M4 13h4" />
            </svg>
            <p className="text-center">Going for a walk helps me disconnect.</p>
          </div>
          <div className="bg-slate-100 rounded-lg col-start-1 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-library-big-icon lucide-library-big"
            >
              <rect width="8" height="18" x="3" y="3" rx="1" />
              <path d="M7 3v18" />
              <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
            </svg>
            <p className="text-center">
              I really love discover new topics or try a new skill.
            </p>
          </div>
          <div className="bg-slate-100 rounded-lg col-start-2 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-pen-line-icon lucide-pen-line"
            >
              <path d="M13 21h8" />
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            </svg>
            <p className="text-center">
              Write helps me sharpen my expression and creativity.
            </p>
          </div>
        </div>

        <div className="bg-amber-950 rounded-lg p-5 flex flex-col justify-between">
          <div className="flex">
            <h3 className="text-2xl font-bold mb-2 text-slate-200">
              Current status
            </h3>
            <div className="animate-pulse w-2 h-2 rounded-lg bg-lime-600"></div>
          </div>

          <p className="text-slate-200 text-lg">
            I’m currently looking for a junior front-end developer role where I
            can grow, contribute to real projects, and build user-friendly
            solutions with a team.
          </p>

          <div className="flex self-end">
            <button
              className="bg-slate-300 p-2 cursor-pointer rounded-lg"
              onClick={handleClick}
            >
              Let's connect !
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
