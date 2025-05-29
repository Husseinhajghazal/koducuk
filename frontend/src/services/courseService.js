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
      return {
        success: true,
        message: response.data.message,
        data: response.data.data[0],
      };
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      if (errorMessage === "Bu kursa daha önceden katılmışsınızdır.") {
        return {
          success: true,
          alreadyEnrolled: true,
          courseId,
        };
      }
      throw {
        success: false,
        message: errorMessage || "Kursa katılırken bir hata oluştu",
      };
    }
  },

  getUserCourses: async () => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    try {
      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        success: true,
        message: response.data.message,
        data: response.data.data,
      };
    } catch (error) {
      throw {
        success: false,
        message:
          error.response?.data?.message ||
          "Kurslar yüklenirken bir hata oluştu",
      };
    }
  },
};
