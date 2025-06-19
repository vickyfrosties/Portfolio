import Slider from "./Slider";

const Home = ({ setMode }) => {
  return (
    <>
      <section className="grid grid-cols-3 max-2xl:grid-cols-2 max-md:flex flex-col min-h-lvh grid-rows-3 p-5 gap-10 w-full">
        <div className="bg-blue-100 row-span-2 rounded-lg max-md:h-80">
          <div className="rounded-lg h-full relative">
            <h2 className="text-4xl font-black text-stone-900 absolute ml-5 z-2 top-20">
              Hey!
            </h2>

            <div className="absolute z-1 bottom-25 bg-emerald-500 ml-5 mr-5 max-md:-bottom-5 max-md:p-3 max-md:m-auto ">
              <h1 className="text-5xl font-black text-gray-50 max-md:text-2xl">
                I'm Mhalla Sounia
              </h1>

              <h2 className="text-2xl font-semibold text-gray-50 max-md:text-xl">
                Front End Developer nice to meet you!
              </h2>
            </div>

            <div className="h-185 w-full z-0 absolute bottom-0 max-md:relative max-md:h-80">
              <img
                className="w-full h-full object-cover max-md:object-left"
                src="/assets/Portrait.png"
                alt="Portrait of myself"
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold">ABOUT</h3>
            <p className="text-xl mt-5">
              Hi! I'm Sounia, a junior front-end developer with a passion for
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
              className="rounded-3xl border-1 border-teal-950 w-30 pt-2 pb-2 bg-emerald-500 cursor-pointer hover:bg-green-200 font-semibold"
            >
              See more
            </button>
          </div>
        </div>

        <div className="bg-blue-100 grid rounded-lg p-12 flex flex-row">
          <Slider />
        </div>
        <div className="bg-blue-100 grid rounded-lg p-12">
          <h3 className="text-2xl font-bold">PROJET 1</h3>
          <div>
            <button
              onClick={() => setMode("Projects")}
              className="rounded-3xl border-1 border-teal-950 w-30 pt-2 pb-2 bg-emerald-500 cursor-pointer hover:bg-green-200 font-semibold"
            >
              See more
            </button>
          </div>
        </div>
        <div className="bg-blue-100 grid row-span-2 rounded-lg p-12">
          <h3 className="text-2xl font-bold">PROJET 2</h3>
        </div>
        <div className="bg-blue-100 grid col-span-2 rounded-lg p-12">
          <h3 className="text-2xl font-bold">CONTACT</h3>
          <div>
            <button
              onClick={() => setMode("Contact")}
              className="rounded-3xl border-1 border-teal-950 w-30 pt-2 pb-2 bg-emerald-500 cursor-pointer hover:bg-green-200 font-semibold"
            >
              See more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
