import "../../../App.css";
import "../../../variables.css";

const MenuItem = ({ item, onClick }) => {


    return (
        <>
            <div className="item" onClick={onClick}>
                <p>{item.title}</p>
            </div>
        </>
    );
};

export default MenuItem;