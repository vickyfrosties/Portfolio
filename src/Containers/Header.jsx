import "../App.css";
import "../variables.css";

const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <ul className="header-container">
                        <li>Portfolio</li>
                        <div className="inheader-container">
                            <li>Home</li>
                            <li>Projects</li>
                            <li>About me</li>
                            <li>Contact</li>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;