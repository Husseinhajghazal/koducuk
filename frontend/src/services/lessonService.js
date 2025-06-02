import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL + "/api/lesson";

const lessonService = {
  getLesson: async (id) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.get(`${baseURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      message: response.data.message,
      data: response.data.data[0],
    };
  },
};

export { lessonService };
