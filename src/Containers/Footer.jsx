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
      </footer>
    </>
  );
};

export default Footer;