import '../../App.css';
import "../../variables.css";
import { Element } from "react-scroll";
import MenuList from './Menu/MenuList';


const About = () => {

  return (
    <>
      <Element className="container-about" name="About me">
        <h2>About me</h2>
        <MenuList />
      </Element>
    </>
  );
};

export default About;