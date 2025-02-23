import axios from "axios";

const useAxios = async (url: string, data?: any) => {
  try {
    const response = await axios.get(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default useAxios;
