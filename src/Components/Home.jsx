import "../App.css";
import "../variables.css";

const Home = () => {

  return (
    <>
      <div className="title-container">
        <h1>Sounia Mhalla Dit Aounallah</h1>
      </div>
      <div className="gif-container">
        <img src="/Pictures/gif-compressed.gif" alt="Gif that represents myself in an combinaison of 4 pictures that changes every second."
          onMouseOver={e => (e.currentTarget.src = "../Pictures/gif-variant.gif")}
          onMouseOut={e => (e.currentTarget.src = "../Pictures/gif-compressed.gif")}
        />
        <legend>Front End Developer & massive design fan.</legend>
      </div>

    </>
  );
};

export default Home;