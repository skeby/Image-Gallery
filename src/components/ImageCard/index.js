import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./style.css";

const ImageCard = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  const style = {
    ...attributes.style,
    transition,
    transform: CSS.Transform.toString(transform),
    zIndex: transform ? 1 : 0,
  };
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div
      className="image-card-container"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={image.id}
      image={image}
    >
      <img
        src={image.url}
        alt={image.tag}
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={handleImageLoad}
      ></img>
      <span>{image.tag}</span>
    </div>
  );
};

export default ImageCard;
