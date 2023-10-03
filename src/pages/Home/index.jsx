import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import ImageCard from "../../components/ImageCard";
import fetchImages from "../../services/ApiClient";
import "./style.css";

const Home = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let displayImages = images;

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const fetchData = async () => {
    try {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    } catch (error) {
      toast.error("An error occured while fetching images");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredImages = displayImages
    ? displayImages.filter((image) => {
        return (
          searchQuery === "" ||
          image.tags.some((tag) => tag.includes(searchQuery))
        );
      })
    : [];

  useEffect(() => {
    if (filteredImages.length === 0 && searchQuery !== "") {
      toast.error("No images found");
    }
  }, [filteredImages, searchQuery]);

  if (isLoading) {
    return (
      <div className="auth-loader">
        <Loader />
      </div>
    );
  }

  const onDragEnd = ({ active, over }) => {
    if (!active || !over || active.id === over.id) {
      return;
    }
    setImages((displayImages) => {
      const oldIndex = displayImages.findIndex(
        (image) => image.id === active.id
      );
      const newIndex = displayImages.findIndex((image) => image.id === over.id);
      return arrayMove(displayImages, oldIndex, newIndex);
    });
  };

  const handleDragError = ({ active, over }) => {
    if (!active || !over || active.id === over.id) {
      return;
    }
    toast.error("Log in to use drag and drop");
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <span className="description">
        Welcome to our interactive image gallery. Explore a stunning collection
        of images and unleash your creativity by rearranging them with a simple
        drag-and-drop. Customize your visual experience and create captivating
        arrangements effortlessly. Join us and discover the joy of interactive
        image shuffling today!
      </span>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={isAuthenticated ? onDragEnd : handleDragError}
        sensors={sensors}
      >
        <div className="image-cards">
          <SortableContext items={displayImages} strategy={rectSortingStrategy}>
            {filteredImages.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
      <ToastContainer />
    </div>
  );
};

export default Home;
