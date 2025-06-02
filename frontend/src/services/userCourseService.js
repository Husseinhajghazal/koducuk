import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL + "/api/user-course";

export const userCourseService = {
  enrollCourse: async (courseId) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.post(
      baseURL,
      { course_id: courseId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      message: response.data.message,
      data: response.data.data[0],
    };
  },
  isSubscribed: async (courseId) => {
    const token = localStorage.getItem("token");
    if (!token) return { data: false };

    try {
      const response = await axios.get(`${baseURL}/is-subscribed/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        message: response.data.message,
        data: response.data.data[0],
      };
    } catch (error) {
      console.error("Error checking subscription:", error);
      return { data: false };
    }
  },
  updateUserCourse: async (courseId, data) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.put(`${baseURL}/${courseId}`, data, {
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
