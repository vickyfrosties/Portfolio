import "../../../App.css";
import "../../../variables.css";

const MenuItem = ({ title, onClick }) => {


    return (
        <>
            <section className="items-container">
                <div className="item" onClick={onClick}>
                    <p>{title}</p>
                </div>
            </section>
        </>
    );
};

export default MenuItem;