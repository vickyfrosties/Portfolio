import "../../../App.css";
import "../../../variables.css";

const MenuItem = ({ item, onClick }) => {


    return (
        <>
            <div className="items-container">
                <div className="item" onClick={onClick}>
                    <p>{item.title}</p>
                </div>
            </div>
        </>
    );
};

export default MenuItem;