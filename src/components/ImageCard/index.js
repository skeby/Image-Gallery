import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Loader from "../Loader";
import "./style.css";

const ImageCard = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  const style = {
    ...attributes.style,
    transition,
    transform: CSS.Transform.toString(transform),
    zIndex: transform ? 1 : 0,
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={image.id}
      image={image}
    >
      <div className="image-card">
        {isLoading && (
          <div className="image-loader">
            <Loader />
          </div>
        )}
        <img
          src={image.url}
          alt={image.tag}
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={handleImageLoad}
        ></img>
        <span
          className="image-tag"
          style={{ display: isLoading ? "none" : "block" }}
        >
          {image.tag}
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
