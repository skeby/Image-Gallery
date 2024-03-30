import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import fetchImages from "../services/ApiClient";

const useImages = (query) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedImages = await fetchImages(query);
        const filteredImages = fetchedImages
          ? fetchedImages.filter((image) => {
              return (
                query === "" || image.tags.some((tag) => tag.includes(query))
              );
            })
          : [];
        setImages(filteredImages);
      } catch (error) {
        toast.error("An error occured while fetching images");
      }
    };
    fetchData();
  }, [query]);

  useEffect(() => {
    if (images.length === 0 && query !== "") {
      toast.error("No images found");
    }
  }, [images.length, query]);

  return { images, setImages };
};

export default useImages;
