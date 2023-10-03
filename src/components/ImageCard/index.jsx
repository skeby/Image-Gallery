import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Loader from "../Loader";
import ImageTag from "../ImageTag";
import "./style.css";
import { useEffect } from "react";

const ImageCard = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const style = {
    ...attributes.style,
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const delay = 1000; // Delay in milliseconds

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
