import axios from "axios";

const loadShows = async (
  query: string,
  errorHandler: (error: string) => void
) => {
  errorHandler("");
  try {
    const res = await axios.get("https://api.tvmaze.com/search/shows", {
      params: {
        q: query,
      },
    });
    return res.data;
  } catch (e) {
    errorHandler("Ooops... Something goes wrong. Try later.");
  }
};

export default loadShows;
