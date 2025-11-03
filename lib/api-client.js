// Centralized API client with standardized error handling and interceptors
import axios from "axios";
import API_BASE_URL from "./api-config";
import { authStorage } from "./auth-storage";

class ApiClient {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Add request interceptor for token
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = authStorage.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor for error handling
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Token expired or invalid
          authStorage.clearAuthData();
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }
        return Promise.reject(error);
      }
    );
  }

  handleError(error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message || "An error occurred";
      return {
        message,
        status: error.response?.status,
        details: error.response?.data,
      };
    }
    return {
      message: error instanceof Error ? error.message : "An unknown error occurred",
    };
  }

  async post(endpoint, data, config) {
    try {
      const response = await this.axiosInstance.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async get(endpoint, config) {
    try {
      const response = await this.axiosInstance.get(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async postFormData(endpoint, formData, config) {
    try {
      const response = await this.axiosInstance.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        ...config,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

export const apiClient = new ApiClient();
