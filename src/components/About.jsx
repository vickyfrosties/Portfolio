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
              finally discovered what drives me the most:
              <span className="bg-pink-500"> creating</span>.
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
              alt="A Slackline Walker is an athlete who balances and walks on a narrow, flexible piece of webbing tensioned between two anchors, often performing tricks or stunts."
            />
          </div>
        </div>

        <div className="bg-rose-400 p-5 rounded-lg flex flex-col justify-evenly h-70">
          <div class="flex items-center gap-3">
            <img src="/assets/svg/react.svg" alt="React" class="w-8 h-8" />
            <p className="font-semibold text-xl">
              <strong>React</strong> – building modern interfaces with Hooks and
              Router
            </p>
          </div>
          <div class="flex items-center gap-3">
            <img
              src="/assets/svg/tailwindcss.svg"
              alt="Tailwind"
              class="w-8 h-8"
            />
            <p>
              <strong>Tailwind CSS</strong> – creating fast, responsive layouts
            </p>
          </div>
          <div class="flex items-center gap-3">
            <img
              src="/assets/svg/javascript.svg"
              alt="JavaScript"
              class="w-8 h-8"
            />
            <p>
              <strong>JavaScript</strong> – creating fast, responsive layouts
            </p>
          </div>
          <div class="flex items-center gap-3">
            <img src="/assets/svg/sass.svg" alt="SASS" class="w-8 h-8" />
            <p>
              <strong>SCSS/SASS</strong> – creating fast, responsive layouts
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
