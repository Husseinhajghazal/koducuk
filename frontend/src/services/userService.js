import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL + "/api/user";

export const userService = {
  login: async (credentials) => {
    const response = await axios.post(`${baseURL}/login`, credentials);
    return {
      message: response.data.message,
      data: response.data.data[0],
    };
  },

  getMe: async () => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.get(`${baseURL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      message: response.data.message,
      data: response.data.data[0],
    };
  },

  updateInfo: async (data) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.put(baseURL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      message: response.data.message,
      data: response.data.data[0],
    };
  },

  updatePassword: async (data) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.put(`${baseURL}/password`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      message: response.data.message,
      data: response.data.data[0],
    };
  },

  updateEmailRequest: async (data) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.post(`${baseURL}/email`, data, {
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
