const MainLayout = () => {
  return (
    <>
      <section className="min-h-lvh grid grid-cols-3 grid-rows-3 p-5 gap-2 bg-blue-950">
        <div className="bg-blue-100 grid row-span-2 rounded-lg">box 1</div>
        <div className="bg-blue-100 grid col-span-2 rounded-lg">box 2</div>
        <div className="bg-blue-100 grid rounded-lg">box 3</div>
        <div className="bg-blue-100 grid row-span-2 rounded-lg">box 4</div>
        <div className="bg-blue-100 grid col-span-2 rounded-lg">box 5</div>
      </section>
    </>
  );
};

export default MainLayout;
