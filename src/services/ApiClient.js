import axios from "axios";

const fetchImages = async () => {
    const API_URL = "https://api.unsplash.com";
    let images;
    try {
        const { data } = await axios.get(`${API_URL}/photos/random`, {
          params: {
            client_id: 'FogKiU1nSLt5TVXW9-tWiWyRhAaPjKW7XDhUOJLBNWA',
            count: 30
          },
        });
        images = data;

    } catch (error){
        console.log(error);
    }

    return images;
};

export default fetchImages;
