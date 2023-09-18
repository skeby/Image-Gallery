import React from "react";

import './style.css'

const ImageCard = ({ image }) => {
    return (
        <div>
            <div className="image-cover">
                <img src={image.urls.regular} alt={image.slug}></img>
            </div>
            {/* {image.tags.map((tag) => (
                <span key={tag.title}>{tag.title}</span>
            ))} */}
        </div>
    );
}

export default ImageCard;