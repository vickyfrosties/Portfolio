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
            <p className="items-center font-semibold text-xl">
              I recently transitioned into web development with a focus on
              front-end, after deciding to take a new direction in my career. I
              finally discovered what drives me the most: creating.
            </p>
          </div>
        </div>

        <div className="bg-amber-200 p-5 rounded-lg row-span-2 flex flex-col justify-between">
          <p className="font-semibold text-xl">
            What excites me is being part of the entire process — from the
            initial idea to the final product. Seeing a project come to life
            step by step is what keeps me motivated.
          </p>
          <div className="flex self-start">
            <img
              className="w-full h-40 object-contain"
              src="/assets/png/coding.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-rose-400 p-5 rounded-lg flex flex-col justify-evenly row-span-2">
          <div class="flex justify-items-start gap-3">
            <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 pl-3 pr-3 text-center self-center bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%] w-20 h-6">
              React
            </p>
            <p>Building modern interfaces with Hooks and Router</p>
          </div>

          <div class="flex justify-items-start gap-3">
            <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 pl-3 pr-3 text-center bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%] w-30">
              Tailwind CSS
            </p>
            <p>Creating fast, responsive layouts</p>
          </div>
          <div class="flex items-center gap-3">
            <p className="rounded-full bg-linear-65 from-purple-500 to-pink-500 pl-3 pr-3 text-center bg-linear-[45deg,#61DAFB_55%,#d7f6fe_100%] w-30">
              JavaScript
            </p>
            <p>Creating fast, responsive layouts</p>
          </div>
          <div class="flex items-center gap-3">
            <p className="bg-linear-[45deg,#CC6699_55%,#B83D7A_100%] border-red-500 rounded-full pl-3 pr-3">
              SASS/SCSS
            </p>
            <p>Creating fast, responsive layouts</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
