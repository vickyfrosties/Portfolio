const MainLayout = () => {
  return (
    <>
      <section className="min-h-lvh grid grid-cols-3 grid-rows-3 p-5 gap-2 w-full">
        <div className="bg-blue-100 grid row-span-2 rounded-lg">
          <div className="rounded-lg h-full relative">
            <div className="absolute z-1 bottom-25 bg-emerald-500 ml-5 mr-5">
              <h1 className="text-5xl font-black text-gray-50">
                Hey, I'm Mhalla Sounia
              </h1>
              <h2 className="text-2xl font-semibold text-gray-50">
                DÉVELOPPEUSE FRONT-END
              </h2>
            </div>

            <div className="h-185 w-full z-0">
              <img
                className="w-full h-full object-cover"
                src="/public/assets/Portrait.png"
                alt="Portrait of myself"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-100 grid col-span-2 rounded-lg"></div>
        <div className="bg-blue-100 grid rounded-lg">box 3</div>
        <div className="bg-blue-100 grid row-span-2 rounded-lg">box 4</div>
        <div className="bg-blue-100 grid col-span-2 rounded-lg">box 5</div>
      </section>
    </>
  );
};

export default MainLayout;
