import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useDebounce from "./useDebounce";

import fetchImages from "../services/ApiClient";

const useImages = (query) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedImages = await fetchImages(debouncedQuery);
        const filteredImages = fetchedImages
          ? fetchedImages.filter((image) => {
              return (
                debouncedQuery === "" ||
                image.tags.some((tag) => tag.includes(debouncedQuery))
              );
            })
          : [];
        setImages(filteredImages);
      } catch (error) {
        toast.error("An error occured while fetching images");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [debouncedQuery]);

  useEffect(() => {
    if (images.length === 0 && debouncedQuery !== "") {
      toast.error("No images found");
    }
  }, [images.length, debouncedQuery]);

  return { images, setImages, isLoading };
};

export default useImages;
