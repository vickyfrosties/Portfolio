import "../App.css";
import "../variables.css";
import { Link, Element } from "react-scroll";
import Projects from "../Components/Projects";

const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <ul className="header-container">
                        <li><Link to="Header">Portfolio
                        </Link>
                        </li>
                        <div className="inheader-container">
                            <li><Link to="Projects">Projects</Link></li>
                            <li><Link to="About me">About me</Link> </li>
                            <li><Link to="Contact">Contact</Link></li>
                        </div>
                    </ul>
                </nav>
            </header>

        </>
    );
};

export default Header;