const MenuDetail = ({ message, showImage, imageUrl }) => {

    return (
        <>
            <div className="portrait">
                {showImage && <img src={imageUrl} alt="Self portrait" />}
                <p>
                    {message}
                </p>
            </div>
        </>
    );
};

export default MenuDetail;