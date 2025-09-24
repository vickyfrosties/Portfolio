import Slider from "./Slider";

const Home = ({ setMode }) => {
  return (
    <>
      <section className="grid grid-cols-3 max-2xl:grid-cols-3 max-2xl:grid-rows-2 max-md:flex max-2xl:h-full flex-col min-h-lvh grid-rows-3 p-5 gap-10 w-full">
        <div className="bg-[#C1D1FD] row-span-2 rounded-lg max-md:h-80 max-2xl:row-start-1 max-2xl:row-end-3">
          <div className="rounded-lg h-full relative">
            <h2 className="text-4xl font-black text-stone-900 absolute ml-5 z-2 top-20 max-2xl:hidden">
              Hey!
            </h2>

            <div className="absolute z-1 bottom-25 ml-5 mr-5 max-md:-bottom-5 max-md:p-3 max-md:m-auto max-2xl:left-80 max-2xl:static max-2xl:pt-5">
              <h1 className="text-4xl font-bold max-md:text-2xl">
                I'm Mhalla Sounia,
              </h1>

              <h2 className="text-2xl font-bold max-md:text-xl">
                a
                <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-600 ml-2 bg-clip-text text-transparent mr-2">
                  Junior Front End Developer
                </span>
                nice to meet you!
              </h2>
            </div>

            <div className="h-185 w-full z-0 absolute bottom-0 max-md:relative max-md:h-80 max-2xl:h-full">
              <img
                className="w-full h-full object-cover max-md:object-left"
                src="/assets/png/Portrait.png"
                alt="Portrait of myself"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F9FCD7] rounded-lg p-12 flex flex-col justify-between max-2xl:col-start-2 max-2xl:row-start-1 max-2xl:row-end-3 max-2xl:p-7 ">
          <div>
            <h3 className="text-2xl font-bold">ABOUT</h3>
            <p className="text-xl mt-5">
              I'm Sounia, a junior front-end developer with a passion for
              creating web interfaces. I discovered front-end development about
              a year ago - and I instantly loved it.
            </p>
            <p className="text-xl mt-5">
              Today, I design and build web interfaces that feeds my learning,
              spark my creativity, and challenge me to grow. My world? A mix of
              creativity, curiosity and a constant desire to improve.
            </p>
          </div>

          <div className="flex w-full justify-end">
            <button
              onClick={() => setMode("About")}
              className="rounded-3xl border-1 border-teal-950 w-30 pt-2 pb-2 mt-2 bg-emerald-500 cursor-pointer hover:bg-green-200 font-semibold"
            >
              See more
            </button>
          </div>
        </div>

        <div className="bg-[#C1D1FD] rounded-lg p-12 flex flex-col justify-center items-center overflow-hidden">
          <Slider />
        </div>

        <div className="flex bg-blue-100 grid rounded-lg p-12 max-2xl:hidden">
          <div className="flex">
            <h3 className="text-2xl font-bold mb-2">Current status</h3>
            <div className="animate-pulse w-2 h-2 rounded-lg bg-lime-600"></div>
          </div>

          <div>
            <button
              onClick={() => setMode("Contact")}
              className="rounded-3xl border-1 border-teal-950 w-30 pt-2 pb-2 bg-emerald-500 cursor-pointer hover:bg-green-200 font-semibold"
            >
              See more
            </button>
          </div>
        </div>
        <div className="bg-[#F9FCD7] grid row-span-2 rounded-lg p-12  max-2xl:col-start-3 max-2xl:p-7">
          <h3 className="text-2xl font-bold h-10">PROJECTS</h3>

          <div className="flex flex-col justify-between h-90">
            <p className="text-xl">
              As of right now, I design and build web interfaces that feeds my
              learning, spark my creativity, and challenge me to grow. My world?
              A mix of creativity, curiosity and a constant desire to improve.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setMode("Projects")}
                className="rounded-3xl border-1 border-teal-950 w-30 pt-2 pb-2 bg-emerald-500 cursor-pointer hover:bg-green-200 font-semibold"
              >
                See more
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#C1D1FD] grid col-span-2 rounded-lg p-12 max-2xl:p-7">
          <h3 className="text-2xl font-bold">CONTACT</h3>
          <p>Let's connect!</p>
          <section className="flex w-full justify-around">
            <div className="flex justify-center items-center">
              <a href="https://linkedin.com/in/mhalla-sounia" target="_blank">
                <img
                  className="size-30"
                  src="/assets/png/text.png"
                  alt="@Mhalla Sounia on LinkedIn"
                />
              </a>
            </div>

            <div className="flex justify-center items-center">
              <a href="mailto:sounia.mhalla@hotmail.com">
                <img
                  className="size-30"
                  src="/assets/png/mail.png"
                  alt="mailto:sounia.mhalla@hotmail.com"
                />
              </a>
            </div>

            <div className="flex justify-center items-center">
              <a href="https://github.com/vickyfrosties" target="_blank">
                <img
                  className="size-30"
                  src="/assets/png/github.png"
                  alt="https://github.com/vickyfrosties"
                />
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
