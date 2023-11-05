import axios from "axios";


const URL_SPACE = import.meta.env.VITE_URL_SPACE;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const useFetchData = async (query) => {
  
  try {
    let response = null;

    const { status, data } = await axios.post(URL_SPACE, JSON.stringify({ query }), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      }
    });

    response = [ status, data ];

    return response;
  } catch (error) {
    throw new Error(error);
  }
};