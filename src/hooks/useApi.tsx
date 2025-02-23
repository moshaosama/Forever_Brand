import axios from "axios";

const request = async (url: string, method: string = "GET", data?: any) => {
  try {
    const response = await axios({
      url,
      method,
      data: method !== "GET" ? data : undefined, // لا تحتاج `body` مع GET
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
