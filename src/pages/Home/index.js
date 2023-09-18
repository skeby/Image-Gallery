import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../../components/Navbar";

import "./style.css";
import Loader from "../../components/Loader";
import ImageCard from "../../components/ImageCard";
import fetchImages from "../../services/ApiClient";

const Home = () => {
  const { isLoading } = useAuth0();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="auth-loader">
        <Loader />
      </div>
    );
  }

  const renderImages = () => {
    return images.map((image) => <ImageCard key={image.id} image={image} />);
  };

  return (
    <div>
      <Navbar />
      <span className="description">
        Welcome to our interactive image gallery. Explore a stunning collection
        of images and unleash your creativity by rearranging them with a simple
        drag-and-drop. Customize your visual experience and create captivating
        arrangements effortlessly. Join us and discover the joy of interactive
        image shuffling today!
      </span>
      <div className="image-cards">
        {renderImages()}
      </div>
    </div>
  );
};

export default Home;
