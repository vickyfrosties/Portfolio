const About = () => {
  return (
    <>
      <section className="h-full grid grid-cols-3 grid-rows-4 p-5 gap-5">
        <div className=" grid gap-y-4">
          <div className="bg-emerald-200 p-5 rounded-lg flex">
            <div className="flex items-center">
              <img
                src="/assets/png/directions.png"
                alt="A Slackline Walker is an athlete who balances and walks on a narrow, flexible piece of webbing tensioned between two anchors, often performing tricks or stunts."
              />
            </div>
            <p className="items-center font-medium text-xl">
              I recently transitioned into web development with a focus on
              front-end, after deciding to take a new direction in my career. I
              finally discovered what drives me the most: creating.
            </p>
          </div>
        </div>

        <div className="bg-amber-200 p-5 rounded-lg row-span-2 flex flex-col justify-between">
          <p className="font-medium text-xl">
            What excites me is being part of the entire process — from the
            initial idea to the final product. Seeing a project come to life
            step by step is what keeps me motivated and I truly believe that it
            is the perfect way to learn.
          </p>
          <div className="flex self-start">
            <img
              className="w-full h-40 object-contain"
              src="/assets/png/coding.png"
              alt=""
            />
          </div>
        </div>

        <div className="p-5 rounded-lg flex flex-col justify-evenly row-span-2">
          <h3 className="text-2xl font-bold mb-4">Technologies stack</h3>
          <div className="flex justify-between gap-3">
            <div className="w-55">
              <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 text-center self-center bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%]">
                React
              </p>
            </div>

            <p>
              Build modern interfaces with Hooks and Router. Manage states and
              use props.
            </p>
          </div>

          <div className="flex justify-between gap-3">
            <div className="w-55">
              <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 text-center bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%]">
                Tailwind
              </p>
            </div>

            <p>Creating accessible and responsive layouts</p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="w-65">
              <p className="bg-linear-[45deg,#F7DF1E_55%,#FEF9D8_100%] border-red-500 rounded-full text-center">
                JavaScript
              </p>
            </div>
            <p>Implement logical functions and interactive interface.</p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="w-55">
              <p className="bg-linear-[45deg,#CC6699_55%,#B83D7A_100%] border-red-500 rounded-full text-center">
                SASS/SCSS
              </p>
            </div>

            <p>Creating accessible and responsive layouts.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-55">
              <p className="bg-blue-400 border-red-500 rounded-full text-center">
                Work Organization
              </p>
            </div>

            <p>Creating accessible and responsive layouts.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-55">
              <p className="bg-pink-300 border-red-500 rounded-full text-center">
                Collaborative spirit
              </p>
            </div>

            <p>Creating accessible and responsive layouts.</p>
          </div>
        </div>

        <div className="bg-blue-300 row-start-3 row-span-2 p-5 rounded-lg ">
          <h3 className="text-2xl font-bold mb-2">My goal</h3>
          <p className="font-medium text-lg">
            The most important part for me, is to actively contribute to
            professional projects — making them ready, functional, and useful
            for real users. I’m fully aware of my current junior level, but I’m
            committed to giving my best every day. My goal is to keep growing
            until this becomes not just a job, but a true career.
          </p>
        </div>
        <div className="bg-blue-300 col-start-2 row-span-2 p-5 rounded-lg">
          <p className="font-medium text-lg">
            Here's a glimpse of how I spend my free time when I'm not glued to
            the screen.
          </p>
          <section className="flex flex-wrap gap-2 items-center h-50">
            <div className="w-50 border-1 border-emerald-100">
              <p>pic 1</p>
            </div>
            <div className="w-50 border-1 border-emerald-100">
              <p>pic 2</p>
            </div>
            <div className="w-50 border-1 border-emerald-100">
              <p>pic 3</p>
            </div>
            <div className="w-50 border-1 border-emerald-100">
              <p>pic 4</p>
            </div>
          </section>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default About;
