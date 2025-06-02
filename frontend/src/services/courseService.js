import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL + "/api/course";

const courseService = {
  getActiveCourses: async (
    page = 1,
    limit = 10,
    search = "",
    sortOrder = "asc"
  ) => {
    const response = await axios.get(`${baseURL}/active`, {
      params: {
        page,
        limit,
        search: search.trim(),
        sortOrder,
      },
    });

    return {
      message: response.data.message,
      data: response.data.data[0].courses,
      pagination: response.data.data[0].pagination,
    };
  },
  getCourse: async (id) => {
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

export { courseService };
