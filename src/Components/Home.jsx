import "../App.css";
import "../variables.css";

const Home = () => {

  return (
    <>
      <div className="title-container">
        <h1>Sounia Mhalla Dit Aounallah</h1>
      </div>
      <div className="gif-container">
        <img src="./Pictures/gif-normal.gif" alt=""
          onMouseOver={e => (e.currentTarget.src = "./Pictures/gif-hover.gif")}
          onMouseOut={e => (e.currentTarget.src = "./Pictures/gif-normal.gif")}
        />
        <legend>Front End Developer & massive design fan.</legend>
      </div>

    </>
  );
};

export default Home;