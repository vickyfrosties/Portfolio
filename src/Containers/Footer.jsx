import "../App.css";
import "../variables.css";


const Footer = () => {

  const LINKEDIN_LINK = "https://www.linkedin.com/in/sounia-mhalla-dit-aounallah/";
  const GITHUB_LINK = "https://github.com/vickyfrosties";
  const TODAY = new Date();
  const TODAY_YEAR = TODAY.getFullYear();

  return (
    <>
      <footer className="footer">
        <div>
          <p>{TODAY_YEAR} - Sounia Mhalla</p>
        </div>
        <div>
          <a href={LINKEDIN_LINK} target="_blank">
            <img src="./Icons/linkedin.svg" alt="LinkedIn logo linked to my LinkedIn profile page." />
          </a>

          <a href={GITHUB_LINK} target="_blank">
            <img src="./Icons/github.svg" alt="Github logo linked to my Github profile page." />
          </a>

        </div>
      </footer>
    </>
  );
};

export default Footer;