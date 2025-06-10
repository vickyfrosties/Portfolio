const NavBar = () => {
  return (
    <>
      <nav className="bg-blue-50 rounded-full w-2/5 m-auto flex justify-center mt-4">
        <ul className="w-80 flex justify-between items-center pt-2 pb-2">
          <li className="pl-5 pr-5">Accueil</li>
          <li className="pl-5 pr-5">Projets</li>
          <li className="pl-5 pr-5">À propos</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
