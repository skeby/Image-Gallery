import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Utils from "../utils";
import { QUERY_SET } from "../static";

const fetchImages = async (query) => {
  const API_URL = "https://api.unsplash.com";
  const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const count = 30;
  let images;

  try {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/search/photos`, {
      params: {
        client_id: ACCESS_KEY,
        query: query || QUERY_SET[Math.floor(Math.random() * QUERY_SET.length)],
        per_page: count,
      },
    });
    images = results.map((image) => ({
      id: image.id,
      url: image.urls.regular,
      tags: image.tags.flatMap((tag) => {
        const trimmedTag = Utils.removePunctuations(
          tag.title.trim().toLowerCase()
        );
        return trimmedTag.split(" ");
      }),
    }));
  } catch (error) {
    toast.error("An error occured while fetching images");
    console.error("Error fetching images", error);
  }

  return images;
};

export default fetchImages;
