import { useNavigate } from "react-router";
import Slider from "./Slider";
import Footer from "./Footer";

const Home = ({ className }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="border-b-1 border-b-slate-500">
        <section className="grid grid-cols-3 max-2xl:grid-cols-3 max-2xl:grid-rows-2 2xl:bg-red-500 2xl:grid-rows-2 max-2xl:h-full flex-col min-h-lvh grid-rows-3 p-5 gap-10 w-full max-lg:gap-5 max-md:border-1 max-md:grid-cols-2 ">
          <div className="bg-amber-200 row-span-2 rounded-lg max-2xl:row-start-1 max-2xl:row-end-3 2xl:bg-blue-500 2xl:row-span-2 max-lg:row-span-1 min-h-[250px]">
            <div className="rounded-lg h-full relative">
              <h2 className="text-4xl font-black text-stone-900 absolute ml-5 z-2 top-20 max-2xl:hidden">
                Hey!
              </h2>

              <div className="absolute z-1 bottom-25 ml-5 mr-5 max-md:-bottom-5 max-md:p-3 max-md:m-auto max-2xl:left-80 max-2xl:static max-2xl:pt-5">
                <h1 className="text-4xl font-bold max-md:text-2xl max-lg:text-2xl">
                  I'm Mhalla Sounia,
                </h1>

                <h2 className="text-2xl font-bold max-md:text-xl max-lg:text-xl">
                  a
                  <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-600 ml-2 bg-clip-text text-transparent mr-2 max-lg:text-xl">
                    Junior Front-End Developer
                  </span>
                  nice to meet you!
                </h2>
              </div>

              <div className="h-185 w-full z-0 absolute bottom-0 max-md:relative max-md:h-80 max-2xl:h-full max-lg:h-80 max-md:flex max-md:justify-center">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/png/Portrait.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-emerald-200 rounded-lg p-12 flex flex-col justify-between max-2xl:col-start-2 max-2xl:row-start-1 max-2xl:row-end-3 max-2xl:p-7 max-lg:row-span-1 max-md:min-h-64">
            <div>
              <h3 className="text-2xl font-bold">ABOUT</h3>
              <p className="text-xl mt-5">
                I'm passionate about creating web interfaces. I discovered
                front-end development about a year ago - and I instantly loved
                it.
              </p>
              <p className="text-xl mt-5 max-lg:hidden">
                Today, I design and build web interfaces that feeds my learning,
                spark my creativity, and challenge me to grow. My world? A mix
                of creativity, curiosity and a constant desire to improve.
              </p>
            </div>

            <div className="flex w-full justify-end">
              <button
                onClick={() => navigate("/about")}
                className="rounded-lg w-30 pt-2 pb-2 mt-2 bg-slate-800 text-white cursor-pointer hover:bg-slate-500 font-semibold"
              >
                Learn more
              </button>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-12 flex flex-col justify-center items-center overflow-hidden max-md:min-h-64">
            <Slider />
          </div>

          <div className="bg-amber-200 grid row-span-2 rounded-lg p-12 max-2xl:col-start-3 max-2xl:p-7 max-lg:col-start-1 max-md:col-start-2 max-md:row-span-1 max-md:min-h-64">
            <h3 className="text-2xl font-bold h-10">PROJECTS</h3>

            <div className="flex flex-col justify-between h-90">
              <p className="text-xl">
                Most of my projects are full-stack applications that I keep
                improving over time. I enjoy revisiting them to add new
                features, refine the code, and apply what I learn along the way.
              </p>

              <p className="text-xl h-30 max-lg:hidden">
                This helps me build more complete and long-lasting projects
                while I keep strengthening my skills.
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => navigate("/projects")}
                  className="rounded-lg w-30 pt-2 pb-2 bg-slate-800 text-white cursor-pointer hover:bg-slate-500 font-semibold"
                >
                  See projects
                </button>
              </div>
            </div>
          </div>

          <div className="bg-orange-800 grid col-span-2 rounded-lg p-12 max-2xl:p-7 max-lg:h-1/2 max-lg:flex max-lg:flex-col max-lg:justify-between max-md:min-h-64 max-md:justify-between">
            <h3 className="text-2xl text-white font-bold">CONTACT</h3>
            <section className="flex w-full justify-between max-md:justify-between">
              <div
                className="flex flex-col justify-center items-center w-50 "
                role="link"
              >
                <a
                  href="https://linkedin.com/in/mhalla-sounia"
                  target="_blank"
                  className="bg-slate-200 rounded-lg p-2 flex flex-col justify-center items-center max-md:h-30 max-md:w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                    alt="LinkedIn profile"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <p className="text-center w-full pt-2">
                    Find me on LinkedIn.
                  </p>
                </a>
              </div>

              <div
                className="flex flex-col justify-center items-center w-50 "
                role="link"
              >
                <a
                  href="mailto:sounia.mhalla@hotmail.com"
                  className="bg-slate-200 rounded-lg p-2 flex flex-col justify-center items-center max-md:h-30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail-icon lucide-mail"
                    alt="Email"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <p className="text-center w-full pt-2">
                    Feel free to reach out.
                  </p>
                </a>
              </div>

              <div className="flex flex-col justify-center items-center w-50 ">
                <a
                  href="https://github.com/vickyfrosties?tab=repositories"
                  target="_blank"
                  className="bg-slate-200 rounded-lg p-2 flex flex-col justify-center items-center max-md:h-30"
                  role="link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github-icon lucide-github"
                    alt="GitHub profile"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <p className="text-center w-full">
                    Check out my GitHub profile.
                  </p>
                </a>
              </div>
            </section>
          </div>
        </section>
      </section>
      <Footer className="max-lg:-bottom-37 max-md:-bottom-117 max-md:left-2/3" />
    </>
  );
};

export default Home;
