import "../App.css";
import "../variables.css";
import { Link, Element } from "react-scroll";

const Header = () => {

    return (
        <>
            <Element name="Header">
                <header>
                    <nav>
                        <ul className="header-container">
                            <li>
                                <Link to="Header">Portfolio</Link>
                            </li>
                            <div className="inheader-container">
                                <li><Link smooth={true} duration={500} to="Projects">Projects</Link></li>
                                <li><Link smooth={true} duration={800} to="About me">About me</Link></li>
                                <li><Link smooth={true} duration={1000} to="Contact">Contact</Link></li>
                            </div>
                        </ul>
                    </nav>
                </header>
            </Element>

        </>
    );
};

export default Header;