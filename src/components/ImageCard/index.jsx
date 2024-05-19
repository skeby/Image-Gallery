import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Loader from "../Loader";
import ImageTag from "../ImageTag";
import "./style.css";

const ImageCard = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
    transform,
    transition,
  } = useSortable({ id: image.id });

  const style = {
    ...attributes.style,
    transition,
    transform: CSS.Transform.toString(transform),
    zIndex: isDragging ? 1 : 0,
    boxShadow: !isLoading ? "0 0 1px 1px rgba(0, 0, 0, 0.2)" : undefined,
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const delay = 0; // Delay in milliseconds

    // Simulate the image loading process
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setIsLoading(false);
    }, delay);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="image-card"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={image.id}
      image={image}
    >
      {isLoading && (
        <div className="image-loader">
          <Loader />
        </div>
      )}
      {isLoaded && (
        <img
          src={image.url}
          alt={image.tag}
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={handleImageLoad}
        ></img>
      )}

      <div
        className="image-tag-container"
        style={{ display: isLoading ? "none" : "flex" }}
      >
        {image.tags.slice(0, 3).map((tag, index) => {
          return (
            <div key={index}>
              <ImageTag tag={tag} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCard;
