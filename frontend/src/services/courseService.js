import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL + "/api/user-course";

export const courseService = {
  enrollCourse: async (courseId) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    try {
      const response = await axios.post(
        baseURL,
        { course_id: courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (
        error.response?.data?.message ===
        "Bu kursa daha önceden katılmışsınızdır."
      ) {
        return { alreadyEnrolled: true, courseId };
      }
      throw error;
    }
  },
};
