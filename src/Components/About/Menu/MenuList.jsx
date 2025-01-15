import { useState } from "react";
import "../../../App.css";
import "../../../variables.css";
import MenuDetail from "./MenuDetail";
import MenuItem from "./MenuItem";

const MenuList = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const details = [
        {
            id: 1, title: "Who am I?", content: "I am a young front-end developer currently in a training to make my passion my work.", source: "../../../../public/Pictures/portrait.png"
        },
        {
            id: 2, title: "Where am I coming from?", content: "I live in Belgium in Brussels."
        },
        {
            id: 3, title: "How did I land here?", content: "I was in my Tourism and Leisure Management bachelor when I understood that it was not something that I did liked and was passion about. I've started then to looking towards new horizons when I found this front-end training and started to look deep into it. I just felt that it was something that I could have control on and see the result instantly."
        },
        {
            id: 4, title: "What are the technical skills that I work with ?", content: "My work is essentially coded with React. I feel comfortable using HTML/CSS and JavaScript."
        },];

    return (
        <>
            <section className="menu-list">
                <div className="under-menu-list">
                    {details.map(item => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            onClick={() => setSelectedItem(item)}
                        />
                    ))}
                </div>
                <div className="detail">
                    {selectedItem &&
                        <MenuDetail
                            message={selectedItem.content}
                            showImage={selectedItem.id === 1}
                            imageUrl="../../../../public/Pictures/portrait_bis.png"
                        />}
                </div>
            </section>
        </>
    );
};

export default MenuList;