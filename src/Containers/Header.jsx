import "/Users/s.mhalla/Desktop/Portfolio/src/App.css";
import "../variables.css";

const Header = () => {

    return (
        <>
            <ul className="header-container">
                <li>Portfolio</li>
                <div className="inheader-container">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </div>
            </ul>
        </>
    );
};

export default Header;