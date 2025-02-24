import axios from "axios";

const request = async (url: string, method: string, data?: any) => {
  try {
    const response = await axios({
      url,
      method: method,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};

export default request;
