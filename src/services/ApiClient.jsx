import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchImages = async () => {
  const API_URL = "https://api.unsplash.com";
  const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const QUERY = "random";
  const count = 30;
  let images;

  try {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/search/photos`, {
      params: {
        client_id: ACCESS_KEY,
        query: QUERY,
        per_page: count,
      },
    });
    images = results.map((image) => ({
      id: image.id,
      url: image.urls.regular,
      tags: image.tags.map((tag) => tag.title),
    }));
  } catch (error) {
    toast.error(error);
  }

  return images;
};

export default fetchImages;
