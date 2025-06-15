const Home = () => {
  return (
    <>
      <section className="min-h-lvh grid grid-cols-3 grid-rows-3 p-5 gap-5 w-full">
        <div className="bg-blue-100 row-span-2 rounded-lg">
          <div className="rounded-lg h-full relative">
            <h2 className="text-4xl font-black text-stone-900 absolute ml-5 z-2 top-20">
              Hey!
            </h2>

            <div className="absolute z-1 bottom-25 bg-emerald-500 ml-5 mr-5">
              <h1 className="text-5xl font-black text-gray-50">
                I'm Mhalla Sounia
              </h1>

              <h2 className="text-2xl font-semibold text-gray-50">
                Front End Developer nice to meet you!
              </h2>
            </div>

            <div className="h-185 w-full z-0">
              <img
                className="w-full h-full object-cover"
                src="/assets/Portrait.png"
                alt="Portrait of myself"
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-12">
          <div>
            <h3 className="text-2xl font-bold">ABOUT</h3>
            <p className="text-lg mt-5 font-semibold">
              Je me suis réorientée dans le développement front-end car ce qui
              m'encourage c'est de voir une idée de base se construire de bout
              en bout. J'approfondis mes connaissances en React et SCSS/SASS
              pour réaliser des interfaces web fonctionnelles et responsive. Je
              mêle la technique et mon attrait pour la conception visuelle, le
              but c'est de m'amuser.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 grid rounded-lg text-2xl font-bold p-12">
          CAROUSEL
        </div>
        <div className="bg-blue-100 grid rounded-lg text-2xl font-bold p-12">
          PROJET 1
        </div>
        <div className="bg-blue-100 grid row-span-2 rounded-lg text-2xl font-bold p-12">
          PROJET 2
        </div>
        <div className="bg-blue-100 grid col-span-2 rounded-lg text-2xl font-bold p-12">
          CONTACT
        </div>
      </section>
    </>
  );
};

export default Home;
